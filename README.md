# Portfolio — Andrés Méndez

Portafolio personal desarrollado con Astro, React y Tailwind CSS.

🌐 [andfelipeme.duckdns.org](https://andfelipeme.duckdns.org)

## Stack

- [Astro](https://astro.build)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## Correr en local

```bash
git clone https://github.com/andfelipeme/portfolio.git
cd portfolio
bun install
bun run dev
```

## Build

```bash
bun run build
bun run preview
```

## Deploy

El sitio está hosteado en un VPS con Apache y Ubuntu. Para actualizar:

```bash
./deploy.sh
```

## Estructura

```
src/
  components/    # Componentes reutilizables
  content/blog/  # Posts en Markdown
  layouts/       # Layout principal
  pages/         # Rutas del sitio
  assets/        # Imágenes optimizadas
```

## Licencia

MIT
