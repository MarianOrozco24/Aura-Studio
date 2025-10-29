import os, dotenv
import mercadopago
from urllib.parse import urlencode
from flask import Blueprint, request, jsonify
dotenv.load_dotenv()
from ..models import Receipts



bp_pagos = Blueprint("bp_pagos", __name__, url_prefix="/api/pagos")

SERVICIOS = {
    "Zafiro Nails": {
        "Esculpidas acrílicas": 25000,
        "Kapping": 19000,
        "Esmaltado semipermanente": 15000
    },
    "Zoey Lashes": {
        "Extensiones de pestañas": 20000,
        "Lifting de cejas": 18000,
        "Depilación definitiva": 30000
    }
}

def detectar_profesional(servicio):
    s = servicio.lower()
    if any(w in s for w in ["ceja", "pestañ", "depilación", "lifting"]):
        return "Zoey Lashes"
    return "Zafiro Nails"

from urllib.parse import urlencode


@bp_pagos.route("/crear", methods=["POST"])
def crear_preferencia():
    data = request.json
    nombre = data.get("nombre")
    email = data.get("email")
    servicio = data.get("servicio")
    base_url = os.environ.get("BASE_URL", "http://localhost:5000")

    profesional = detectar_profesional(servicio)
    precio_total = SERVICIOS[profesional][servicio]
    seña = round(precio_total / 2, 2)

    access_token = os.environ.get("MP_TOKEN_ZAFIRO") if profesional == "Zafiro Nails" else os.environ.get("MP_TOKEN_ZOEY")
    sdk = mercadopago.SDK(access_token)


    params = urlencode({
        "servicio": servicio,
        "nombre": nombre,
        "email": email,
        "monto": seña
    })

    # ✅ asegurate que esté bien formado
    back_urls = {
        "success": f"{base_url}/turno-exitoso?{params}",
        "failure": f"{base_url}/turno-error"
    }

    # ✅ preferencia bien formada
    preference_data = {
    "items": [{
        "title": f"{servicio} - {profesional}",
        "quantity": 1,
        "currency_id": "ARS",
        "unit_price": float(seña)
    }],
    "payer": {
        "name": nombre,
        "email": email
    },
    "back_urls": {
        "success": f"{base_url}/turno-exitoso?{params}",
        "failure": f"{base_url}/turno-error"
    },
    # "auto_return": "approved"
}


    # print("PREF DATA >>>", preference_data)  # <-- DEBUG
    preference_response = sdk.preference().create(preference_data)
    # print("RESPUESTA MP:", preference_response)

    try:
        return jsonify({"init_point": preference_response["response"]["sandbox_init_point"]})
    except KeyError:
        return jsonify({"error": "No se pudo generar el link de pago", "debug": preference_response}), 500
