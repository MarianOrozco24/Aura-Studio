# zafiro_backend/models/turno.py
from zafiro_backend.config import db
from datetime import datetime

class Turno(db.Model):
    __tablename__ = 'turnos'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    servicio = db.Column(db.String(100), nullable=False)
    profesional = db.Column(db.String(50), nullable=False)  # ← Nuevo campo
    monto_abonado = db.Column(db.Float, nullable=False)
    fecha = db.Column(db.DateTime, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    notificado_por_wsp = db.Column(db.Boolean, default=False)

