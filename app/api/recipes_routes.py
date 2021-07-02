from flask import Blueprint
from app.models import db, Recipe

recipes_routes = Blueprint('recipes', __name__)

@recipes_routes.route('/recipes')
def recipes():
    all_recipes = Recipe.query.filter_by(Recipe).order_by(Recipe.id.desc()).all()
    return all_recipe.to_dict()


@recipes_routes.route('/recipess/<int:id>')
def individual_recipes(id):
    one_recipe = Recipe.query.get(id)
    return one_recipe.to_dict()