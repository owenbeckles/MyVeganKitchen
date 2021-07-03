"""empty message

Revision ID: 005f96e7036c
Revises: 40b42d26d5f9
Create Date: 2021-07-02 20:04:37.771304

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '005f96e7036c'
down_revision = '40b42d26d5f9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('blogs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('title', sa.String(length=50), nullable=False),
    sa.Column('content', sa.Text(), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('content'),
    sa.UniqueConstraint('description'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('title')
    )
    op.create_table('mealplans',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('title', sa.String(length=50), nullable=False),
    sa.Column('price', sa.Float(precision=5, asdecimal=2), nullable=False),
    sa.Column('overview', sa.Text(), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('description'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('overview'),
    sa.UniqueConstraint('price'),
    sa.UniqueConstraint('title')
    )
    op.create_table('recipes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('title', sa.String(length=50), nullable=False),
    sa.Column('type', sa.String(length=50), nullable=False),
    sa.Column('ingredients', sa.Text(), nullable=False),
    sa.Column('instructions', sa.Text(), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('description'),
    sa.UniqueConstraint('ingredients'),
    sa.UniqueConstraint('instructions'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('title')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('firstname', sa.String(length=50), nullable=False),
    sa.Column('lastname', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.Text(), nullable=True),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('recipeId', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['recipeId'], ['recipes.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('comment')
    )
    op.create_table('my_meals',
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('mealPlanId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['mealPlanId'], ['mealplans.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], )
    )
    op.create_table('my_posts',
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('blogId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['blogId'], ['blogs.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], )
    )
    op.create_table('my_recipes',
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('recipeId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['recipeId'], ['recipes.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('my_recipes')
    op.drop_table('my_posts')
    op.drop_table('my_meals')
    op.drop_table('comments')
    op.drop_table('users')
    op.drop_table('recipes')
    op.drop_table('mealplans')
    op.drop_table('blogs')
    # ### end Alembic commands ###
