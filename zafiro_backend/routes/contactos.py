from flask import Blueprint, request, jsonify
from zafiro_backend.config import db
from zafiro_backend.models import Contact

bp_contactos = Blueprint('bp_contactos', __name__, url_prefix="/api/contactos")

@bp_contactos.route("/", methods=["GET"])
def listar_contactos():
    contactos = Contact.query.order_by(Contact.fecha.desc()).all()
    data = [
        {
            "id": c.id,
            "nombre": c.nombre,
            "email": c.email,
            "mensaje": c.mensaje,
            "fecha": c.fecha.isoformat()
        }
        for c in contactos
    ]
    return jsonify(data), 200

@bp_contactos.route("/", methods=["POST"])
def crear_contacto():
    data = request.json
    if not all(key in data for key in ("nombre", "email", "mensaje")):
        return jsonify({"error": "Faltan campos obligatorios"}), 400

    contacto = Contact(
        nombre=data["nombre"],
        email=data["email"],
        mensaje=data["mensaje"]
    )
    db.session.add(contacto)
    db.session.commit()

    

    return jsonify({"message": "Mensaje recibido correctamente"}), 201
