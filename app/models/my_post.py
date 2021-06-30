from .db import db
from sqlalchemy.orm import relationship

class My_Post(db.Model):
    __tablename__ = 'my_posts'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False, unique = True)
    title = db.Column(db.String(50), nullable = False, unique = True)
    content = db.Column(db.Text, nullable = False, unique = True)
    description = db.Column(db.String(100), nullable = False, unique = True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    blogId = db.Column(db.Integer, db.ForeignKey("blogs.id"))