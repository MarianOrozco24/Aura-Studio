# zafiro_backend/models/turno.py
from zafiro_backend.config import db


class Category(db.Model):
    __tablename__ = 'category'

    uuid_categoria = db.Column(db.String(50), primary_key=True)
    uuid_user      = db.Column(db.String(50), db.ForeignKey("users.uuid"), nullable=False)
    name           = db.Column(db.String(255), nullable=False)

    # Relación con Users (podés dejarla tal cual)
    user = db.relationship("Users", backref="category")

    # 🔧 CONTRAPARTES requeridas por back_populates
    receipts = db.relationship(
        "Receipts",
        back_populates="category",
        cascade="all, delete-orphan",
    )
    services = db.relationship(
        "Service",
        back_populates="category",
        cascade="all, delete-orphan",
    )