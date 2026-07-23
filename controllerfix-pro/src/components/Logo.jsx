import iconMark from "../assets/brand/icon-mark-transparent.png"

export default function Logo({ variant = "full", className = "" }) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-2.5 font-heading font-bold tracking-wide ${className}`}
      aria-label="ControllerFix Pro — home"
    >
      <img src={iconMark} alt="" className="h-8 w-8 shrink-0" />
      {variant === "full" && (
        <span className="text-[1.05rem] leading-none text-white">
          CONTROLLER<span className="text-gradient-fix">FIX</span>{" "}
          <span className="font-normal opacity-90">PRO</span>
        </span>
      )}
      {variant === "full" ? null : <span className="sr-only">ControllerFix Pro</span>}
    </a>
  )
}
