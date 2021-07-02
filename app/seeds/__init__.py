from flask.cli import AppGroup
from .users import seed_users, undo_users
from .recipes import seed_recipes, undo_recipes
from .blog import seed_blogs, undo_blogs
from .mealplans import seed_mealplans, undo_mealplans
from .my_recipes import seed_my_recipes, undo_my_recipes
from .my_blogs import seed_my_posts, undo_my_posts
from .my_meals import seed_my_meals, undo_my_meals


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
    seed_my_meals()
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
    undo_my_meals()
    undo_recipes()
    # Add other undo functions here
