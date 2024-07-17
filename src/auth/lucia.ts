import { Lucia } from "lucia";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { db, sessionsTable, users } from "@/db/schema";


const adapter = new DrizzlePostgreSQLAdapter(db, sessionsTable, users)

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		expires: false,
		attributes: {
			secure: process.env.NODE_ENV === "production"
		}
	},
	getUserAttributes: (attributes) => {
		return {
			email: attributes.email,
			username: attributes.username
		};
	}
})



declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
	interface DatabaseUserAttributes {
		email: string;
		username: string;
	}

}

