import { motion } from "motion/react"

// NOTE: placeholder WhatsApp number (fictional 555 range) — swap for the real business line before launch.
const WHATSAPP_NUMBER = "15555550123"
const WHATSAPP_MESSAGE = "Hi! I'd like to ask about a controller repair."

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.04 3C9.37 3 3.96 8.4 3.96 15.06c0 2.2.58 4.28 1.68 6.13L3 29l8.02-2.6a12.1 12.1 0 0 0 5.02 1.1h.01c6.67 0 12.07-5.4 12.07-12.06C28.12 8.78 22.71 3 16.04 3Zm0 21.9h-.01a10.03 10.03 0 0 1-5.1-1.4l-.37-.22-4.76 1.54 1.56-4.65-.24-.38a9.9 9.9 0 0 1-1.53-5.23c0-5.5 4.48-9.98 9.99-9.98 2.67 0 5.17 1.04 7.06 2.93a9.9 9.9 0 0 1 2.92 7.06c0 5.5-4.48 9.98-9.98 9.98Zm5.48-7.47c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.5-.5-.68-.51h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.15 4.54.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  )
}

export default function WhatsAppFab() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="gradient-accent gradient-accent-hover fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_10px_35px_-10px_rgba(138,43,226,0.7)] transition-colors duration-300 sm:bottom-8 sm:right-8"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent-pink/40 [animation-duration:2.5s]"
      />
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  )
}
