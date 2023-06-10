import type { FC } from 'react'
import type { TConfig, TPanelItem } from '../../data'

import { motion } from 'framer-motion'

type Props = TPanelItem & {
  index: number
  activePanel: keyof TConfig
  onChange: (target: keyof TConfig, value: string) => void
}

const PanelItem: FC<Props> = ({
  label,
  value,
  index,
  onChange,
  activePanel,
  backgroundImage
}) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        delay: (index + 1) * 0.05
      }}>
      <button
        className="panel-options__option"
        style={
          activePanel === 'wheelsType'
            ? {
                backgroundColor: 'white',
                backgroundImage: `url(${backgroundImage})`
              }
            : {
                backgroundColor: value
              }
        }
        onClick={() => onChange(activePanel, value)}>
        <span className="panel-options__option-text">{label}</span>
      </button>
    </motion.li>
  )
}

export default PanelItem
