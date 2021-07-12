from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class SettingsForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
