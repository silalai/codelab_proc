#urls.py

from django.urls import path
from .views import (
    list_view, 
    client
)

app_name = 'main'
urlpatterns = [
    path('', list_view, name='home-list'),
    path('join-now', client, name='hangout'),
]
