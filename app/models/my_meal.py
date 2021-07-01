from .db import db
from sqlalchemy.orm import relationship

class My_Meal(db.Model):
    __tablename__ = 'my_meals'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    mealPlanId = db.Column(db.Integer, db.ForeignKey("mealplans.id"))

    mykitchenplans = db.relationship("MealPlan", back_populates="plan")
    usermeal = db.relationship("User", back_populates="savedplan")