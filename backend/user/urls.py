from django.urls import path

from backend.user.views import GetMyProfile

urlpatterns = [
    path('me/', GetMyProfile.as_view())
]