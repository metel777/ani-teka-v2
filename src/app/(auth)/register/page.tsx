import { Title1 } from "@/components/Titles"
import { AlternativeRegisterForm, RegisterForm } from "./RegisterForm"

type Props = {}
export default function page({}: Props) {
  return (
    <main className="h-screen">
      <section className=" m-auto mt-24 w-[300px]">
        <Title1>Sign Up</Title1>
        <AlternativeRegisterForm />
      </section>
    </main>
  )
}
