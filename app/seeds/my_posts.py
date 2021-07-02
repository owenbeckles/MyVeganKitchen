from app.models import db, My_Post

def seed_my_posts():
    my_post1 = My_Post(blogId=1,
    userId=1)

    my_post2 = My_Post(blogId=2,
    userId=1)

    my_post3 = My_Post(blogId=3,
    userId=1)

    db.session.add(my_post1)
    db.session.add(my_post2)
    db.session.add(my_post3)

    db.session.commit()

    def undo_my_posts():
        db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
        db.session.commit()

