from flask import Flask
from .contactos import bp_contactos

def register_routes(app: Flask):
    app.register_blueprint(bp_contactos)
