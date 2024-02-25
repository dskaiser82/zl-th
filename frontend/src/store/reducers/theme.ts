import { GET_THEME, TOGGLE_THEME } from "../actions"

type ThemeStateProps = {
  theme: "light" | "dark"
}

const initialState: ThemeStateProps = {
  theme: "dark",
}

const getTheme = (state) => {
  return { ...state }
}

const toggleTheme = (state) => {
  return { theme: state.theme === "light" ? "dark" : "light" }
}

export default (state = initialState, { type }) => {
  switch (type) {
    case GET_THEME:
      return getTheme(state)
    case TOGGLE_THEME:
      return toggleTheme(state)
    default:
      return state
  }
}
