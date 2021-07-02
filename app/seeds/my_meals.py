from app.models import db, My_Meal

def seed_my_meals():
    my_meal1 = My_Meal(mealPlanId=1,
    userId=1)

    db.session.add(my_meal1)

    db.session.commit()

    def undo_my_meals():
        db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
        db.session.commit()