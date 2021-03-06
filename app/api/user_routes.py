from flask import Blueprint, jsonify, request, session
from flask_login import login_required, current_user
from app.models import db, User, Comment, Recipe
# from app.models.blog import my_posts

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
        dict_type = {
            recipe: {current_user.recipes, Recipe},
            blogpost: {current_user.blogposts, Blogpost},
            mealplan: {current_user.mealplans, MealPlan}
            }
        itemId = int(data['itemId'])
        type = data['type']
        assoc, model = dict_type[type]
        assoc.append(model.query.get(itemId))
        db.session.commit()
        return {}
    elif request.method == 'DELETE':
        assoc.remove(model.query.get(itemId))
        db.session.commit()
        return {}

# Comments
# @user_routes.route('/comment/<int:id>')
# @login_required
# def loading_comments(id):
#     recipe = Recipe.query.get(id).to_dict()
#     print('*********************', recipe)
#     recipeComments = recipe['comment']
#     return {'comments': recipeComments}

@user_routes.route('/', methods = ['POST'])
@login_required
def managing_comments():
    data = request.json
    print("************************", data)
    if request.method == 'POST':
        print(data)
        newComment = Comment(
            userId = current_user.id,
            recipeId = data['comment']['recipeId'],
            comment = data['comment']['comment']
        )
        db.session.add(newComment)
        db.session.commit()
        return {'comments': [c.to_dict() for c in newComment.recipe.comments], 'comment': newComment.to_dict()}

@user_routes.route('/', methods=['DELETE'])
@login_required
def deleting_comments():
    data = request.json
    print("******************", data)
    comment = Comment.query.filter_by(comment = data['comment']).first()
    print("******************", comment)
    db.session.delete(comment)
    db.session.commit()
    return {}

@user_routes.route('/', methods=['PUT'])
@login_required
def update_comments():
    data = request.json
    comment = Comment.query.get(int(data['id']))
    comment.comment = data['comment']
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()

# @user_routes.route('/<int:id>', methods = ['DELETE'])
# @login_required
# def deleting_comments():
#     comment = Comment.query.get(id)
#     db.session.delete(comment)
#     db.session.commit()

# Settings
# @user_routes.route('/<int:id>')
# @login_required
# def settings_page(id):
#     settings = User.query.get(id)
#     return settings.to_dict()

# @user_routes.route('/<int:id>/edit', methods = ['PUT'])
# @login_required
# def settings_edit(id):
#     id = request.json['id']
#     user = User.query.get(id)
#     user.email = request.json['email']
#     db.session.add(user)
#     db.session.commit()
