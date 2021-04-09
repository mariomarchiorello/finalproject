from django.urls import path

from user.views import GetMyProfile

urlpatterns = [
    path('me/', GetMyProfile.as_view())
]