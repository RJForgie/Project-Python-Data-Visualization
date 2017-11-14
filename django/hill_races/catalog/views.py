from django.shortcuts import render
from django.views import generic

# Create your views here.

from .models import Race

def index(request):
    """
    View function for home page of site.
    """
    # Generate counts of some of the main objects
    num_races=Race.objects.all().count()


    # Render the HTML template index.html with the data in the context variable
    return render(
        request,
        'index.html',
        context={'num_races':num_races},
    )

def data(request):
    # Render the HTML template index.html with the data in the context variable
    all_races=Race.objects.all()
    months = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for index, race in enumerate(all_races):
        if (int(race.date[6:8]) == 17):
            month = int(race.date[3:5])
            months[month - 1] += 1

    return render(
        request,
        'data_dashboard.html',
        context={'months':months},
    )

class RaceListView(generic.ListView):
    model = Race

class RaceDetailView(generic.DetailView):
    model = Race
