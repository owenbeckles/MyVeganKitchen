from flask import Blueprint
from app.models import db, Recipe, MealPlan, Blog

search_routes = Blueprint('search', __name__)

@search_routes.route('/search/<string:type>')
def searches(type):
    recipes = Recipe.query.filter(Recipe.name.like(f'%{type}%')).all()
    return {'search': [search.to_dict() for search in recipes]}
