from rest_framework import serializers

from image.serializers import ImageSerializer
from sample_set.models import SampleSet


class SampleSetSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)
    # water_surface = WaterSurfaceSerializer(read_only=True, many=True)
    # weather_conditions = WeatherSerializer(read_only=True, many=True)

    class Meta:
        model = SampleSet
        fields = '__all__'
