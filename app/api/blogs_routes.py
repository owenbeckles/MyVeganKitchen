from flask import Blueprint
from app.models import db, Blog

blogs_routes = Blueprint('blog', __name__)

@blogs_routes.route('/')
def all_blogs():
    all_posts = Blog.query.order_by(Blog.id.desc()).all()
    return {'post': [post.to_dict() for post in all_posts]}


@blogs_routes.route('/blog/<int:id>')
def individual_blogs(id):
    one_post = Blog.query.get(id)
    return one_post.to_dict()