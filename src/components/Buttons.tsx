import { VariantProps } from "class-variance-authority"
import { Button, buttonVariants } from "./ui/button"

export function PrimaryBtn({
  children,
  type,
}: {
  children: React.ReactNode
  type?: "submit" | "reset" | "button" | undefined
}) {
  return (
    <Button
      type={type}
      className="border border-indigo-600 bg-indigo-600 text-white shadow-neu-shadow hover:bg-indigo-700"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, .08), rgba(255, 255, 255, 0))",
      }}
    >
      {children}
    </Button>
  )
}
