from __future__ import unicode_literals

from django.db import models

# Create your models here.

class PreppedMeal(models.Model):

    def __unicode__(self):
        return u'{}'.format(self.meal_type.name)

    meal_type = models.ForeignKey('PreppedMealType')

class PreppedMealTypeIngredientQuantity(models.Model):

    def __unicode__(self):
        return u'{} - {} {} - {}'.format(self.ingredient.name, self.number_of_units, self.ingredient.unit_type, self.prepped_meal_type.name)

    ingredient = models.ForeignKey('foods.Ingredient')
    prepped_meal_type = models.ForeignKey('foods.PreppedMealType')

    number_of_units = models.DecimalField(
            null=True, 
            blank=True,
            max_digits=8,
            decimal_places=3
    )

    class Meta:
        unique_together = ('ingredient','prepped_meal_type')

class PreppedMealType(models.Model):

    def __unicode__(self):
        return u'{}'.format(self.name)


    name = models.CharField(max_length=255)

    created = models.DateField(null=True, blank=True)
    best_before = models.DateField(null=True, blank=True)

    ingredients = models.ManyToManyField('foods.Ingredient', through=PreppedMealTypeIngredientQuantity)


class Ingredient(models.Model):

    def __unicode__(self):
        return u'{}'.format(self.name)

    name = models.CharField(max_length=255)

    unit_price = models.DecimalField(
            null=True, 
            blank=True,
            max_digits=6,
            decimal_places=2
    )
    unit_type = models.CharField(
            max_length=15,
            null=True,
            blank=True,
            choices=(
                ('kg','kg'),
                ('g','g'),
                ('each', 'each'),
            )
        )
