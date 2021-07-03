from flask.cli import AppGroup
from .users import seed_users, undo_users
from .recipes import seed_recipes, undo_recipes
from .blogs import seed_blogs, undo_blogs
from .mealplans import seed_mealplans, undo_mealplans

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_recipes()
    seed_mealplans()
    seed_blogs()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_blogs()
    undo_mealplans()
    undo_recipes()
    undo_users()
    # Add other undo functions here
