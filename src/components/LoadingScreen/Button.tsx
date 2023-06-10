import { HTMLMotionProps, motion } from 'framer-motion'
import { ComponentProps, FC, MouseEventHandler } from 'react'

const variants = {
  pending: {
    opacity: 1
  },
  ready: {
    scale: [0.98, 1.02, 0.98],
    opacity: 1,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

type Props = HTMLMotionProps<'button'>

const Button: FC<Props> = ({ onClick: handleClick, ...restProps }) => {
  return (
    <motion.button
      {...restProps}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'linear' }}
      onClick={handleClick}>
      <motion.img
        src="/logo.svg"
        alt="logo"
        initial="pending"
        animate="ready"
        variants={variants}
      />
    </motion.button>
  )
}

export default Button
