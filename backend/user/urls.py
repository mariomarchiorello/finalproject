from django.urls import path

from user.views import GetEditDeleteMyProfile, GetAllUsers

urlpatterns = [
    path('me/', GetEditDeleteMyProfile.as_view()),
    path('all/', GetAllUsers.as_view())
]
