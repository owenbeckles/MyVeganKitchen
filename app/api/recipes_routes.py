from flask import Blueprint
from app.models import db, Recipe

recipes_routes = Blueprint('recipes', __name__)

@recipes_routes.route('/')
def recipes():
    all_recipes = Recipe.query.order_by(Recipe.id.desc()).all()
    return {'recipe': [recipe.to_dict() for recipe in all_recipes]}


@recipes_routes.route('/recipes/<int:id>')
def individual_recipes(id):
    one_recipe = Recipe.query.get(id)
    return one_recipe.to_dict()