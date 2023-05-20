from rest_framework.serializers import ModelSerializer
from .models import *


class Noteserializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
