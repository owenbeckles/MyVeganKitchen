from .db import db
from sqlalchemy.orm import relationship

my_posts = db.Table('my_posts', db.Column(db.Integer, db.ForeignKey("users.id")),blogId = db.Column(db.Integer, db.ForeignKey("blogs.id")))



    # mykitchenblog = db.relationship("Blog", back_populates="post")
    # userpost = db.relationship("User", back_populates="savedpost")