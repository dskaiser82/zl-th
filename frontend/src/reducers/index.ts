import { combineReducers } from "redux"
import search from "./search"
// import recipe from './recipe'

const rootReducer = combineReducers({ search })
export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
