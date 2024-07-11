import { Button } from "./ui/button"

export function PrimaryBtn({children}: {children: React.ReactNode}) {
  return (
    <Button
      className="bg-indigo-600 shadow-neu-shadow border border-indigo-600 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, .08), rgba(255, 255, 255, 0))",
      }}
    >
      {children}
    </Button>
  )
}
