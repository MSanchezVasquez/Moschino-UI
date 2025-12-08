# Moschino UI 🎨

El sistema de diseño oficial de Moschino. Construido con React, TypeScript y Tailwind CSS.

## Instalación

```bash
npm install @mcodex23/moschino-ui
# o
pnpm add @mcodex23/moschino-ui
```

## Uso

Importa los estilos en tu archivo principal (\_app.tsx, layout.tsx o main.tsx):

```typescript
import "@mcodex23/moschino-ui/moschino-ui.css";
```

## Usa los componentes:

```typescript
import { Button, ProductCard } from "@mcodex23/moschino-ui";

function App() {
  return <ProductCard title="Auriculares Pro" price={200} image="..." />;
}
```

Mira todos los componentes en nuestro Storybook: [Storybook](https://moschino-ui.vercel.app/)

---
