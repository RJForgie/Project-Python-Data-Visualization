from django.db import models
import uuid # Required for unique race instances

# Create your models here.

from django.urls import reverse #Used to generate URLs by reversing the URL patterns

class Race(models.Model):
    """
    Model representing a race.
    """
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    date = models.CharField(max_length=10)
    distance = models.IntegerField()
    climb = models.IntegerField()


    def __str__(self):
        """
        String for representing the Model object.
        """
        return self.name


    def get_absolute_url(self):
        """
        Returns the url to access a particular book instance.
        """
        return reverse('race-detail', args=[str(self.id)])
