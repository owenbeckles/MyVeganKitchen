from flask import Blueprint, jsonify, request, session
from flask_login import login_required
from app.models import User, Comment, Recipe

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
@user_routes.route('/mykitchen', methods = ['POST', 'DELETE'])
@login_required
def my_kitchen():
    if request.method == 'POST':
        data = request.json
        recipeId = int(data['recipeId'])
        current_user.recipes.append(Recipe.query.get(recipeId))
        db.session.commit()
        return {}
    elif request.method == 'DELETE':
        current_user.recipes.remove(Recipe.query.get(recipeId))
        db.session.commit()
        return {}

# Comments
@user_routes.route('/recipes/<int:id>', methods = ['POST', 'PUT', 'DELETE'])
@login_required
def managing_comments(id):
    if request.method == 'POST':
        data = request.json
        newComment = Comment()
        newComment.userId = request.json['userId']
        newComment.recipeId = request.json['recipeId']
        newComment.comment = data
        db.session.add(newComment)
    elif request.method == 'PUT':
        comment = Comment.query.get(request.json['id'])
        comment.comment = request.json['comment']   
    elif request.method == 'DELETE':
        comment = Comment.query.get(request.json['id'])
        db.session.delete(comment)
    db.session.commit()

# Settings
# @user_routes.route('/settings/<int:id>')
# @login_required

# @user_routes.route('/settings/<int:id>/edit', methods = ['PUT'])
# @login_required
