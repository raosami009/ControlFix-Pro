function Logo({ className = "h-8 w-auto" }) {
  return (
    <svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e93d9a" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path d="M10 15C10 12.2386 12.2386 10 15 10H25C27.7614 10 30 12.2386 30 15V25C30 27.7614 27.7614 30 25 30H15C12.2386 30 10 27.7614 10 25V15Z" fill="url(#logoGradient)" />
      <circle cx="16" cy="16" r="1.5" fill="white" />
      <circle cx="24" cy="16" r="1.5" fill="white" />
      <circle cx="16" cy="24" r="1.5" fill="white" />
      <circle cx="24" cy="24" r="1.5" fill="white" />
      <text x="40" y="27" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="#f5f2fa">
        ControlFix <tspan fill="url(#logoGradient)">Pro</tspan>
      </text>
    </svg>
  )
}

export default Logo
