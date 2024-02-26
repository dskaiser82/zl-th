import { TOGGLE_THEME } from "../actions"

type ThemeStateProps = {
  theme: "light" | "dark"
}

const initialState: ThemeStateProps = {
  theme: "dark",
}

const toggleTheme = (state) => {
  return { theme: state.theme === "light" ? "dark" : "light" }
}

export default (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_THEME:
      return toggleTheme(state)
    default:
      return state
  }
}
