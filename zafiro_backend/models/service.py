# zafiro_backend/models/turno.py
from zafiro_backend.config import db
from datetime import datetime

class Service(db.Model):
    uuid_servicio  = db.Column(db.String(50), primary_key=True)
    uuid_categoria = db.Column(db.String(50), db.ForeignKey("category.uuid_categoria"), nullable=False)
    name           = db.Column(db.String(100), nullable=False)
    description    = db.Column(db.Text, nullable=True)
    price          = db.Column(db.Numeric(10, 2), nullable=False)
    is_active      = db.Column(db.Boolean, default=True)
    created_at     = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at     = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # 🔧 Unificar con Category (en lugar de backref)
    category = db.relationship("Category", back_populates="services")