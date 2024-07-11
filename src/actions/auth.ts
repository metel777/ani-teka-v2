'use server'

import { hash } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { generateIdFromEntropySize } from "lucia";
import { db, users } from "@/db/schema";
import { lucia } from "@/auth/lucia";
import { eq } from "drizzle-orm";
import { verify } from "@node-rs/argon2";
import { cache } from "react";

import type { Session, User } from "lucia";

interface ActionResult {
    error: string;
}

export async function register(formData: FormData): Promise<ActionResult> {
    "use server";

    const username = formData.get('username') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (
        typeof username !== "string" ||
        username.length < 3 ||
        username.length > 31 ||
        !/^[a-z0-9_-]+$/.test(username)
    ) {
        return {
            error: "Invalid username"
        };
    }
    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
        return {
            error: "Invalid password"
        };
    }

    const passwordHash = await hash(password);
    const userId = generateIdFromEntropySize(10); // 16 characters long

    // TODO: check if username is already used
    try {
        await db.insert(users).values({ id: userId, email, passwordHash, username})
    } catch (error) {

    }

    const session = await lucia.createSession(userId, username, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/");
}

export async function login(formData: FormData): Promise<ActionResult> {

    const email = formData.get('email') as string
    const password = formData.get('password') as string


    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
        return {
            error: "Invalid password"
        };
    }

    const existingUser = await db.select().from(users).where(eq(users.email, email))
    if (!existingUser) {
        return {
            error: "Incorrect username or password"
        };
    }

    const validPassword = await verify(existingUser[0].passwordHash as string, password);
    if (!validPassword) {
        return {
            error: "Incorrect username or password"
        };
    }

    const session = await lucia.createSession(existingUser[0].id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/");
}

export async function validateSession(): Promise<{ user: User, session: Session } | { user: null, session: null }> {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) {
        return {
            user: null,
            session: null
        };
    }

    const result = await lucia.validateSession(sessionId);
    try {
        if (result.session && result.session.fresh) {
            const sessionCookie = lucia.createSessionCookie(result.session.id);
            cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        }
        if (!result.session) {
            const sessionCookie = lucia.createBlankSessionCookie();
            cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        }
    } catch { }
    return result;

}

export async function logout(): Promise<ActionResult> {
	"use server";
	const { session } = await validateSession();
	if (!session) {
		return {
			error: "Unauthorized"
		};
	}

	await lucia.invalidateSession(session.id);

	const sessionCookie = lucia.createBlankSessionCookie();
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/login");
}