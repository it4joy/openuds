# Generated by Django 2.2.4 on 2019-08-14 09:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('uds', '0031_auto_20190814_0943'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='DeployedServicePublicationChangelog',
            new_name='ServicePoolPublicationChangelog',
        ),
    ]
