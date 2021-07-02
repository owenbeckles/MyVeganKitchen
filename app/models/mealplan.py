from .db import db
from sqlalchemy.orm import relationship
from datetime import datetime

class MealPlan(db.Model):
    __tablename__ = 'mealplans'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False, unique = True)
    title = db.Column(db.String(50), nullable = False, unique = True)
    price = db.Column(db.Float(5,2), nullable = False, unique = True)
    overview = db.Column(db.Text, nullable = False, unique = True)
    description = db.Column(db.String(100), nullable = False, unique = True)
    created_at = db.Column(db.DateTime, default=datetime.now())

    plan = db.relationship("My_Meal", back_populates="mykitchenplans")