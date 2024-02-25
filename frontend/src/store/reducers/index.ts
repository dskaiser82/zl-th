import { combineReducers } from "redux"
import search from "./search"
import recipe from "./recipe"
import theme from "./theme"

const rootReducer = combineReducers({ search, recipe, theme })
export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
