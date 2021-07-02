from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

# My Kitchen
@user_routes.route('/mykitchen')
@login_required

# Comments
@user_routes.route('/recipes/<id>', methods = ['POST', 'PUT', 'DELETE'])
@login_required
def managing_comments():
    # if request.method == 'POST':
    #     recipeId = int()
    #     comments.append(Comment.query.get(recipeId))
    # elif request.method == 'PUT':
    # elif request.method == 'DELETE':
    # else:

# Settings
@user_routes.route('/settings/<id>')
@login_required

@user_routes.route('/settings/<id>/edit', methods = ['PUT'])
@login_required
