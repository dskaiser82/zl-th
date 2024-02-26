import React from "react"
import { useDispatch } from "react-redux"
import { useTheme } from "styled-components"
import { toggleThemeAction } from "../../../store/actions"
import { StyledThemeButton } from "./styles"

export const ThemeButton = () => {
  const theme = useTheme()
  const dispatch = useDispatch()

  const handleThemeChange = () => {
    dispatch(toggleThemeAction())
    document.body.classList.toggle("dark", theme.name === "light")
    document.body.classList.toggle("light", theme.name === "dark")
  }

  return (
    <StyledThemeButton onClick={() => handleThemeChange()}>
      {theme.name}
    </StyledThemeButton>
  )
}
