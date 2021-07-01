from .db import db
from sqlalchemy.orm import relationship

class My_Post(db.Model):
    __tablename__ = 'my_posts'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    blogId = db.Column(db.Integer, db.ForeignKey("blogs.id"))

    mykitchenblog = db.relationship("Blog", back_populates="post")
    userpost = db.relationship("User", back_populates="savedpost")