import { Dispatch } from "redux"

export interface ActionType {
  type: string
  payload?: any
}

export type AppDispatch = Dispatch<ActionType>
