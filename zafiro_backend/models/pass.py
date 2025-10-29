# zafiro_backend/models/turno.py
from zafiro_backend.config import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash


class Passwords(db.Model):
    __tablename__ = 'passwords'

    uuid_user = db.Column(db.String(50), db.ForeignKey('users.uuid'), nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = db.relationship("Users", back_populates="passwords")


    # helpers
    def set_password(self, raw: str):
        self.password_hash = generate_password_hash(raw)

    def check_password(self, raw: str) -> bool:
        return check_password_hash(self.password_hash, raw)

    def get_id(self):  # Flask-Login usa esto
        return self.uuid