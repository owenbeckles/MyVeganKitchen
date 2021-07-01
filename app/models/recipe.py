from .db import db
from sqlalchemy.orm import relationship

class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False, unique = True)
    title = db.Column(db.String(50), nullable = False, unique = True)
    type = db.Column(db.String(50), nullable = False)
    ingredients = db.Column(db.Text, nullable = False, unique = True)
    instructions = db.Column(db.Text, nullable = False, unique = True)
    description = db.Column(db.String(100), nullable = False, unique = True)

    recipe = db.relationship("My_Recipe", back_populates="mykitchenrecipe")
    recipecomment = db.relationship("Comment", back_populates="usercomments")