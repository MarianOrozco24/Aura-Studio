# zafiro_backend/config_mp.py

import os
import mercadopago
import dotenv
dotenv.load_dotenv()

# Cargar tokens de entorno
MP_TOKEN_ZAFIRO = os.environ.get("MP_TOKEN_ZAFIRO")
MP_TOKEN_ZOEY = os.environ.get("MP_TOKEN_ZOEY")

# Validar que estén configurados
if not MP_TOKEN_ZAFIRO or not MP_TOKEN_ZOEY:
    raise EnvironmentError("Faltan las claves de Mercado Pago en el entorno (.env)")

# SDKs separados por profesional
mp_sdks = {
    "Zafiro Nails": mercadopago.SDK(MP_TOKEN_ZAFIRO),
    "Zoey Lashes": mercadopago.SDK(MP_TOKEN_ZOEY),
}

# Devuelve el SDK según el nombre del profesional
def get_sdk_for(profesional: str) -> mercadopago.SDK:
    return mp_sdks.get(profesional)
