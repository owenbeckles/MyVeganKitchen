from flask import Blueprint
from app.models import db, Recipe

recipes_routes = Blueprint('homepage', __name__)

@recipes_routes.route('/recipes')
def recipes():
    recipes = Recipe.query.order_by(Recipe.created_at).all()