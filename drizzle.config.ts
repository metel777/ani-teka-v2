import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: "sqlite",
  schema: "./src/db/schema.ts",
  out: "./src/db/generations",
  dbCredentials: {
    url: './sqlite.db'
  }
})