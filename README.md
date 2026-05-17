<div align="center">

# SIGR
### Sistema Integral de Gestión de Restaurante

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-0d1117?style=for-the-badge&logo=opensourceinitiative&logoColor=white" />
  <img src="https://img.shields.io/badge/Version-1.0.0--baseline-0d1117?style=for-the-badge&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/Build-Passing-0d1117?style=for-the-badge&logo=githubactions&logoColor=22c55e" />
  <img src="https://img.shields.io/badge/Node.js-18.x-0d1117?style=for-the-badge&logo=nodedotjs&logoColor=white" />
</p>

<p align="center">
  Sistema modular para la automatización y gestión integral de operaciones en entornos de restaurante.
  Diseñado bajo principios de Gestión de Configuración de Software (SCM) con línea base certificada.
</p>

</div>

---

## Arquitectura de Módulos

| Módulo | Archivo | Descripción |
|--------|---------|-------------|
| Autenticación | `src/auth.js` | Gestión segura de sesiones y validación de tokens JWT |
| Menú Digital | `src/menu.js` | CRUD completo de platos, bebidas y categorías |
| Pedidos | `src/orders.js` | Flujo en tiempo real: `PENDING` → `PREPARING` → `READY` → `DELIVERED` |
| Reservas | `src/reservations.js` | Administración de capacidad de mesas y franjas horarias |
| Reportes | *(Próxima iteración)* | Cierres de caja y estadísticas de ventas |

---

## Stack Tecnológico

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white" />
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/MIT_License-yellow?style=flat-square&logo=opensourceinitiative&logoColor=white" />
</p>

---

## Instalación y Despliegue

### Requisitos Previos

<p>
  <img src="https://img.shields.io/badge/Node.js_v18+-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/npm_o_yarn-CB3837?style=flat-square&logo=npm&logoColor=white" />
</p>

### Pasos

**1. Clonar el repositorio**
```bash
git clone https://github.com/YeisonZapata71/SIGR.git
cd SIGR
```

**2. Configurar variables de entorno**
```bash
cp .env.example .env
```

**3. Ejecutar pruebas de integración (Línea Base)**
```bash
npm test
```

---

## Integración Continua

Cada `push` a la rama `main` desencadena automáticamente el pipeline definido en `.github/workflows/ci.yml`:

```
Checkout  →  Setup Node.js 18.x  →  Ejecutar npm test
```

El resultado del pipeline determina si el estado del repositorio es apto para ser promovido como una nueva línea base.

---

## Gestión de Configuración

Este repositorio opera bajo los principios de **Software Configuration Management (SCM)**. Todos los cambios a los módulos en `src/` deben pasar por el siguiente ciclo:

1. Apertura de un **Issue** documentando el cambio propuesto
2. Desarrollo en una **rama aislada** (`feature/nombre`)
3. Revisión mediante **Pull Request** con aprobación obligatoria
4. Validación automática del **pipeline CI** antes del merge

Para más detalles, consultar el informe de Línea Base: `docs/Taller_LineaBase_SIGR.md`

---

## Línea Base Certificada

| Campo | Valor |
|-------|-------|
| Versión | `v1.0.0-baseline` |
| Rama | `main` |
| Estado | Aprobado |

---

<div align="center">

Licencia MIT — © 2026 Equipo SIGR

</div>
