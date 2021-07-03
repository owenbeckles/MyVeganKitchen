from flask import Blueprint
from app.models import db, Recipe, MealPlan, Blog

search_routes = Blueprint('search', __name__)

@search_routes.route('/search/<str:type>')
def searches(type):
    recipes = Recipe.query.filter(Recipe.title.contains(type)).all()
    return recipes.to_dict()
