from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateDestroyAPIView

from backend.user.serializers import UserSerializer

User = get_user_model()


class GetMyProfile(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

