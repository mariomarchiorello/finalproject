from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response

from image.models import Image
from sample_set.models import SampleSet
from sample_set.serializers.default import SampleSetSerializer
from sample_set.serializers.nested import AllSampleSetsSerializer


class Upload(CreateAPIView):
    queryset = SampleSet.objects.all()
    serializer_class = SampleSetSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        new_sample = serializer.save(submitted_by=request.user)
        for image in request.FILES.getlist('images'):
            new_image = Image(original_image=image, sample_set=new_sample)
            new_image.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class GetAllSampleSets(ListAPIView):
    queryset = SampleSet.objects.all()
    serializer_class = AllSampleSetsSerializer
