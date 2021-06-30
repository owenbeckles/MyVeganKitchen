"""empty message

Revision ID: bc070e95968d
Revises: ffdc0a98111c
Create Date: 2021-06-30 17:44:22.658240

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bc070e95968d'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('firstname', sa.String(length=50), nullable=False))
    op.add_column('users', sa.Column('lastname', sa.String(length=50), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'lastname')
    op.drop_column('users', 'firstname')
    # ### end Alembic commands ###
