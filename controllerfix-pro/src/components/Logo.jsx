import iconMark from "../assets/brand/icon-mark-transparent.png"

export default function Logo({ variant = "full", size = "md", className = "" }) {
  const iconHeight = size === "lg" ? "h-9" : "h-7"

  return (
    <a
      href="#home"
      className={`flex items-center gap-2.5 font-heading font-bold tracking-wide ${className}`}
      aria-label="ControllerFix Pro — home"
    >
      <span className={`${iconHeight} w-auto shrink-0`}>
        <img
          src={iconMark}
          alt=""
          className="h-full w-auto object-contain drop-shadow-[0_0_12px_rgba(138,43,226,0.65)]"
        />
      </span>
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
