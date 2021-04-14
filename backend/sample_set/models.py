from django.contrib.auth import get_user_model
from django.db import models

WATER_SURFACE = [
    ('O', 'Oily surface'),
    ('F', 'Foamy surface'),
    ('B', 'Bioluminescent')
]

WEATHER_CONDITIONS = [
    ('Storm', 'Stormy'),
    ('Rain', 'Rainy'),
    ('Sun', 'Sunny'),
    ('Cloud', 'Cloudy'),
    ('Snow', 'Snowy')
]

User = get_user_model()


class SampleSet(models.Model):
    collection_date = models.CharField(max_length=50)
    created = models.DateField(auto_now=True)
    modified = models.DateField(auto_now_add=True)
    day_or_night = models.BooleanField(default=True)
    air_temperature = models.IntegerField(blank=True, null=True)
    water_temperature = models.IntegerField(blank=True, null=True)
    sample_latitude = models.FloatField()
    sample_longitude = models.FloatField()
    sample_depth = models.FloatField(blank=True, null=True)
    submitted_by = models.ForeignKey(to=User,
                                     on_delete=models.SET_NULL,
                                     null=True,
                                     related_name='sample_sets')
    is_completed = models.BooleanField(default=False)


class WaterSurface(models.Model):
    property = models.CharField(max_length=10, choices=WATER_SURFACE, blank=True)
    sample = models.ForeignKey(to=SampleSet, related_name='water_surface', on_delete=models.CASCADE)


class WeatherCondition(models.Model):
    property = models.CharField(max_length=6, choices=WEATHER_CONDITIONS, blank=True)
    sample = models.ForeignKey(to=SampleSet, related_name='weather_conditions', on_delete=models.CASCADE)
