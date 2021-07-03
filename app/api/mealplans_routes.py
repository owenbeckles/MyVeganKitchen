from flask import Blueprint
from app.models import db, MealPlan

mealplans_routes = Blueprint('mealplans', __name__)

@mealplans_routes.route('/plans')
def all_mealplans():
    all_plans = MealPlan.query.filter_by(MealPlan).order_by(MealPlan.id.desc()).all()
    return plan.to_dict()


@mealplans_routes.route('/plans/<int:id>')
def individual_mealplans(id):
    one_plan = MealPlan.query.get(id)
    return one_plan.to_dict()
