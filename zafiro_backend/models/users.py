# zafiro_backend/models/turno.py
from zafiro_backend.config import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
import uuid as _uuid


class Users ( db.Model ):
    __tablename__ = 'users'

    uuid = db.Column(db.String(50), primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    dni = db.Column(db.BigInteger, nullable=False)
    email = db.Column(db.String(120), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.Date, default=datetime.utcnow)
    updated_at = db.Column(db.Date, default=datetime.utcnow, onupdate=datetime.utcnow)
    deleted_at = db.Column(db.Date, nullable=True)

     # Relación 1:1 con Password
    password_rel = db.relationship(
        "Password",
        back_populates="user",
        uselist=False,
        cascade="all, delete-orphan"
    )

    # Mantener misma API
    def set_password(self, raw: str):
        if not self.password_rel:
            self.password_rel = Password(uuid_user=self.uuid)
        self.password_rel.set_password(raw)

    def check_password(self, raw: str) -> bool:
        return self.password_rel.check_password(raw) if self.password_rel else False

    def get_id(self):  # requerido por Flask-Login
        return self.uuid


class Password(db.Model):
    __tablename__ = "passwords"
    uuid_password = db.Column(db.String(50), primary_key=True, default=_uuid.uuid4)
    uuid_user     = db.Column(
        db.String(50),
        db.ForeignKey("users.uuid", ondelete="CASCADE", onupdate="CASCADE"),
        nullable=False, unique=True  # 1:1 (una contraseña activa por usuario)
    )
    password_hash = db.Column(db.String(255), nullable=False)
    is_active     = db.Column(db.Boolean, default=True, nullable=False)
    created_at    = db.Column(db.DateTime, default=datetime.utcnow)
    revoked_at    = db.Column(db.DateTime, nullable=True)

    user = db.relationship("Users", back_populates="password_rel")

    def set_password(self, raw: str):
        self.password_hash = generate_password_hash(raw)

    def check_password(self, raw: str) -> bool:
        return bool(self.password_hash) and check_password_hash(self.password_hash, raw)
