from django.urls import path
from .views import product_list

urlpatterns = [
    path("get_products/", view=product_list, name="login"),
]
