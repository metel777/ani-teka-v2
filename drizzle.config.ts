'use server'

import { defineConfig } from 'drizzle-kit'
console.log()
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./src/db/generations",
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
    
  }

})
