# -*- coding: utf-8 -*-
#
# Copyright (c) 2012-2023 Virtual Cable S.L.U.
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without modification,
# are permitted provided that the following conditions are met:
#
#    * Redistributions of source code must retain the above copyright notice,
#      this list of conditions and the following disclaimer.
#    * Redistributions in binary form must reproduce the above copyright notice,
#      this list of conditions and the following disclaimer in the documentation
#      and/or other materials provided with the distribution.
#    * Neither the name of Virtual Cable S.L.U. nor the names of its contributors
#      may be used to endorse or promote products derived from this software
#      without specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
# AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
# DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
# SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
# CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
# OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
# OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
"""
@author: Adolfo Gómez, dkmaster at dkmon dot com
"""
import json
import logging
import typing
import collections.abc

from django.http import HttpResponse
from django.views.decorators.cache import cache_page, never_cache

from uds.core.auths.auth import web_login_required, web_password
from uds.core.managers.user_service import UserServiceManager
from uds.core.types.request import ExtendedHttpRequest
from uds.core.consts.images import DEFAULT_IMAGE
from uds.core.util.model import processUuid
from uds.models import Transport, Image
from uds.core.util import log
from uds.core.services.exceptions import ServiceNotReadyError

from uds.web.util import services

# Not imported at runtime, just for type checking
if typing.TYPE_CHECKING:
    from uds.core.types.request import ExtendedHttpRequestWithUser
    from uds.models import UserService

logger = logging.getLogger(__name__)


@web_login_required(admin=False)
def transportOwnLink(request: 'ExtendedHttpRequestWithUser', idService: str, idTransport: str):
    response: collections.abc.MutableMapping[str, typing.Any] = {}

    # If userService is not owned by user, will raise an exception

    # For type checkers to "be happy"
    try:
        res = UserServiceManager().get_user_service_info(request.user, request.os, request.ip, idService, idTransport)
        ip, userService, iads, trans, itrans = res
        # This returns a response object in fact
        if itrans and ip:
            response = {
                'url': itrans.getLink(
                    userService,
                    trans,
                    ip,
                    request.os,
                    request.user,
                    web_password(request),
                    request,
                )
            }
    except ServiceNotReadyError as e:
        response = {'running': e.code * 25}
    except Exception as e:
        logger.exception("Exception")
        response = {'error': str(e)}

    return HttpResponse(content=json.dumps(response), content_type='application/json')


# pylint: disable=unused-argument
@cache_page(3600, key_prefix='img', cache='memory')
def transportIcon(request: 'ExtendedHttpRequest', idTrans: str) -> HttpResponse:
    try:
        transport: Transport
        if idTrans[:6] == 'LABEL:':
            # Get First label
            transport = Transport.objects.filter(label=idTrans[6:]).order_by('priority')[
                0  # type: ignore  # Slicing is not supported by pylance right now
            ]
        else:
            transport = Transport.objects.get(uuid=processUuid(idTrans))
        return HttpResponse(transport.get_instance().icon(), content_type='image/png')
    except Exception:
        return HttpResponse(DEFAULT_IMAGE, content_type='image/png')


@cache_page(3600, key_prefix='img', cache='memory')
def serviceImage(request: 'ExtendedHttpRequest', idImage: str) -> HttpResponse:
    try:
        icon = Image.objects.get(uuid=processUuid(idImage))
        return icon.imageResponse()
    except Image.DoesNotExist:
        pass  # Tries to get image from transport

    try:
        transport: Transport = Transport.objects.get(uuid=processUuid(idImage))
        return HttpResponse(transport.get_instance().icon(), content_type='image/png')
    except Exception:
        return HttpResponse(DEFAULT_IMAGE, content_type='image/png')


@web_login_required(admin=False)
@never_cache
def userServiceEnabler(
    request: 'ExtendedHttpRequestWithUser', idService: str, idTransport: str
) -> HttpResponse:
    return HttpResponse(
        json.dumps(services.enableService(request, idService=idService, idTransport=idTransport)),
        content_type='application/json',
    )


def closer(request: 'ExtendedHttpRequest') -> HttpResponse:
    """Returns a page that closes itself (used by transports)"""
    return HttpResponse(
        '<html><head><script>window.close();</script></head><body></body></html>',
        content_type='text/html',
    )
    # return HttpResponse('<html><body onload="window.close()"></body></html>')


@web_login_required(admin=False)
@never_cache
def userServiceStatus(request: 'ExtendedHttpRequestWithUser', idService: str, idTransport: str) -> HttpResponse:
    '''
    Returns;
     'running' if not ready
     'ready' if is ready but not accesed by client
     'accessed' if ready and accesed by UDS client
     'error' if error is found (for example, intancing user service)
    Note:
    '''
    ip: typing.Union[str, None, bool]
    userService: typing.Optional['UserService'] = None
    status = 'running'
    # If service exists (meta or not)
    if UserServiceManager().is_meta_service(idService):
        userService = UserServiceManager().locateMetaService(user=request.user, idService=idService)
    else:
        userService = UserServiceManager().locate_user_service(
            user=request.user, idService=idService, create=False
        )
    if userService:
        # Service exists...
        try:
            userServiceInstance = userService.get_instance()
            ip = userServiceInstance.getIp()
            userService.log_ip(ip)
            # logger.debug('Res: %s %s %s %s %s', ip, userService, userServiceInstance, transport, transportInstance)
        except ServiceNotReadyError:
            ip = None
        except Exception as e:
            ip = False

        ready = 'ready'
        if userService.properties.get('accessed_by_client', False) is True:
            ready = 'accessed'

        status = 'running' if ip is None else 'error' if ip is False else ready

    return HttpResponse(json.dumps({'status': status}), content_type='application/json')


@web_login_required(admin=False)
@never_cache
def action(request: 'ExtendedHttpRequestWithUser', idService: str, actionString: str) -> HttpResponse:
    userService = UserServiceManager().locateMetaService(request.user, idService)
    if not userService:
        userService = UserServiceManager().locate_user_service(request.user, idService, create=False)

    response: typing.Any = None
    rebuild: bool = False
    if userService:
        if actionString == 'release' and userService.deployed_service.allow_users_remove:
            rebuild = True
            log.log(
                userService.deployed_service,
                log.LogLevel.INFO,
                "Removing User Service {} as requested by {} from {}".format(
                    userService.friendly_name, request.user.pretty_name, request.ip
                ),
                log.LogSource.WEB,
            )
            UserServiceManager().request_logoff(userService)
            userService.release()
        elif (
            actionString == 'reset'
            and userService.deployed_service.allow_users_reset
            and userService.deployed_service.service.get_type().canReset  # type: ignore
        ):
            rebuild = True
            log.log(
                userService.deployed_service,
                log.LogLevel.INFO,
                "Reseting User Service {} as requested by {} from {}".format(
                    userService.friendly_name, request.user.pretty_name, request.ip
                ),
                log.LogSource.WEB,
            )
            # UserServiceManager().requestLogoff(userService)
            UserServiceManager().reset(userService)

    if rebuild:
        # Rebuild services data, but return only "this" service
        for v in services.getServicesData(request)['services']:
            if v['id'] == idService:
                response = v
                break

    return HttpResponse(json.dumps(response), content_type="application/json")
