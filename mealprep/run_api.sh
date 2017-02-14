
export DJANGO_SETTINGS_MODULE=mealprep.settings.local
echo  $DJANGO_SETTINGS_MODULE
python manage.py runserver 0.0.0.0:8000
