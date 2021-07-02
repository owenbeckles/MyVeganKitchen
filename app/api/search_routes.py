from flask import Blueprint
from app.models import db, Recipe, MealPlan, Blog

search_routes = Blueprint('search', __name__)

@search_routes.route('/search')
def searches():
    