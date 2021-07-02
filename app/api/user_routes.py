from flask import Blueprint, jsonify, request
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
@user_routes.route('/recipes/<int:id>', methods = ['POST', 'PUT', 'DELETE'])
@login_required
def managing_comments(id):
    if request.method == 'POST':
        data = request.json
        newcomment = Comment()
        newComment.userId = request.json['userId']
        newComment.recipeId = request.json['recipeId']
        newComment.comment = data
        db.session.add(newComment)
        db.session.commit()
    elif request.method == 'PUT':   
    elif request.method == 'DELETE':
        comment = Comment.query.get(id)
        db.session.delete(comment)
        db.session.commit()
    else:

# Settings
@user_routes.route('/settings/<int:id>')
@login_required

@user_routes.route('/settings/<int:id>/edit', methods = ['PUT'])
@login_required
