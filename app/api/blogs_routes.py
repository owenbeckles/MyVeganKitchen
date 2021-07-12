from flask import Blueprint, jsonify, session, request
from app.models import db, Blog, User
from app.forms import BlogForm
from app.api.auth_routes import validation_errors_to_error_messages
from flask_login import current_user

blogs_routes = Blueprint('blog', __name__)

# @blogs_routes.route('/')
# def all_blogs():
#     all_posts = Blog.query.order_by(Blog.id.desc()).all()
#     return {'post': [post.to_dict() for post in all_posts]}


# @blogs_routes.route('/blog/<int:id>')
# def individual_blogs(id):
#     one_post = Blog.query.get(id)
#     return one_post.to_dict()

@blogs_routes.route('', methods=['GET'])
def blogs():
    posts = Blog.query.order_by(Blog.id.desc()).all()
    return {'post': [post.to_dict() for post in posts]}

@blogs_routes.route('/', methods=['POST'])
def create_post():
    form = BlogForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        blog = Blog(
            name = form.data['name'],
            title = form.data['title'],
            content = form.data['content'],
            description = form.data['description']
        )
        db.session.add(blog)
        db.session.commit()
        return blog.to_dict()
    
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@blogs_routes.route('/<int:blogId>', methods=['DELETE'])
def delete_post():
    post = Blog.query.get(blogId)
    db.session.delete(post)
    db.session.commit()
    return {}