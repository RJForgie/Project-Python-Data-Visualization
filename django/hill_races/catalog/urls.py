from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^races/$', views.RaceListView.as_view(), name='races'),
    url(r'^race/(?P<pk>\d+)$', views.RaceDetailView.as_view(), name='race-detail'),
    url(r'^data/$', views.data, name='data'),
]
