from .db import db
from sqlalchemy.orm import relationship
from datetime import datetime

my_posts = db.Table('my_posts', db.Column(db.Integer, db.ForeignKey("users.id")),blogId = db.Column(db.Integer, db.ForeignKey("blogs.id")))

class Blog(db.Model):
    __tablename__ = 'blogs'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False, unique = True)
    title = db.Column(db.String(50), nullable = False, unique = True)
    content = db.Column(db.Text, nullable = False, unique = True)
    description = db.Column(db.String(100), nullable = False, unique = True)
    created_at = db.Column(db.DateTime, default=datetime.now())

    # post = db.relationship("My_Post", back_populates="mykitchenblog")
    users = db.relationship('User', secondary=my_posts, backref='blogs')