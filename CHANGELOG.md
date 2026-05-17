# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/), y este proyecto se adhiere al [Versionamiento Semántico](https://semver.org/lang/es/).

## [1.0.0] - 2026-05-16
### Establecimiento de Línea Base de Software (Baseline)

### Añadido
- **Módulo de Autenticación** (`src/auth.js`): Implementación básica de registro y login.
- **Módulo de Menú** (`src/menu.js`): CRUD en memoria para platos y bebidas.
- **Módulo de Pedidos** (`src/orders.js`): Máquina de estados para gestión de comandas (PENDING, PREPARING, READY, DELIVERED).
- **Módulo de Reservas** (`src/reservations.js`): Lógica para confirmación de mesas.
- **Pruebas de Integración** (`tests/test_build.js`): Script para validar la compilación y conexión lógica de los 4 módulos principales.
- Documentación inicial: `README.md`, `LICENSE`.
- Informe de Gestión de Configuración: `docs/Taller_LineaBase_SIGR.md`.

### Estabilidad Garantizada
- Se confirma que el commit hash `a93b4f1` en la rama `main` compila sin errores y pasa exitosamente todas las pruebas de integración. Este estado se define como la "Línea Base Inicial" para el desarrollo futuro.
