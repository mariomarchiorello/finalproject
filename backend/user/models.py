from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    return f'{instance.id}/{filename}'


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    MODES = [
        (1, 'plankton mode'),
        (2, 'dark mode'),
        (3, 'light mode')
    ]

    home_latitude = models.CharField(max_length=25, blank=True)
    home_longitude = models.CharField(max_length=25, blank=True)
    vessel_name = models.CharField(max_length=100, blank=True)
    vessel_id = models.CharField(max_length=100, blank=True)
    mode = models.IntegerField(choices=MODES, default=1)

    def __str__(self):
        return f'{User.id} {User.email}'
