from .db import db
from sqlalchemy.orm import relationship
from datetime import datetime

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key = True)
    comment = db.Column(db.Text, unique = True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"))
    recipeId = db.Column(db.Integer, db.ForeignKey("recipes.id"))
    created_at = db.Column(db.DateTime, default=datetime.now())

    person = db.relationship("User", back_populates="comments", uselist=False)
    recipe = db.relationship("Recipe", back_populates="comments", uselist=False)

    def to_dict(self):
        return {
            "id": self.id,
            "comment": self.comment,
        }