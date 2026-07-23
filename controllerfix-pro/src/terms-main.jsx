import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { MotionConfig } from "motion/react"
import "./index.css"
import TermsConditions from "./pages/TermsConditions.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <TermsConditions />
    </MotionConfig>
  </StrictMode>
)
