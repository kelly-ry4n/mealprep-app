from .models import *
from rest_framework import serializers

class PreppedMealSerializer(serializers.ModelSerializer):

    class Meta:
        model = PreppedMeal
        fields = '__all__'

class PreppedMealTypeIngredientQuantitySerializer(serializers.ModelSerializer):

    class Meta:
        model = PreppedMealTypeIngredientQuantity
        fields = '__all__'

class PreppedMealTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = PreppedMealType
        fields = '__all__'

class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = '__all__'
