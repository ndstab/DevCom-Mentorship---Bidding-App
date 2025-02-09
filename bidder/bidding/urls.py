from django.urls import path
from .views import get_highest_bid, place_bid

urlpatterns = [
    path("place_bid/", view=place_bid),
    path("get_highest_bid/", view=get_highest_bid),
]
