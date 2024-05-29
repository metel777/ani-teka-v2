'use server'

import { signIn, signOut } from '@/auth'
import { redirect } from 'next/navigation'

export async function doSocialLogin(formData: FormData) {
    const action = formData.get('action')

    await signIn(action as string, { redirectTo: "/" })
    console.log(action)
}
export async function doLogout() {
    await signOut()
    redirect('/')
}