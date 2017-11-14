from django.contrib import admin
from .models import Race

# admin.site.register(Race)

# Register the Admin classes for Book using the decorator
@admin.register(Race)
class RaceAdmin(admin.ModelAdmin):
    pass
