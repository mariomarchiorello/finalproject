from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView

from user.serializers.default import UserSerializer

User = get_user_model()


class GetEditDeleteMyProfile(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class GetAllUsers(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
