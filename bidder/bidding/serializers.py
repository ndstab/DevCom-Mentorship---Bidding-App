from rest_framework import serializers
from .models import Bidding

class BiddingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bidding
        fields = '__all__'