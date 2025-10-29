from flask import Blueprint, request, jsonify
from zafiro_backend.config import db
from zafiro_backend.models import Users
import uuid, datetime

signup_bp = Blueprint("signup", __name__)


@signup_bp.route("/signup", methods=["POST"])
def signup():
    data = request.json
    if not all(key in data for key in ("full_name", "dni", "email", "address")):
        return jsonify({"error": "Faltan campos obligatorios"}), 400

    uuid_user = str(uuid.uuid4())
    new_user = Users(
        uuid=uuid_user,
        full_name=data.get("full_name"),
        dni=data.get("dni"),
        email=data.get("email"),
        address=data.get("address"),
    )
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201


@signup_bp.route("/update_user", methods=["POST"])


def update_user():
    data = request.json
    dni = data.get("dni")

    user = Users.query.filter_by(dni=dni).first()
    if not user :
        return jsonify({"error": "DNI not found"}), 404
    

    uuid_user = user.uuid

    user = Users.query.filter_by(uuid=uuid_user).first()
    if not user:
        return jsonify({"error": "User not found"}), 404

    for key in ["full_name", "dni", "email", "address"]:
        if key in data:
            setattr(user, key, data[key])


    db.session.commit()
    return jsonify({"message": "User updated successfully"}), 200


@signup_bp.route("/delete_user", methods=["POST"])

def delete_user():
    data = request.json
    dni = data.get("dni")

    user = Users.query.filter_by(dni=dni).first()
    if not user:
        return jsonify({"error": "DNI not found"}), 404

    uuid_user = user.uuid

    user = Users.query.filter_by(uuid=uuid_user).first()
    if not user:
        return jsonify({"error": "User not found"}), 404

    user.deleted_at = datetime.datetime.utcnow()
    db.session.commit()
    return jsonify({"message": "User deleted successfully"}), 200



