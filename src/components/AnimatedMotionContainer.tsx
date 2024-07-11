type Props = { children: React.ReactNode }
import { motion } from "framer-motion"

export default function AnimatedMotionContainer({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "backIn" }}
      className="relative h-[290px] w-[200px]  rounded-lg border border-[--stroke-weak] bg-[--fill] sm:h-[280px] sm:w-[200px] md:h-[280px] md:w-[190px] lg:h-[260px] lg:w-[180px] overflow-hidden"
    >
      {children}
    </motion.div>
  )
}
