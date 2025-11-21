# Guía de Referencia DDD - Presentación Interactiva

Aplicación React + Vite + TypeScript para presentar conceptos de Domain-Driven Design aplicados al dominio de seguros (SOAT).

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/           # Componentes UI reutilizables (Card, Badge)
│   ├── Header.tsx    # Header de la aplicación
│   ├── Sidebar.tsx   # Navegación lateral por categorías
│   └── SlideCard.tsx # Componente para renderizar cada slide
├── data/
│   ├── categories.ts # Definición de categorías del sidebar
│   └── slideData.ts  # Datos de todos los slides
├── App.tsx           # Componente principal
└── index.css         # Estilos globales (Tailwind)
```

## 🎨 Características

- **Navegación por categorías**: Sidebar con 7 categorías principales
- **Slides componentizados**: Cada slide es un componente separado
- **Responsive**: Diseño adaptable a móviles y desktop
- **Tailwind CSS**: Estilos modernos y consistentes
- **TypeScript**: Tipado fuerte para mejor DX

## 📝 Agregar Nuevos Slides

1. Edita `src/data/slideData.ts`
2. Agrega un nuevo objeto al array `slides`:

```typescript
{
  id: XX,
  category: 'strategic', // intro | modeling | strategic | tactical | tools | conclusions | glossary
  title: 'Título del Slide',
  pitch: `Contenido completo del pitch...`,
  image: '/images/nombre-imagen.png', // opcional
}
```

3. Coloca las imágenes en `public/images/`

## 🖼️ Imágenes

Las imágenes deben estar en `public/images/` y se referencian como `/images/nombre.png` en el código.

## 🛠️ Tecnologías

- React 18
- TypeScript
- Vite
- Tailwind CSS

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
