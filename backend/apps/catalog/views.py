from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


@api_view(["GET"])
@permission_classes([AllowAny])
def products(request):
    data = [
        {
            "id": 1,
            "name": "Mechanical Keyboard",
            "price": 89.99,
        },
        {
            "id": 2,
            "name": "Wireless Mouse",
            "price": 49.99,
        },
        {
            "id": 3,
            "name": "USB-C Hub",
            "price": 29.99,
        },
    ]

    return Response(data)
