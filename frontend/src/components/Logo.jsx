function Logo({ className = "h-8 w-auto" }) {
  return (
    <svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 15C10 12.2386 12.2386 10 15 10H25C27.7614 10 30 12.2386 30 15V25C30 27.7614 27.7614 30 25 30H15C12.2386 30 10 27.7614 10 25V15Z" fill="#2563eb" />
      <circle cx="16" cy="16" r="1.5" fill="white" />
      <circle cx="24" cy="16" r="1.5" fill="white" />
      <circle cx="16" cy="24" r="1.5" fill="white" />
      <circle cx="24" cy="24" r="1.5" fill="white" />
      <text x="40" y="27" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="#f9fafb">
        ControlFix <tspan fill="#2563eb">Pro</tspan>
      </text>
    </svg>
  )
}

export default Logo
