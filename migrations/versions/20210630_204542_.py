"""empty message

Revision ID: 854401c14ef5
Revises: 66a3b9613b21
Create Date: 2021-06-30 20:45:42.015983

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '854401c14ef5'
down_revision = '66a3b9613b21'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('blogs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('title', sa.String(length=50), nullable=False),
    sa.Column('content', sa.Text(), nullable=False),
    sa.Column('description', sa.String(length=100), nullable=False),
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
    sa.Column('description', sa.String(length=100), nullable=False),
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
    sa.Column('ingredients', sa.Text(), nullable=False),
    sa.Column('instructions', sa.Text(), nullable=False),
    sa.Column('description', sa.String(length=100), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('description'),
    sa.UniqueConstraint('ingredients'),
    sa.UniqueConstraint('instructions'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('title')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.Text(), nullable=True),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('recipeId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['recipeId'], ['recipes.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('comment')
    )
    op.create_table('my_meals',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('mealPlanId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['mealPlanId'], ['mealplans.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('my_posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('blogId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['blogId'], ['blogs.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('my_recipes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('recipeId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['recipeId'], ['recipes.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('users', sa.Column('firstname', sa.String(length=50), nullable=False))
    op.add_column('users', sa.Column('lastname', sa.String(length=50), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'lastname')
    op.drop_column('users', 'firstname')
    op.drop_table('my_recipes')
    op.drop_table('my_posts')
    op.drop_table('my_meals')
    op.drop_table('comments')
    op.drop_table('recipes')
    op.drop_table('mealplans')
    op.drop_table('blogs')
    # ### end Alembic commands ###
