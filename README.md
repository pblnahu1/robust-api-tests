# Robust API Tests

API con Express y TypeScript. Pruebas unitarias y de integración con Vitest y Supertest.

1. Primeros pasos
## Dependencias usadas
```bash
npm i express cors dotenv
```

## Dependencias de desarrollo
```bash
npm install --save-dev typescript ts-node @types/node @types/express nodemon vitest supertest @types/supertest
npm i --save-dev @types/jest ## otro modo de ejecutar pruebas
```

## Inicializar TypeScript (`tsconfig.json`)
```bash
npx tsc --init
```
## Configurar scripts (`package.json`)

```js
"scripts": {
  "dev": "nodemon src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "test": "vitest",
  "test:watch": "vitest --watch"
}
```

## Ejecutar servidor en modo de desarrollo

```bash
npm run dev
```

## API
`http://localhost:3000/api/users`

2. Testeo
```bash
# Ejecución de pruebas
npm run test
# Para modo "watch" (se ejecutan en vivo con cambios)
npm run test:watch
```