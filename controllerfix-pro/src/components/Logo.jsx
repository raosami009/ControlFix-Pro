import iconMark from "../assets/brand/icon-mark-transparent.png"

export default function Logo({ variant = "full", size = "md", className = "" }) {
  const iconSize = size === "lg" ? "h-20 w-20" : "h-8 w-8"

  return (
    <a
      href="#home"
      className={`flex items-center gap-2.5 font-heading font-bold tracking-wide ${className}`}
      aria-label="ControllerFix Pro — home"
    >
      <img
        src={iconMark}
        alt=""
        className={`${iconSize} shrink-0 drop-shadow-[0_0_12px_rgba(138,43,226,0.65)]`}
      />
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
