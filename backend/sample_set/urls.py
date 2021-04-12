from django.urls import path

from sample_set.views import Upload

urlpatterns = [
    path('new/', Upload.as_view())
]