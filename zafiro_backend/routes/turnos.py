from flask import Blueprint, request, jsonify
from flask import request, render_template
import requests, dotenv
from zafiro_backend.config import db
from zafiro_backend.models import Turno
from datetime import datetime
from twilio.rest import Client
from datetime import datetime
import os
import json
from ..config.config_mp import get_sdk_for 
from ..models import Receipts

dotenv.load_dotenv()

bp_turnos = Blueprint("bp_turnos", __name__, url_prefix="/api/turnos")

@bp_turnos.route("/", methods=["GET"])
def listar_turnos():
    try:
        turnos = Turno.query.order_by(Turno.fecha.asc()).all()
        return jsonify([
            {
                "id": t.id,
                "nombre": t.nombre,
                "email": t.email,
                "servicio": t.servicio,
                "monto_abonado":t.monto_abonado,
                "fecha": t.fecha.isoformat()
            } for t in turnos
        ])
    except Exception as e:
        print("Ocurrio un error al listar los pagos", e)
        return jsonify({"error" : "ocurrio un error al listar los pagos"}), 500

@bp_turnos.route("/turno-exitoso")
def turno_exitoso():
    # Parametros que mandamos por GET
    servicio = request.args.get("servicio")
    nombre = request.args.get("nombre")
    email = request.args.get("email")
    monto = float(request.args.get("monto"))
    payment_id = request.args.get("payment_id")

    if not payment_id:
        return "Error: pago no verificado", 400

    profesional = "Zoey Lashes" if "ceja" in servicio.lower() or "pestañ" in servicio.lower() or "depilación" in servicio.lower() else "Zafiro Nails"
    sdk = get_sdk_for(profesional)

    try:
        payment = sdk.payment().get(payment_id)
        status = payment["response"]["status"]
    except Exception as e:
        return f"Error al verificar el pago: {str(e)}", 500

    if status == "approved":
        turno = Turno(
            nombre=nombre,
            email=email,
            servicio=servicio,
            profesional=profesional,
            monto_abonado=monto,
            fecha=datetime.utcnow()
        )
        db.session.add(turno)
        db.session.commit()
        enviar_whatsapp_turno(turno) # enviamos mensaje de wsp
        return render_template("turno_exitoso.html", nombre=nombre, servicio=servicio)
    else:
        return jsonify({"error": "El pago no fue aprobado."}), 400
    
    

@bp_turnos.route("/testing", methods=['POST'])
def testing_turn():
    data = request.json

    nombre = data.get("nombre", "Test User")
    email = data.get("email", "test@example.com")
    servicio = data.get("servicio", "Kapping")
    fecha_str = data.get("fecha", datetime.utcnow().isoformat())
    monto = float(data.get("monto", 5000))

    try:
        fecha = datetime.fromisoformat(fecha_str)
    except ValueError:
        return jsonify({"error": "Formato de fecha inválido"}), 400

    profesional = "Zoey Lashes" if "cejas" in servicio.lower() or "pestañas" in servicio.lower() or "depilación" in servicio.lower() else "Zafiro Nails"

    turno = Turno(
        nombre=nombre,
        email=email,
        servicio=servicio,
        profesional=profesional,
        monto_abonado=monto,
        fecha=fecha
    )
    db.session.add(turno)
    db.session.commit()

    exito = enviar_whatsapp_turno(turno)

    return jsonify({
        "message": "Turno creado",
        "whatsapp": "enviado" if exito else "falló",
        "id_turno": turno.id
    }), 201


def enviar_whatsapp_turno(turno):
    client = Client(
        os.environ["TWILIO_SID"],
        os.environ["TWILIO_AUTH_TOKEN"]
    )

    content_sid = "HX762dc43870440b4a5543215e8dadb24b"  # ← reemplazalo por el SID real que te dé Twilio

    numero = (
        "whatsapp:+5492613868308" if turno.profesional == "Zafiro Nails"
        else "whatsapp:+5492613868308"
    )

    content_vars = json.dumps({
        "1": turno.nombre.split(" ")[0],
        "2": turno.servicio,
        "3": turno.fecha.strftime("%d/%m/%Y"),
        "4": turno.fecha.strftime("%H:%M")
    })

    try:
        message = client.messages.create(
            from_="whatsapp:+14155238886",  # número de Twilio
            to=numero,
            content_sid=content_sid,
            content_variables=content_vars
        )
        print("✅ WhatsApp enviado:", message.sid)
        return True
    except Exception as e:
        print("❌ Error al enviar WhatsApp:", e)
        return False

