from .db import db
from sqlalchemy.orm import relationship
from datetime import datetime

class Blog(db.Model):
    __tablename__ = 'blogs'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50), nullable = False, unique = True)
    title = db.Column(db.String(50), nullable = False, unique = True)
    content = db.Column(db.Text, nullable = False, unique = True)
    description = db.Column(db.String(100), nullable = False, unique = True)
    created_at = db.Column(db.DateTime, default=datetime.now())

    post = db.relationship("My_Post", back_populates="mykitchenblog")