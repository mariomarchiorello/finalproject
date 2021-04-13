from django.urls import path

from sample_set.views import Upload, GetAllSampleSets

urlpatterns = [
    path('new/', Upload.as_view()),
    path('all-samples/', GetAllSampleSets.as_view()),
]
