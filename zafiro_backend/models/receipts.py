# zafiro_backend/models/turno.py
from zafiro_backend.config import db
from datetime import datetime



class Receipts(db.Model):
    __tablename__ = "receipts"

    uuid_receipt  = db.Column(db.String(50), primary_key=True)
    uuid_categoria = db.Column(db.String(50), db.ForeignKey("category.uuid_categoria"), nullable=False)
    amount        = db.Column(db.Float, nullable=False)
    status        = db.Column(db.String(20), nullable=False)
    payment_date  = db.Column(db.DateTime, nullable=True)

    # 🔧 Unificar con Category
    category = db.relationship("Category", back_populates="receipts")

