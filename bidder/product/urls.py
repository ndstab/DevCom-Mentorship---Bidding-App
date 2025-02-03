from django.urls import path
from .views import product_list, product_add

urlpatterns = [
    path("get_products/", view=product_list),
    path("add_products/", view=product_add),
]
