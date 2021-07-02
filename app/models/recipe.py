from .db import db
from sqlalchemy.orm import relationship
from datetime import datetime

my_recipes = db.Table('my_recipes', db.Column(db.Integer, db.ForeignKey("users.id")), db.Column(db.Integer, db.ForeignKey("recipes.id")))

class Recipe(db.Model):
    __tablename__ = 'recipes'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False, unique = True)
    title = db.Column(db.String(50), nullable = False, unique = True)
    type = db.Column(db.String(50), nullable = False)
    ingredients = db.Column(db.Text, nullable = False, unique = True)
    instructions = db.Column(db.Text, nullable = False, unique = True)
    description = db.Column(db.String(100), nullable = False, unique = True)

    recipecomment = db.relationship("Comment", back_populates="usercomments")

    users = db.relationship('User', secondary=my_recipes, backref='recipes')