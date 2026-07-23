import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import iconMark from "../assets/brand/icon-mark-transparent.png"

const MIN_DISPLAY_MS = 1200

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    const start = Date.now()

    const finish = () => {
      const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - start), 0)
      setTimeout(() => setVisible(false), remaining)
    }

    if (document.readyState === "complete") {
      finish()
    } else {
      window.addEventListener("load", finish)
    }

    return () => window.removeEventListener("load", finish)
  }, [])

  useEffect(() => {
    if (!visible) document.body.style.overflow = ""
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-7 bg-bg"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[110px]"
          />

          <motion.span
            className="relative h-16 w-auto sm:h-20"
            animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={iconMark}
              alt="ControllerFix Pro"
              className="h-full w-auto object-contain drop-shadow-[0_0_20px_rgba(138,43,226,0.65)]"
            />
          </motion.span>

          <div className="relative h-1 w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="gradient-accent absolute inset-y-0 left-0 w-1/2 rounded-full"
              animate={{ x: [-90, 170] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
