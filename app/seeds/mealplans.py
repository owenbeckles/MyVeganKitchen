from app.models import db, MealPlan

def seed_mealplans():
    plan1 = MealPlan(name='7daymealplan',
    title='7 Day Meal Plan',
    price=4.99,
    overview='This meal plan is my go-to recommendation to new vegans, people wanting to eat more plant based or vegans who want to cut out processed foods and learn to eat more whole foods! This plan includes breakfast, lunch, dinner, and 2 snacks each day! The first 25 people who purchase this meal plan get it for free!',
    description='A meal plan curated towards new vegans.'
    )

    user = User.query.one()

    db.session.add(plan1)

    user.mealplans.extend([plan1])

    db.session.commit()

    def undo_mealplans():
        db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
        db.session.commit()