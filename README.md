# Calendario Laboral Alcantarilla 2026-2027

Una aplicación web moderna para visualizar el calendario laboral de Alcantarilla, Murcia.

## Características

- 📅 Calendario interactivo para 2026 y 2027
- 🎨 Interfaz moderna y responsiva con Tailwind CSS
- 🔴 Visualización clara de festivos nacionales y locales
- 📱 Diseño mobile-first compatible con todos los dispositivos
- ⚡ Aplicación rápida y optimizada con Vite

## Festivos Incluidos

### Festivos Nacionales
- Año Nuevo (1 de enero)
- Reyes Magos (6 de enero)
- Viernes Santo (variable)
- Día del Trabajo (1 de mayo)
- Asunción de María (15 de agosto)
- Día de la Hispanidad (12 de octubre)
- Todos los Santos (1 de noviembre)
- Día de la Constitución (6 de diciembre)
- Navidad (25 de diciembre)

### Festivos Locales de Alcantarilla
- San Roque, Patrón de Alcantarilla (22 de mayo)

## Tecnologías utilizadas

- **React 18** - Interfaz de usuario
- **TypeScript** - Type-safe code
- **Vite** - Build tool rápido y moderno
- **Tailwind CSS** - Estilos CSS moderno
- **Express.js** - Servidor de producción

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar servidor de producción local
npm start

# Preview de la build producción
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/
│   └── MonthCalendar.tsx      # Componente para renderizar un mes
├── data/
│   └── holidays.ts             # Datos de festivos
├── App.tsx                      # Componente principal
├── main.tsx                     # Entry point
└── index.css                    # Estilos globales
```

## Despliegue en Dokploy

El proyecto está configurado para desplegar automáticamente en Dokploy:

1. **Conecta tu repositorio a Dokploy**
   - Ve a tu proyecto en Dokploy
   - Conecta tu repositorio de GitHub/GitLab

2. **Selecciona la configuración correcta:**
   - **Build Type:** Static SPA (Single Page Application)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Port:** `3000` (o el que prefieras)

3. **Dokploy usará el Dockerfile automáticamente**
   - El Dockerfile buildea la app con Vite
   - Ejecuta un servidor Express para servir la SPA
   - La app estará disponible en tu dominio asignado

### Variables de entorno
No se requieren variables de entorno especiales para esta aplicación.

## Información de Contacto

Calendario laboral oficial de Alcantarilla, Murcia.

Para más información: [Ayuntamiento de Alcantarilla](https://www.alcantarilla.es)
