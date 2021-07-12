from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired

class BlogForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    content = TextAreaField('content', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
