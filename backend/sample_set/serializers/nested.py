from rest_framework import serializers
from sample_set.models import SampleSet, WaterSurface
from user.serializers.nested import UsersForMapSerializer


class AllSampleSetsSerializer(serializers.ModelSerializer):
    submitted_by = UsersForMapSerializer(read_only=True)
    total_zooplankton = serializers.SerializerMethodField()
    total_phytoplankton = serializers.SerializerMethodField()
    total_plastic_fibers = serializers.SerializerMethodField()
    total_plastic_particles = serializers.SerializerMethodField()

    @staticmethod
    def get_total_zooplankton(instance):
        sum = 0
        images = instance.images.all()
        for image in images:
            if image.zooplankton is None:
                image.zooplankton = 0
            sum += image.zooplankton
        return sum

    @staticmethod
    def get_total_phytoplankton(instance):
        sum = 0
        images = instance.images.all()
        for image in images:
            if image.phytoplankton is None:
                image.phytoplankton = 0
            sum += image.phytoplankton
        return sum

    @staticmethod
    def get_total_plastic_fibers(instance):
        sum = 0
        images = instance.images.all()
        for image in images:
            if image.plastic_fibers is None:
                image.plastic_fibers = 0
            sum += image.plastic_fibers
        return sum

    @staticmethod
    def get_total_plastic_particles(instance):
        sum = 0
        images = instance.images.all()
        for image in images:
            if image.plastic_particles is None:
                image.plastic_particles = 0
            sum += image.plastic_particles
        return sum

    class Meta:
        model = SampleSet
        fields = ['id',
                  'collection_date',
                  'day_or_night',
                  'air_temperature',
                  'water_temperature',
                  'sample_latitude',
                  'sample_longitude',
                  'sample_depth',
                  'submitted_by',
                  'total_zooplankton',
                  'total_phytoplankton',
                  'total_plastic_fibers',
                  'total_plastic_particles',
                  'images'
                  ]


class WaterSurfaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaterSurface
        fields = '__all__'
