# Generated by Django 3.2.9 on 2021-12-05 12:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import recipe.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='RecipeCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Category name')),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(upload_to='uploads')),
                ('title', models.CharField(max_length=200)),
                ('desc', models.CharField(max_length=200, verbose_name='Short description')),
                ('cook_time', models.TimeField()),
                ('ingredients', models.TextField()),
                ('procedure', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recipes', to=settings.AUTH_USER_MODEL)),
                ('category', models.ForeignKey(on_delete=models.SET(recipe.models.get_default_recipe_category), related_name='recipe_list', to='recipe.recipecategory')),
            ],
            options={
                'ordering': ('-created_at',),
            },
        ),
    ]
