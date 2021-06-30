from .db import db
from sqlalchemy.orm import relationship

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key = True)
    comment = db.Column(db.Text, unique = True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    recipeId = db.Column(db.Integer, db.ForeignKey("recipes.id"))

    comments = db.relationship("User", back_populates="person")
    usercomments = db.relationship("User", back_populates="recipecomment")