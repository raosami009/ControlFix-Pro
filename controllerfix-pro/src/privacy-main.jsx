import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { MotionConfig } from "motion/react"
import "./index.css"
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <PrivacyPolicy />
    </MotionConfig>
  </StrictMode>
)
