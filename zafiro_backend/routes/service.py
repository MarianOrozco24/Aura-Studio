import os, dotenv
import mercadopago
from urllib.parse import urlencode
from flask import Blueprint, request, jsonify
dotenv.load_dotenv()
from ..models import Service
import uuid
from zafiro_backend.config import db

bp_service = Blueprint("bp_service", __name__, url_prefix="/api/service")

@bp_service.route("/services", methods=["GET"])
def listar_servicios():
    try:
        servicios = Service.query.\
            filter_by(is_active=True).\
            order_by(Service.name.asc()).all()
        
        servicios = [
            {
                "id": s.id,
                "uuid_service": s.uuid_service,
                "name": s.name,
                "price": s.price,
                "professional": s.professional,
                "is_active": s.is_active
            } for s in servicios
        ]

        return jsonify(servicios), 200
    except Exception as e:
        print("Ocurrio un error al listar los servicios", e)
        return jsonify({"error" : "ocurrio un error al listar los servicios"}), 500
    

@bp_service.route("/add_service", methods=["POST"])
def add_service():
    try:    
        data = request.json
        if not all(key in data for key in ("name", "price")):
            return jsonify({"error": "Faltan campos obligatorios"}), 400

        servicio = Service(
            uuid_service=uuid.uuid4(),
            name=data["name"],
            price=data["price"],
            description = data.get("description", ""),
            is_active=True
        )
        try:
            db.session.add(servicio)
            db.session.commit()
            return jsonify({"message": "Servicio creado correctamente"}), 201
        except Exception as e:
            print("Ocurrio un error al crear el servicio", e)
            return jsonify({"error" : "ocurrio un error al crear el servicio"}), 500
        
    except Exception as e:
        print("Ocurrio un error al procesar la solicitud", e)
        return jsonify({"error" : "ocurrio un error al procesar la solicitud"}), 500