from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UsersForMapSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id',
                  'username',
                  'first_name',
                  'last_name',
                  'home_latitude',
                  'home_longitude',
                  'vessel_id',
                  'vessel_name',
                  ]
