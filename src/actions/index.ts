'use server'

import { auth, signIn, signOut } from '@/auth'
import { db } from '@/lib/db'
import { Session } from 'next-auth'

export async function doSocialLogin(formData: FormData) {
    const action = formData.get('action')
    await signIn(action as string, { redirectTo: "/" })
    const session = await auth() as Session
    db.prepare(`
    INSERT OR IGNORE INTO users (id) VALUES (?);
    `).run(session?.user?.email)
    const s = db.exec(`SELECT * FROM users;`)
    console.log(s)
}
export async function doLogout() {
    await signOut({ redirectTo: "/" })

}
export async function VerifyAuth() {
    const session = await auth() as Session
    return session
}