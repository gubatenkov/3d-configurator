import { TConfig } from '../data'

export type Action =
  | {
      type: 'START_INTRO'
    }
  | {
      type: 'SKIP_INTRO'
    }
  | {
      type: 'UPDATE_CONFIG'
      payload: {
        target: keyof TConfig
        value: string
      }
    }
