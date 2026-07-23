import { ArrowLeft } from "lucide-react"
import Logo from "./Logo"

export default function SimpleHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-1 sm:px-5 sm:pt-1.5">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/5 bg-bg/50 px-4 py-3.5 backdrop-blur-lg sm:px-5 lg:px-6">
        <Logo variant="icon" size="lg" href="/" />
        <a
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-text-muted transition-colors duration-200 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>
      </nav>
    </header>
  )
}
