import { FC, useCallback, useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const Cursor: FC = () => {
  const x = useMotionValue(window.innerWidth / 2 - 34)
  const y = useMotionValue(window.innerHeight / 2 - 34)
  const X = useSpring(x, { damping: 50, stiffness: 500 })
  const Y = useSpring(y, { damping: 50, stiffness: 500 })

  const moveMouse = useCallback(
    (e: MouseEvent) => {
      x.set(e.clientX - 34)
      y.set(e.clientY - 34)
    },
    [x, y]
  )

  useEffect(() => {
    window.addEventListener('mousemove', moveMouse)
    return () => window.removeEventListener('mousemove', moveMouse)
  }, [])

  return (
    <motion.div
      className="cursor"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1
      }}
      transition={{ delay: 1, duration: 2 }}>
      <motion.svg
        className="inner-circle"
        width="70"
        height="70"
        viewBox="0 0 70 70"
        style={{
          x,
          y
        }}>
        <circle cx="35" cy="35" r="1.65663" fill="white" strokeWidth="2" />
      </motion.svg>
      <motion.svg
        className="outer-circle"
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        style={{
          x: X,
          y: Y
        }}>
        <path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" />
        <path
          d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
          style={{
            stroke: 'white',
            strokeDashoffset: '1px'
          }}
          pathLength="1"
        />
      </motion.svg>
    </motion.div>
  )
}

export default Cursor
