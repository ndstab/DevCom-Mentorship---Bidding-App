from django.urls import path
from .views import login_view, logout_view,user_list
urlpatterns = [
    path("login/", login_view, name="login"),
    path("logout/", logout_view, name="logout"),
    path("get_users/", view=user_list, name="lo")
]
