from rest_framework import viewsets
from .serializers import *
from .models import *

class PreppedMealViewSet(viewsets.ModelViewSet):

    serializer_class = PreppedMealSerializer
    queryset = PreppedMeal.objects.all()

class PreppedMealTypeIngredientQuantityViewSet(viewsets.ModelViewSet):

    serializer_class = PreppedMealTypeIngredientQuantitySerializer
    queryset = PreppedMealTypeIngredientQuantity.objects.all()


class PreppedMealTypeViewSet(viewsets.ModelViewSet):

    serializer_class = PreppedMealTypeSerializer
    queryset = PreppedMealType.objects.all()

class IngredientViewSet(viewsets.ModelViewSet):

    serializer_class = IngredientSerializer
    queryset = Ingredient.objects.all()

