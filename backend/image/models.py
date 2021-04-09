from django.db import models

from sample_set.models import SampleSet


class Image(models.Model):
    sample_set = models.ForeignKey(to=SampleSet,
                                   related_name='images',
                                   null=True,
                                   on_delete=models.SET_NULL)
    original_image = models.ImageField()
    annotated_image = models.ImageField(blank=True)
    marker_state = models.JSONField(default=dict, blank=True)
    zooplankton = models.IntegerField(default=0, blank=True)
    phytoplankton = models.IntegerField(default=0, blank=True)
    plastic_fibers = models.IntegerField(default=0, blank=True)
    plastic_particles = models.IntegerField(default=0, blank=True)



