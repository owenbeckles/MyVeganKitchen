from .db import db
from sqlalchemy.orm import relationship

class My_Meal(db.Model):
    __tablename__ = 'my_meals'

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(50), unique = True)
    price = db.Column(db.Float(5,2), unique = True)
    description = db.Column(db.String(100), unique = True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    mealPlanId = db.Column(db.Integer, db.ForeignKey("mealplans.id"))

    mykitchenplans = db.relationship("MealPlan", back_populates="plan")
    usermeal = db.relationship("User", back_populates="savedplan")