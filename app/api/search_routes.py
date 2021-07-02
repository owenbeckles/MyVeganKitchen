from flask import Blueprint
from app.models import db, Recipe, MealPlan, Blog

search_routes = Blueprint('search', __name__)

@recipes_routes.route('/search')
def recipes():
    all_recipes = Recipe.query.order_by(Recipe.created_at).all()
    return all_recipe.to_dict()