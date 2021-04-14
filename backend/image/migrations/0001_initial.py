# Generated by Django 3.1.7 on 2021-04-13 10:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('original_image', models.ImageField(upload_to='')),
                ('annotated_image', models.ImageField(blank=True, upload_to='')),
                ('marker_state', models.JSONField(blank=True, default=dict)),
                ('zooplankton', models.IntegerField(blank=True, null=True)),
                ('phytoplankton', models.IntegerField(blank=True, null=True)),
                ('plastic_fibers', models.IntegerField(blank=True, null=True)),
                ('plastic_particles', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]
