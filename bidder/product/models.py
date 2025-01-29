from django.db import models
from django.utils import timezone
from user.models import User

# Create your models here.

class Product(models.Model):
    
    CHOICES=(['N','New'],
             ['O','Old'])
    
    user=models.ForeignKey(User,on_delete=models.CASCADE, blank=True)
    name=models.CharField(max_length=100)
    description=models.CharField(max_length=500)
    image=models.ImageField(null=True)
    condition=models.CharField(max_length=1,choices=CHOICES,default='N')
    damage_description=models.CharField(max_length=500)
    min_sell_price=models.IntegerField(default=0)
    min_raise_amt=models.IntegerField(default=1)
    last_date=models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name