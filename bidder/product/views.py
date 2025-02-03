from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_list_or_404
from .models import Product
from rest_framework.response import Response
from .serializers import ProductSerializer
from rest_framework.decorators import api_view
from rest_framework import status

@csrf_exempt  # Use this only for testing; remove it in production
def product_list(request):
    if request.method == "GET":
        products = Product.objects.all().values()  # Get all products as a dictionary
        return JsonResponse(list(products), safe=False)  # Return JSON response
    return JsonResponse({"error": "Invalid request method"}, status=400)
@csrf_exempt  # Only use this if CSRF is explicitly required; otherwise, remove it
@api_view(['POST'])  # Use DRF's api_view decorator for proper request handling
def product_add(request):
    if request.method == "POST":
        # Use a serializer to validate and save the data
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            # Save the product and return the created instance
            product = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            # Return validation errors with a 400 Bad Request status
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

