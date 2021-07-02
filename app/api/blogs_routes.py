from flask import Blueprint
from app.models import db, Blog

blogs_routes = Blueprint('blog', __name__)

@blogs_routes.route('/blog')
def all_blogs():
    all_posts = Blog.query.filter_by(Blog).order_by(Blog.id.desc()).all()
    return all_posts.to_dict()


@recipes_routes.route('/blog/<int:id>')
def individual_blogs(id):
    one_post = Blog.query.get(id)
    return one_post.to_dict()