# Proyecto: Calendario Laboral Alcantarilla 2026-2027

## Descripción
Aplicación web moderna para visualizar el calendario laboral de Alcantarilla, Murcia, con festivos nacionales y locales para los años 2026 y 2027.

## Stack Tecnológico
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Estilos**: Tailwind CSS
- **Runtime**: Node.js

## Estructura del Proyecto
```
src/
├── components/
│   └── MonthCalendar.tsx          # Componente para renderizar un mes del calendario
├── data/
│   └── holidays.ts                 # Datos de festivos nacionales y locales
├── App.tsx                         # Componente principal de la aplicación
├── main.tsx                        # Entry point
└── index.css                       # Estilos globales con Tailwind

public/
├── vite.svg

Archivos de configuración:
├── vite.config.ts                  # Configuración de Vite
├── tsconfig.json                   # Configuración de TypeScript
├── tsconfig.node.json              # TypeScript config para archivos de configuración
├── tailwind.config.js              # Configuración de Tailwind CSS
├── postcss.config.js               # Configuración de PostCSS
├── package.json                    # Dependencias y scripts
└── index.html                      # HTML principal
```

## Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo (http://localhost:5173)
npm run build        # Compila el proyecto para producción
npm run preview      # Preview de la build de producción
npm run lint         # Ejecuta ESLint para verificar código (si se configura)
```

## Festivos Configurados

### Nacionales (2026 y 2027)
- Año Nuevo (1 de enero)
- Reyes Magos (6 de enero)
- Viernes Santo (variable: 17/04/2026, 09/04/2027)
- Día del Trabajo (1 de mayo)
- Asunción de María (15 de agosto)
- Día de la Hispanidad (12 de octubre)
- Todos los Santos (1 de noviembre)
- Día de la Constitución (6 de diciembre)
- Navidad (25 de diciembre)

### Locales de Alcantarilla
- San Roque, Patrón de Alcantarilla (22 de mayo)

## Características principales
- ✅ Visualización de calendarios mensuales para 2026 y 2027
- ✅ Selector de año interactivo
- ✅ Diferenciación visual entre festivos nacionales y locales
- ✅ Lista detallada de todos los festivos del año seleccionado
- ✅ Diseño responsivo y mobile-first
- ✅ Interfaz accesible y moderna
- ✅ Highlighting de fin de semana
- ✅ Indicador del día actual

## Cómo desarrollar
1. Instalar dependencias: `npm install`
2. Iniciar servidor local: `npm run dev`
3. La aplicación se abrirá automáticamente en el navegador
4. Los cambios se reflejan en tiempo real (HMR)

## Cómo agregar festivos adicionales
Editar el archivo `src/data/holidays.ts` y añadir nuevas entradas al array `holidays`:

```typescript
{ 
  date: 'YYYY-MM-DD', 
  name: 'Nombre del festivo', 
  type: 'national' | 'local' 
}
```

## Cómo compilar producción
```bash
npm run build
```

El resultado se genera en la carpeta `dist/` lista para desplegar en un servidor web.

## Notas de Desarrollo
- El proyecto no tiene un servidor backend, es puramente frontend
- Los datos de festivos están hardcodeados en `src/data/holidays.ts`
- Para agregar más años, ampliar el array de holidays y el selector de años
- La aplicación usa TypeScript estricto (strict: true) para mejor type safety

## Debugging
- Abrir Developer Tools en el navegador (F12)
- Vite proporciona source maps completos en desarrollo
- Usar React DevTools para inspeccionar componentes
