from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.

@csrf_exempt  # Use this only for testing; remove it in production
def place_bid(request):
    if request.method == "POST":
        try:
            data=json.loads(request.body)
            user_id=data.get("user_id")
            product_id=data.get("product_id")
            bid_amt = data.get("bid_amt")

            if not all ([user_id,product_id,bid_amt]):
                return JsonResponse({"error":"Missing Required Fields"},status=400)
            
            user = get_object_or_404(user,id=user_id)
            product=get_object_or_404(product,id=product_id)

            #To Get the Highest Bid
            highest_bid_amt = product.highest_bid

            if highest_bid_amt:
                min_required_bid = highest_bid_amt + product.min_raise_amt
            else:
                min_required_bid = product.min_sell_price

            if bid_amt < min_required_bid:
                return JsonResponse({"error":"Bid must be atleast {min_required_bid}"},status=400)
            else:
                product.highest_bid = bid_amt
                product.save()
        except json.JSONDecodeError:
            return JsonResponse({"error":"Invalid Json Data"},status=400)

    return JsonResponse({"error":"Invalid Request Method"},status=405)    

def get_highest_bid(request,product_id):
    product = get_object_or_404(product, id=product_id)
    return JsonResponse({"highest_bid":product.highest_bid,"product_name":product.name})