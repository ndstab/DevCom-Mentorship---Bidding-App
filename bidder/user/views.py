from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_list_or_404
from .models import User
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("home")  # Redirect to home page or dashboard
        else:
            messages.error(request, "Invalid username or password")
    return render(request, "user/login.html")

def logout_view(request):
    logout(request)
    return redirect("login")  # Redirect to login after logout

@api_view(['GET'])  # Explicitly allow GET requests
def user_list(request):
    users = User.objects.all()
    serialized_user = UserSerializer(users, many=True)
    return Response(serialized_user.data)
