from django.contrib.auth import get_user_model
from django.db import models

# WATER_SURFACE = [
#     ('Oil', 'Oily surface'),
#     ('Foam', 'Foamy surface'),
#     ('Bioluminescence', 'Bioluminescent')
# ]
#
# WEATHER_CONDITIONS = [
#     ('Storm', 'Stormy'),
#     ('Rain', 'Rainy'),
#     ('Sun', 'Sunny'),
#     ('Cloud', 'Cloudy'),
#     ('Snow', 'Snowy')
# ]

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
    water_oil = models.BooleanField(null=True, default=False)
    water_foam = models.BooleanField(null=True, default=False)
    water_bioluminescence = models.BooleanField(null=True, default=False)
    weather_storm = models.BooleanField(null=True, default=False)
    weather_rain = models.BooleanField(null=True, default=False)
    weather_sun = models.BooleanField(null=True, default=False)
    weather_cloud = models.BooleanField(null=True, default=False)
    weather_snow = models.BooleanField(null=True, default=False)


# class WaterSurface(models.Model):
#     property = models.CharField(max_length=20, choices=WATER_SURFACE, blank=True)
#     sample = models.ForeignKey(to=SampleSet, related_name='water_surface', on_delete=models.CASCADE)
#
#
# class WeatherCondition(models.Model):
#     property = models.CharField(max_length=6, choices=WEATHER_CONDITIONS, blank=True)
#     sample = models.ForeignKey(to=SampleSet, related_name='weather_conditions', on_delete=models.CASCADE)
