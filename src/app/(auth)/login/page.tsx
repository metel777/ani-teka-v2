import { Title1 } from "@/components/Titles"
import { LoginForm } from "./LoginForm"
import AuthContainer from "@/components/Auth/AuthContainer"

type Props = {}
export default function page({}: Props) {
  return (
    <AuthContainer>
      <Title1>Sign In</Title1>
      <LoginForm />
    </AuthContainer>
  )
}
