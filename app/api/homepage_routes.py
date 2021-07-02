from flask import Blueprint

homepage_routes = Blueprint('homepage', __name__)

@homepage_routes.route('/')
def homepage():
    