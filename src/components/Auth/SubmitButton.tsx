'use client'

import { useFormStatus } from "react-dom"
import { PrimaryBtn } from "../Buttons"
import { Loader2 } from "lucide-react"

type Props = { mode: "login" | "signup" }
export default function SubmitButton({ mode }: Props) {
  const formStatus = useFormStatus()
  return (
    <PrimaryBtn disabled={formStatus.pending}>
      {formStatus.pending ? (
        <>
          <Loader2 className="animate-spin" />
          Loading...
        </>
      ) : mode === "login" ? (
        "Login into account"
      ) : (
        "Create an account"
      )}
    </PrimaryBtn>
  )
}
