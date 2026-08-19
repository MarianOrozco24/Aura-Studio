# Aura Studio

Sitio web de Aura Studio (pestañas, cejas, depilación definitiva y estética facial/corporal). React + TypeScript + Vite, con Tailwind CSS v4 y Framer Motion.

## Desarrollo local

```bash
npm install
npm run dev
```

También podés usar `.\start.ps1 -Dev` (instala dependencias si hace falta y levanta Vite).

## Docker

```bash
docker compose up -d --build
```

O con el script incluido, que además busca un puerto libre y abre el navegador:

```powershell
.\start.ps1          # build + run
.\start.ps1 -Port 8080
.\start.ps1 -Down    # detener y eliminar el contenedor
```

## Build de producción

```bash
npm run build
```

Genera el sitio estático en `dist/`.

## Deploy continuo (GitHub Actions)

`.github/workflows/deploy.yml` corre en cada push/PR a `main`:

1. **build**: instala dependencias, type-checkea y compila el proyecto (corre siempre, también en PRs, como chequeo).
2. **deploy**: solo en push a `main`. Se conecta por SSH al VPS, actualiza el código (`git fetch` + `git reset --hard origin/main`) y levanta el contenedor de nuevo (`docker compose up -d --build`).

### Requisitos en el VPS

- Tener `git`, `docker` y el plugin `docker compose` instalados.
- Tener el repo ya clonado en el servidor (en la ruta que uses para `VPS_DEPLOY_PATH`), con el remoto `origin` apuntando a este repositorio y acceso para hacer `git fetch` (por ejemplo, una deploy key de solo lectura si el repo es privado).

### Secrets a configurar en GitHub

En **Settings → Secrets and variables → Actions** del repo (o en el Environment `production` si lo creaste — recomendado para poder exigir aprobación manual antes de deployar):

| Secret | Descripción |
| --- | --- |
| `VPS_HOST` | IP o dominio del servidor |
| `VPS_USER` | Usuario SSH (con permisos para correr `docker`) |
| `VPS_SSH_KEY` | Clave privada SSH (formato PEM) con acceso a ese usuario |
| `VPS_PORT` | Puerto SSH (opcional, default `22`) |
| `VPS_DEPLOY_PATH` | Ruta absoluta en el servidor donde está clonado el repo (ej: `/home/deploy/aura-studio`) |

El workflow usa el `docker-compose.yml` del repo (que expone el puerto `${AURA_PORT:-8080}`). Si en el VPS ya tenés otro proceso escuchando en ese puerto, seteá la variable de entorno `AURA_PORT` en el servidor antes de correr `docker compose up`.
