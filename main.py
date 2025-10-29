from flask import Flask, render_template, request, redirect, flash
from zafiro_backend.config import init_db
from zafiro_backend.models import Contact  # desde __init__.py
from datetime import datetime
from zafiro_backend.routes import register_routes


app = Flask(__name__)
app.secret_key = "clave_super_secreta"

# Bluepoints
register_routes(app)


init_db(app)
with app.app_context():
    from zafiro_backend.config import db
    db.create_all()

@app.context_processor
def inject_now():
    return {'now': datetime.now()}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/servicios")
def servicios():
    return render_template("servicios.html")

@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")

@app.route("/turnos")
def turnos():
    return render_template("turnos.html")


@app.route("/contacto", methods=["GET", "POST"])
def contacto():
    if request.method == "POST":
        if request.form.get("antispam"):
            flash("Formulario no válido", "error")
            return redirect("/contacto")

        nombre = request.form.get("nombre")
        email = request.form.get("email")
        mensaje = request.form.get("mensaje")

        nuevo_contacto = Contact(nombre=nombre, email=email, mensaje=mensaje)
        from zafiro_backend.config import db
        db.session.add(nuevo_contacto)
        db.session.commit()

        flash("¡Gracias por tu mensaje! Te vamos a responder pronto.", "success")
        return redirect("/contacto")

    return render_template("contacto.html")

@app.route("/turno-exitoso")
def turno_exitoso():
    from zafiro_backend.models import Turno
    from zafiro_backend.config import db
    from datetime import datetime

    nombre = request.args.get("nombre")
    email = request.args.get("email")
    servicio = request.args.get("servicio")
    monto = float(request.args.get("monto"))

    profesional = "Zafiro Nails" if "uña" in servicio.lower() or "kapping" in servicio.lower() else "Zoey Lashes"

    turno = Turno(
        nombre=nombre,
        email=email,
        servicio=servicio,
        profesional=profesional,
        monto_abonado=monto,
        fecha=datetime.utcnow()  # o podés pasar fecha como parámetro
    )
    db.session.add(turno)
    db.session.commit()

    return render_template("turno_exitoso.html", nombre=nombre, servicio=servicio)



if __name__=='__main__':
    Flask.run(app)
