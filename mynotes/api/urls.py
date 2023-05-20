from django.urls import path
from . import views
urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes', views.getNotes, name="getNotes"),
    path('notes/create/', views.CreateNote, name="CreateNote"),
    path('notes/<str:pk>/update/', views.updateNote, name="updateNote"),
    path('notes/<str:pk>/delete/', views.deleteNote, name="deleteNote"),




    path('notes/<str:pk>', views.get_Single_Note, name="get_Single_Note"),
]
