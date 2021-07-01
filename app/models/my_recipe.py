from .db import db
from sqlalchemy.orm import relationship

class My_Recipe(db.Model):
    __tablename__ = 'my_recipes'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(50), unique = True)
    description = db.Column(db.String(100), unique = True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    recipeId = db.Column(db.Integer, db.ForeignKey("recipes.id"))

    mykitchenrecipe = db.relationship("Recipe", back_populates="recipes")
    userrecipe = db.relationship("User", back_populates="savedrecipe")