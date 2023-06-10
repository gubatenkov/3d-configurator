import type { TConfig, TPanelTab } from '../../data'

import { motion } from 'framer-motion'
import { Dispatch, FC, SetStateAction, startTransition } from 'react'

const variants = {
  hidden: (custom: number) => ({
    y: 200 * (custom + 1)
  }),
  visible: {
    y: 0
  }
}

type Props = TPanelTab & {
  index: number
  activePanel: keyof TConfig | null
  onClick: Dispatch<SetStateAction<keyof TConfig | null>>
}

const PanelTab: FC<Props> = ({ index, activePanel, onClick, label, value }) => {
  return (
    <motion.li
      className="panel-tabs__wrap"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ delay: 1, duration: 2, type: 'spring' }}>
      <button
        className={
          value === activePanel ? 'panel-tabs__tab active' : 'panel-tabs__tab'
        }
        onClick={() => {
          startTransition(() => {
            onClick(value === activePanel ? null : value)
          })
        }}>
        <motion.span
          custom={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5 + index * 0.35,
            duration: 1,
            type: 'keyframes'
          }}>
          {label}
        </motion.span>
      </button>
    </motion.li>
  )
}

export default PanelTab
