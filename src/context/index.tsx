import type { Action } from './actions'
import type { TConfig } from '../data'

import {
  FC,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
  createContext,
  useCallback
} from 'react'

import reducer from './reducer'
import { initialConfig } from '../data'

export type InitState = {
  config: TConfig
  appState: 'pending' | 'intro' | 'presentation'
  dispatch: Dispatch<Action>
}

const initState = {
  config: initialConfig,
  appState: 'pending'
} as InitState

const AppContext = createContext({} as InitState)

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const { dispatch, ...rest } = useContext(AppContext)

  return {
    ...rest,
    updateConfig: useCallback(
      (target: keyof TConfig, value: string) =>
        dispatch({
          type: 'UPDATE_CONFIG',
          payload: {
            target,
            value
          }
        }),
      []
    ),
    skipIntro: useCallback(() => dispatch({ type: 'SKIP_INTRO' }), []),
    startIntro: useCallback(() => dispatch({ type: 'START_INTRO' }), [])
  }
}

export { AppContext, ContextProvider }
