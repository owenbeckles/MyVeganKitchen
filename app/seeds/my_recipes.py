from app.models import db, My_Recipe

def seed_my_recipes():
    my_recipe1 = My_Recipe(recipeId=1,
    userId=1)

    my_recipe2 = My_Recipe(recipeId=2,
    userId=1)

    my_recipe3 = My_Recipe(recipeId=3,
    userId=1)

    my_recipe4 = My_Recipe(recipeId=4,
    userId=1)
    
    my_recipe5 = My_Recipe(recipeId=5,
    userId=1)

    my_recipe6 = My_Recipe(recipeId=6,
    userId=1)

    my_recipe7 = My_Recipe(recipeId=7,
    userId=1)

    my_recipe8 = My_Recipe(recipeId=8,
    userId=1)

    my_recipe9 = My_Recipe(recipeId=9,
    userId=1)
    
    my_recipe10 = My_Recipe(recipeId=10,
    userId=1)

    my_recipe11 = My_Recipe(recipeId=11,
    userId=1)

    my_recipe12 = My_Recipe(recipeId=1,
    userId=1)

    db.session.add(my_recipe1)
    db.session.add(my_recipe2)
    db.session.add(my_recipe3)
    db.session.add(my_recipe4)
    db.session.add(my_recipe5)
    db.session.add(my_recipe6)
    db.session.add(my_recipe7)
    db.session.add(my_recipe8)
    db.session.add(my_recipe9)
    db.session.add(my_recipe10)
    db.session.add(my_recipe11)
    db.session.add(my_recipe12)

    db.session.commit()

    def undo_my_recipes():
        db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
        db.session.commit()
