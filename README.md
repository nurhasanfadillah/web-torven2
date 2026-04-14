# web-torven2

Landing page for Torven Industries built with React, Vite, and Tailwind CSS.

## Features

- React 19 frontend
- Vite build system
- Tailwind CSS v4 styling
- Netlify-ready static deployment

## Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Netlify deployment

The `netlify.toml` file is configured to:

- build the app with `npm run build`
- publish the `dist` directory
- fallback all routes to `index.html` for client-side routing

To deploy on Netlify, connect this repository and use the default build command and publish directory.
