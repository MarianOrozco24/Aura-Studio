

from flask import Blueprint, app, request, jsonify, current_app
import os, dotenv

dotenv.load_dotenv()

utils_bp = Blueprint("utils", __name__, url_prefix="/api")


@utils_bp.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok"}), 200


def _enabled() -> bool:
    # Evita exponer rutas en producción si no lo activás explícitamente
    return os.getenv("ROUTES_INSPECTOR_ENABLED", "0") in ("1", "true", "True")


@utils_bp.route("/rutas", methods=["GET"])
def listar_rutas_flask():
    """
    Muestra todas las rutas registradas en una app Flask.
    """
    api_key = request.headers.get("X-API-KEY")


    if api_key != os.getenv("API_KEY_AURA"):
        return jsonify({"error": "Unauthorized"}), 401
    

    if not _enabled():
        # 404 en lugar de 403 para no revelar que existe
        return ("Not found", 404)

    prefix = request.args.get("prefix", "").strip()
    include_internal = request.args.get("include_internal", "false").lower() in ("1", "true", "yes")

    def _is_internal(rule_str: str) -> bool:
        # Consideramos internas: estáticas, health, docs, etc. Ajustá a tu gusto
        internal_prefixes = ("/static", "/favicon.ico", "/_debug", "/health", "/docs")
        return rule_str.startswith(internal_prefixes)

    rutas = []
    for rule in current_app.url_map.iter_rules():
        ruta = str(rule)
        if prefix and not ruta.startswith(prefix):
            continue
        if not include_internal and _is_internal(ruta):
            continue

        rutas.append({
            "ruta": ruta,
            "metodos": sorted(m for m in rule.methods if m not in {"HEAD", "OPTIONS"}),
            "endpoint": rule.endpoint
        })

    rutas.sort(key=lambda r: r["ruta"])
    return jsonify({
        "count": len(rutas),
        "prefix": prefix or None,
        "include_internal": include_internal,
        "routes": rutas
    })