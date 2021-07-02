from flask import Blueprint
from app.models import db, Recipe

homepage_routes = Blueprint('homepage', __name__)

@homepage_routes.route('/')
def homepage():
    home = Recipe.query.filter_by(Recipe).order_by(Recipe.id.desc()).first()
    return home.to_dict()