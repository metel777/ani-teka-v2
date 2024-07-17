import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./src/db/generations",
  dbCredentials: {
    url:"postgres://default:N1V7OvcKYGxQ@ep-super-firefly-a2rm6sr7-pooler.eu-central-1.aws.neon.tech/verceldb?sslmode=require"
  }

})
