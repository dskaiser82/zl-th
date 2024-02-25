import React from "react"
import { useTheme } from "styled-components"
import { StyledThemeButton } from "./styles"

export const ThemeButton = () => {
  const theme = useTheme()
  return <StyledThemeButton>{theme.name}</StyledThemeButton>
}
