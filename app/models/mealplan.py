from .db import db
from sqlalchemy.orm import relationship
from datetime import datetime

my_meals = db.Table("my_meals", db.Column("userId", db.Integer, db.ForeignKey("users.id")), db.Column("mealPlanId", db.Integer, db.ForeignKey("mealplans.id")))

class MealPlan(db.Model):
    __tablename__ = 'mealplans'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False, unique = True)
    title = db.Column(db.String(50), nullable = False, unique = True)
    price = db.Column(db.Float(5,2), nullable = False, unique = True)
    overview = db.Column(db.Text, nullable = False, unique = True)
    description = db.Column(db.Text, nullable = False, unique = True)

    users = db.relationship('User', secondary=my_meals, backref='mealplans')

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "overview": self.overview,
            "description": self.description
        }