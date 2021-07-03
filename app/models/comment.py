from .db import db
from sqlalchemy.orm import relationship
from datetime import datetime

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key = True)
    comment = db.Column(db.Text, unique = True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    recipeId = db.Column(db.Integer, db.ForeignKey("recipes.id"))
    created_at = db.Column(db.DateTime, default=datetime.now())

    comments = db.relationship("User", back_populates="person")
    usercomments = db.relationship("Recipe", back_populates="recipecomment")