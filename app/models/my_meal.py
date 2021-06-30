from .db import db
from sqlalchemy.orm import relationship

class My_Meal(db.Model):
    __tablename__ = 'my_meals'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False, unique = True)
    title = db.Column(db.String(50), nullable = False, unique = True)
    price = db.Column(db.Float(5,2), nullable = False, unique = True)
    overview = db.Column(db.Text, nullable = False, unique = True)
    description = db.Column(db.String(100), nullable = False, unique = True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    mealPlanId = db.Column(db.Integer, db.ForeignKey("mealplans.id"))