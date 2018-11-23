# This is a template
# Saved as .py for easier editing
from __future__ import unicode_literals

# pylint: disable=import-error, no-name-in-module
import win32crypt  # @UnresolvedImport
import os
import subprocess
from uds.log import logger  # @UnresolvedImport

from uds import tools  # @UnresolvedImport

import six

try:
    thePass = six.binary_type("""{m.password}""".encode('UTF-16LE'))
    password = win32crypt.CryptProtectData(thePass, None, None, None, None, 0x01).encode('hex')
except Exception:
    logger.info('Cannot encrypt for user, trying for machine')
    password = win32crypt.CryptProtectData(thePass, None, None, None, None, 0x05).encode('hex')

# The password must be encoded, to be included in a .rdp file, as 'UTF-16LE' before protecting (CtrpyProtectData) it in order to work with mstsc
theFile = '''{m.r.as_file}'''.format(password=password)

filename = tools.saveTempFile(theFile)
executable = tools.findApp('mstsc.exe')

try:
    subprocess.call([r'c:\windows\system32\reg.exe', 'ADD', r'HKCU\Software\Microsoft\Terminal Server Client\LocalDevices', '/v', '{m.ip}', '/t', 'REG_DWORD', '/d', '255', '/f'])
except Exception as e:
    logger.warn('Exception invoking reg.exe : %s', e)

subprocess.Popen([executable, filename])
tools.addFileToUnlink(filename)

# QtGui.QMessageBox.critical(parent, 'Notice', filename + ", " + executable, QtGui.QMessageBox.Ok)
