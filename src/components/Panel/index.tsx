import { motion } from 'framer-motion'
import { lazy, useState } from 'react'

const PanelTab = lazy(() => import('./PanelTab'))
const PanelItem = lazy(() => import('./PanelItem'))

import { TConfig, TPanelTab, panelData } from '../../data'

const Panel = () => {
  const [activePanel, setActivePanel] = useState<keyof TConfig | null>(null)

  return (
    <div className="panel">
      <motion.ul className="panel-tabs" layout="position">
        {panelData.map((panelTab: TPanelTab, index) => {
          return (
            <PanelTab
              key={panelTab.id}
              index={index}
              onClick={setActivePanel}
              activePanel={activePanel}
              {...panelTab}
            />
          )
        })}
      </motion.ul>

      <div className="panel-options__wrap">
        <ul className="panel-options">
          {activePanel
            ? panelData
                .find((tab: TPanelTab) => tab.value === activePanel)!
                ['items'].map((panelItem, idx) => {
                  return (
                    <PanelItem
                      key={panelItem.id}
                      index={idx}
                      activePanel={activePanel}
                      {...panelItem}
                    />
                  )
                })
            : null}
        </ul>
      </div>
    </div>
  )
}

export default Panel
