from rest_framework.generics import RetrieveUpdateDestroyAPIView

from image.models import Image
from image.serializers import ImageSerializer


class GetUpdateDeleteImageResults(RetrieveUpdateDestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    lookup_url_kwarg = 'image_id'

