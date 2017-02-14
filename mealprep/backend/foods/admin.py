from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(PreppedMeal,admin.ModelAdmin)
admin.site.register(PreppedMealTypeIngredientQuantity,admin.ModelAdmin)
admin.site.register(PreppedMealType,admin.ModelAdmin)
admin.site.register(Ingredient,admin.ModelAdmin)
