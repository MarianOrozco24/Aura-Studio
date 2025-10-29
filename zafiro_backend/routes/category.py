from flask import Blueprint, request, jsonify
from zafiro_backend.config import db
from ..models import Category
import uuid

category_bp = Blueprint("category", __name__, url_prefix="/api/category")
@category_bp.route("/categories", methods=["GET"])
def listar_categorias():
    try:
        categorias = Category.query.order_by(Category.name.asc()).all()
        
        categorias = [
            {
                "uuid_categoria": c.uuid_categoria,
                "uuid_user": c.uuid_user,
                "name": c.name
            } for c in categorias
        ]

        return jsonify(categorias), 200
    except Exception as e:
        print("Ocurrio un error al listar las categorias", e)
        return jsonify({"error" : "ocurrio un error al listar las categorias"}), 500
    



@category_bp.route("/add_category", methods=["POST"])
def add_category():
    data = request.json
    if not all(key in data for key in ("uuid_user", "name")):
        return jsonify({"error": "Faltan campos obligatorios"}), 400

    categoria = Category(
        uuid_categoria=str(uuid.uuid4()),
        uuid_user=data["uuid_user"],
        name=data["name"]
    )
    try:
        db.session.add(categoria)
        db.session.commit()
        return jsonify({"message": "Categoria creada correctamente"}), 201
    except Exception as e:
        print("Ocurrio un error al crear la categoria", e)
        return jsonify({"error" : "ocurrio un error al crear la categoria"}), 500