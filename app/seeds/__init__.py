from flask.cli import AppGroup
from .users import seed_users, undo_users

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_blogs()
    seed_mealplans()
    seed_my_posts()
    seed_my_recipes()
    seed_recipes()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_blogs()
    undo_mealplans()
    undo_my_posts()
    undo_my_recipes()
    undo_recipes()
    # Add other undo functions here
