import { Title1 } from "@/components/Titles"
import {  LoginForm } from "./LoginForm"

type Props = {}
export default function page({}: Props) {
  return (
    <main className="h-screen">
      <section className=" m-auto mt-24 w-[300px]">
        <Title1>Sign In</Title1>
        <LoginForm />
      </section>
    </main>
  )
}
