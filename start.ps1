<#
.SYNOPSIS
    Levanta Aura Studio, ya sea con Docker (por defecto) o en modo desarrollo con Vite.

.EXAMPLE
    .\start.ps1
    Construye la imagen Docker, la levanta en un puerto libre y abre el navegador.

.EXAMPLE
    .\start.ps1 -Dev
    Corre el servidor de desarrollo de Vite (con hot reload) sin Docker.

.EXAMPLE
    .\start.ps1 -Port 8080
    Fuerza el puerto host en modo Docker en vez de elegir uno libre automáticamente.

.EXAMPLE
    .\start.ps1 -Down
    Detiene y elimina el contenedor de Aura Studio.
#>

param(
    [switch]$Dev,
    [switch]$Down,
    [int]$Port
)

$ImageName = "aura-studio"
$ContainerName = "aura-studio"

Set-Location -Path $PSScriptRoot

function Remove-ExistingContainer {
    param([string]$Name)
    $existing = docker ps -a --filter "name=^/$Name`$" --format "{{.Names}}"
    if ($existing) {
        docker rm -f $Name | Out-Null
    }
}

function Test-PortAvailable {
    param([int]$PortToTest)
    try {
        $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $PortToTest)
        $listener.Start()
        $listener.Stop()
        return $true
    } catch {
        return $false
    }
}

function Get-FreePort {
    param([int[]]$Candidates)
    foreach ($candidate in $Candidates) {
        if (Test-PortAvailable -PortToTest $candidate) {
            return $candidate
        }
    }
    # Ninguno de los candidatos estaba libre: dejamos que el SO asigne uno
    $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, 0)
    $listener.Start()
    $freePort = $listener.LocalEndpoint.Port
    $listener.Stop()
    return $freePort
}

# --- Modo desarrollo: Vite sin Docker ---
if ($Dev) {
    Write-Host "Modo desarrollo (Vite)" -ForegroundColor Cyan

    if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
        Write-Host "No se encontró 'npm'. Instalá Node.js antes de continuar." -ForegroundColor Red
        exit 1
    }

    if (-not (Test-Path "node_modules")) {
        Write-Host "Instalando dependencias..." -ForegroundColor Yellow
        npm install
    }

    Write-Host "Iniciando servidor de desarrollo..." -ForegroundColor Green
    npm run dev
    exit $LASTEXITCODE
}

# A partir de acá, todo lo que sigue necesita Docker.
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Host "No se encontró Docker. Instalá Docker Desktop o usá '.\start.ps1 -Dev'." -ForegroundColor Red
    exit 1
}

docker info | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Docker no está corriendo. Abrí Docker Desktop e intentá de nuevo." -ForegroundColor Red
    exit 1
}

# --- Modo apagado: bajar el contenedor ---
if ($Down) {
    Write-Host "Deteniendo Aura Studio..." -ForegroundColor Cyan
    Remove-ExistingContainer -Name $ContainerName
    Write-Host "Listo, contenedor eliminado." -ForegroundColor Green
    exit 0
}

# --- Modo Docker: build + run ---
if (-not $Port) {
    $Port = Get-FreePort -Candidates @(8080, 5173, 4173, 8090, 3000, 3001)
}

Write-Host "Usando el puerto $Port" -ForegroundColor Cyan

Write-Host "Construyendo la imagen..." -ForegroundColor Cyan
docker build -t $ImageName .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Falló el build de la imagen." -ForegroundColor Red
    exit 1
}

Remove-ExistingContainer -Name $ContainerName

Write-Host "Levantando el contenedor..." -ForegroundColor Cyan
docker run -d --name $ContainerName -p "${Port}:80" $ImageName | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Falló al levantar el contenedor. Probá con otro puerto: .\start.ps1 -Port <numero>" -ForegroundColor Red
    exit 1
}

$url = "http://localhost:$Port"
$ready = $false

for ($i = 0; $i -lt 30; $i++) {
    try {
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 2
        if ($response.StatusCode -eq 200) {
            $ready = $true
            break
        }
    } catch {
        Start-Sleep -Milliseconds 500
    }
}

if ($ready) {
    Write-Host "Aura Studio está corriendo en $url" -ForegroundColor Green
    Start-Process $url
    Write-Host "Para pararlo: .\start.ps1 -Down" -ForegroundColor DarkGray
} else {
    Write-Host "El contenedor no respondió a tiempo. Revisá los logs con: docker logs $ContainerName" -ForegroundColor Yellow
}

