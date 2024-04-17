import { defineConfig } from 'tsup'


export default defineConfig({
  entryPoints: ['src/index.ts'],
  external: [
    '@fastify/swagger',
    '@fastify/swagger-ui',
  ],
  format: "cjs",
  esbuildOptions: (option) => {
    return {
      ...option,
      logLevel: 'info',
      minify: true,
      outdir: 'dist',
      bundle: true,
      color: true,
    }
  }
})