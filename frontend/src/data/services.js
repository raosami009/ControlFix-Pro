import { Joystick, Target, CircleDot, Usb, BatteryCharging, SprayCan } from 'lucide-react'

const services = [
  {
    icon: Joystick,
    title: 'Stick Drift Repair',
    description: 'Complete replacement of internal potentiometer modules for permanent centering fixes.',
  },
  {
    icon: Target,
    title: 'Trigger & Bumper Repair',
    description: 'Fix for mushy, unresponsive, or stuck L1/R1 and adaptive trigger mechanisms.',
  },
  {
    icon: CircleDot,
    title: 'Button Replacement',
    description: 'Replacement of worn conductive rubber pads or broken physical buttons.',
  },
  {
    icon: Usb,
    title: 'Charging Port Fix',
    description: 'Microsoldering for damaged USB-C or Micro-USB ports that no longer connect.',
  },
  {
    icon: BatteryCharging,
    title: 'Battery Replacement',
    description: 'High-capacity battery swap for controllers with poor charge retention.',
  },
  {
    icon: SprayCan,
    title: 'Deep Cleaning',
    description: 'Internal chemical cleaning and restoration of cosmetic surfaces.',
  },
]

export default services
