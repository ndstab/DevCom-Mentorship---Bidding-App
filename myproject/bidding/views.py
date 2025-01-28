from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import  login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
