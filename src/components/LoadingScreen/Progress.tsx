import type { FC } from 'react'
import { motion } from 'framer-motion'

const Progress: FC<{ progress: number }> = ({ progress }) => {
  const oppositeProgress = 1 - Number(progress.toFixed(1)) / 100

  return (
    <motion.svg
      initial={{ rotate: -180 }}
      width="300"
      height="10"
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 3840 2160"
      version="1.1">
      <g>
        <line
          stroke="#038c00"
          fill="none"
          x1="-0.48782"
          y1="4.60524"
          x2="102.21827"
          y2="4.89475"
          id="svg_3"
        />
        <line
          stroke="#ffffff"
          fill="none"
          x1="102.1234"
          y1="4.85524"
          x2="202.53437"
          y2="5.14475"
          id="svg_1"
        />
        <line
          stroke="#cd242d"
          fill="none"
          x1="202.43006"
          y1="5.10525"
          x2="301.11969"
          y2="5.39476"
          id="svg_4"
        />
        <motion.line
          initial={{ pathLength: 1 }}
          animate={{ pathLength: oppositeProgress, strokeWidth: 3 }}
          transition={{ duration: 1.5 }}
          stroke-width="4"
          id="svg_2"
          y2="5.38889"
          x2="301.01474"
          y1="5.11111"
          x1="-0.51472"
          stroke="#000000"
          fill="none"
        />
      </g>
    </motion.svg>
  )
}

export default Progress
