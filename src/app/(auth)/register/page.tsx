import { Title1 } from "@/components/Titles"
import { RegisterForm } from "./RegisterForm"
import AuthContainer from "@/components/Auth/AuthContainer"

type Props = {}
export default function page({}: Props) {
  return (
    <AuthContainer>
      <Title1>Sign Up</Title1>
      <RegisterForm />
    </AuthContainer>
  )
}
