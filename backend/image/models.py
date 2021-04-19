from django.db import models

from sample_set.models import SampleSet


class Image(models.Model):
    sample_set = models.ForeignKey(to=SampleSet,
                                   related_name='images',
                                   null=True,
                                   on_delete=models.SET_NULL)
    original_image = models.ImageField()
    annotated_image = models.TextField(blank=True)
    marker_state = models.JSONField(default=dict, blank=True)
    zooplankton = models.IntegerField(null=True, blank=True)
    phytoplankton = models.IntegerField(null=True, blank=True)
    plastic_fibers = models.IntegerField(null=True, blank=True)
    plastic_particles = models.IntegerField(null=True, blank=True)

    class Meta:
        ordering = ['id']
