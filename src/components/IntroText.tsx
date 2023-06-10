import type { FC } from 'react'
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

type Props = {
  onClick: () => void
}

const IntroText: FC<Props> = ({ onClick }) => {
  return (
    <div className="intro-text">
      <motion.h1
        className="intro-text__suptitle"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 3, duration: 1.5, ease: 'easeInOut' }}>
        Lamborghini presents
      </motion.h1>
      <motion.h2
        className="intro-text__title"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 5.5, duration: 1.5, ease: 'easeInOut' }}>
        Aventador
      </motion.h2>
      <motion.button
        className="intro-text__btn"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 8.5, duration: 1.5, ease: 'easeInOut' }}
        onClick={onClick}>
        explore
      </motion.button>
    </div>
  )
}

export default IntroText
