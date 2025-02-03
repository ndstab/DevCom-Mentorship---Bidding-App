from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_list_or_404
from .models import Product

@csrf_exempt  # Use this only for testing; remove it in production
def product_list(request):
    if request.method == "GET":
        products = Product.objects.all().values()  # Get all products as a dictionary
        return JsonResponse(list(products), safe=False)  # Return JSON response
    return JsonResponse({"error": "Invalid request method"}, status=400)