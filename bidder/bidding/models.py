from django.db import models
from user.models import User
from product.models import Product

# Create your models here.

class Bidding(models.Model):

    user=models.ForeignKey(User,on_delete=models.CASCADE, blank=True)
    product=models.ForeignKey(Product,on_delete=models.CASCADE, blank=True)
    bid_amt=models.IntegerField()

    def __str__(self):
        return self.user.username