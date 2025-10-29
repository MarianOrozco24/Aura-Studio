from flask import Flask
from .contactos import bp_contactos
from .turnos import bp_turnos
from .pagos import bp_pagos
from .users import signup_bp
from .service import bp_service
from .category import category_bp

def register_routes(app: Flask):
    app.register_blueprint(bp_contactos)
    app.register_blueprint(bp_turnos)
    app.register_blueprint(bp_pagos)
    app.register_blueprint(bp_service)
    app.register_blueprint(signup_bp)
    app.register_blueprint(category_bp)
