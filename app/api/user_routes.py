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
        # data = request.json['recipe']
        # newRecipe = Recipe()
        # newRecipe.userId = current_user.id
        # newRecipe.name = data['name']
        # newRecipe.title = data['title']
        # newRecipe.type = data['type']
        # newRecipe.description = data['description']
        # newRecipe.ingredients = data['ingredients']
        # newRecipe.instructions = data['instructions']
        db.session.add(newRecipe)
        return {'recipes': [r.to_dict() for r in newRecipe.recipe], 'recipe': newRecipe.to_dict()}
    elif request.method == 'DELETE':
        assoc.remove(model.query.get(itemId))
        db.session.commit()
        return {}

# Comments
@user_routes.route('/', methods = ['POST', 'PUT', 'DELETE'])
@login_required
def managing_comments():
    if request.method == 'POST':
        data = request.json['comment']
        print(data)
        newComment = Comment()
        newComment.userId = current_user.id
        newComment.recipeId = data['recipeId']
        newComment.comment = data['comment']
        db.session.add(newComment)
        db.session.commit()
        return {'comments': [c.to_dict() for c in newComment.recipe.comments], 'comment': newComment.to_dict()}
    elif request.method == 'PUT':
        comment = Comment.query.get(request.json['comment'])
        comment.comment = request.json['comment']   
    elif request.method == 'DELETE':
        comment = Comment.query.get(request.json['id'])
        print(comment)
        db.session.delete(comment)
        db.session.commit()

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
