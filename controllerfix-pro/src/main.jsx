import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { MotionConfig } from "motion/react"
import "./index.css"
import App from "./App.jsx"
import LoadingScreen from "./components/LoadingScreen.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <LoadingScreen />
      <App />
    </MotionConfig>
  </StrictMode>
)
