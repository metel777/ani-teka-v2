import { ThemeToggle } from "../ThemeToggle"
import { Button } from "../ui/button"

type Props = {}
export default function Footer({}: Props) {
  return (
    <main className="dark:bg-g.warm-800 bg-g.warm-200">
      <main className="mx-auto mt-5 max-w-[1100px] overflow-hidden">
        <section>
            Theme <ThemeToggle />
        </section>
      </main>
    </main>
  )
}
