from django.urls import path

from sample_set.views import Upload, GetAllSampleSets, GetSamplesFromUser, GetPatchDeleteSampleView

urlpatterns = [
    path('new/', Upload.as_view()),
    path('all-samples/', GetAllSampleSets.as_view()),
    path('my-samples/', GetSamplesFromUser.as_view()),
    path('<int:sample_id>/',  GetPatchDeleteSampleView.as_view())
]
