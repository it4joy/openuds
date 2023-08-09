# -*- coding: utf-8 -*-
#
# Copyright (c) 2023 Virtual Cable S.L.U.
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
Author: Adolfo Gómez, dkmaster at dkmon dot com
"""
import logging
import typing

from django.utils.translation import gettext as _

from uds.core import types
from uds.core.util import singleton

from .servers_api import request


if typing.TYPE_CHECKING:
    from uds import models

logger = logging.getLogger(__name__)
traceLogger = logging.getLogger('traceLog')
operationsLogger = logging.getLogger('operationsLog')


class ServerManager(metaclass=singleton.Singleton):
    def __init__(self):
        pass

    @staticmethod
    def manager() -> 'ServerManager':
        return ServerManager()  # Singleton pattern will return always the same instance

    def notifyPreconnect(
        self,
        server: 'models.RegisteredServer',
        userService: 'models.UserService',
        info: types.connections.ConnectionInfoType,
    ) -> None:
        """
        Notifies preconnect to server
        """
        request.ServerApiRequester(server).notifyPreconnect(userService, info)

    def notifyRemoval(self, server: 'models.RegisteredServer', userService: 'models.UserService') -> None:
        """
        Notifies removal to server
        """
        request.ServerApiRequester(server).notifyRemoval(userService)

    def processNotification(self, server: 'models.RegisteredServer', data: str) -> None:
        """
        Processes a notification from server
        """
        pass
