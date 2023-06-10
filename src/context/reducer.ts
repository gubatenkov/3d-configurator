import { InitState } from './'
import type { Action } from './actions'

export default function reducer(state: InitState, action: Action): InitState {
  switch (action.type) {
    case 'START_INTRO':
      return { ...state, appState: 'intro' }
    case 'SKIP_INTRO':
      return { ...state, appState: 'presentation' }
    case 'UPDATE_CONFIG':
      return {
        ...state,
        config: {
          ...state.config,
          [action.payload.target]: action.payload.value
        }
      }
    default:
      return state
  }
}
