from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

# Create your models here.

class User(AbstractBaseUser):
    username=models.CharField(max_length=100,unique=True)
    email = models.EmailField(("email address"), unique=True)
    password=models.CharField(max_length=50,null=False)

    USERNAME_FIELD = 'username'
    def __str__(self):
        return self.username