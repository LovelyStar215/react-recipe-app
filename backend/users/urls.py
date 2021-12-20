from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from users import views

app_name = 'users'

urlpatterns = [
    path('register/', views.UserRegisterationAPIView.as_view(),
         name="create-user"),
    path('login/', views.UserLoginAPIView.as_view(), name="login-user"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('logout/', views.UserLogoutAPIView.as_view(), name='logout-user'),
    path('<int:pk>/', views.UserAPIView.as_view(), name='user-info'),
    path('profile/<int:pk>/', views.UserProfileAPIView.as_view(),
         name='user-profile'),
    path('profile/<int:pk>/favorites/', views.UserFavoriteListAPIView.as_view(),
         name='user-favorites'),
]
