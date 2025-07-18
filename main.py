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

if __name__=='__main__':
    Flask.run(app)
