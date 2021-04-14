from rest_framework import serializers

from image.models import Image
from image.serializers import ImageSerializer
from sample_set.models import SampleSet
from sample_set.serializers.nested import WaterSurfaceSerializer


class SampleSetSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)
    water_surface = WaterSurfaceSerializer(read_only=True, many=True)

    class Meta:
        model = SampleSet
        fields = '__all__'
