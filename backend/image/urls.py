from django.urls import path

from image.views import GetUpdateDeleteImageResults

urlpatterns = [
    path('<int:image_id>/', GetUpdateDeleteImageResults.as_view())
]