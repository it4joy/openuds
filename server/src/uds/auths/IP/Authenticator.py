# -*- coding: utf-8 -*-

#
# Copyright (c) 2012 Virtual Cable S.L.
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
#    * Neither the name of Virtual Cable S.L. nor the names of its contributors
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


'''

@author: Adolfo Gómez, dkmaster at dkmon dot com
'''
from __future__ import unicode_literals

from django.utils.translation import ugettext_noop as _
from uds.core.auths import Authenticator
from uds.core.auths.GroupsManager import GroupsManager
from uds.core.util import net
from uds.core.util.request import getRequest

import logging

__updated__ = '2014-02-19'

logger = logging.getLogger(__name__)


class IPAuth(Authenticator):
    typeName = _('IP Authenticator')
    typeType = 'IPAuth'
    typeDescription = _('IP Authenticator')
    iconFile = 'auth.png'

    needsPassword = False
    userNameLabel = _('IP')
    groupNameLabel = _('IP Range')
    isExternalSource = True

    blockUserOnLoginFailures = False

    def initialize(self, values):
        pass

    def __unicode__(self):
        return "IP Authenticator"

    def getGroups(self, ip, groupsManager):
        # these groups are a bit special. They are in fact ip-ranges, and we must check that the ip is in betwen
        # The ranges are stored in group names
        for g in groupsManager.getGroupsNames():
            try:
                if net.ipInNetwork(ip, g):
                    groupsManager.validate(g)
            except Exception as e:
                logger.error('Invalid network for IP auth: {0}'.format(unicode(e)))

    def authenticate(self, username, credentials, groupsManager):
        # If credentials is a dict, that can't be sent directly from web interface, we allow entering
        # We use this "trick" so authenticators
        if username == getRequest().ip:
            self.getGroups(username, groupsManager)
            return True
        return False

    def internalAuthenticate(self, username, credentials, groupsManager):
        self.getGroups(username, groupsManager)
        if groupsManager.hasValidGroups() and self.dbAuthenticator().isValidUser(username, True):
            return True
        return False

    @staticmethod
    def test(env, data):
        return _("All seems fine in the authenticator.")

    def check(self):
        return _("All seems fine in the authenticator.")

    def getHtml(self, request):
        # doAutoLogin = Config.section('IPAUTH').value('autoLogin', '0').getBool()
        gm = GroupsManager(self.dbAuthenticator())
        self.getGroups(request.ip, gm)
        if gm.hasValidGroups() and self.dbAuthenticator().isValidUser(request.ip, True):
            passw = ''
            return '<script type="text/javascript">$("#id_user").val("' + request.ip + '");$("#id_password").val("' + passw + '");$("#loginform").submit();</script>'
        else:
            return '<div>This ip is not allowed to autologin (' + request.ip + ')</div><script type="text/javascript">$("#backToLogin").click()</script>'
        # We will authenticate ip here, from request.ip
        # If valid, it will simply submit form with ip submited and a cached generated random password
