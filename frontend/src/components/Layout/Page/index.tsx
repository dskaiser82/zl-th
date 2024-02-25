import React from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"
import "../../../root.css"
import { Nav } from "../Nav"
import { Main } from "./styles"

type PageProps = {
  children: JSX.Element | JSX.Element[]
}

const light = {
  name: "light",
  foreground: "var(--grayscale-charcoal)",
  background: "var(--grayscale-white)",
}

const dark = {
  name: "dark",
  foreground: "var(--grayscale-white)",
  background: "var(--grayscale-charcoal)",
}

export const Page = (props: PageProps) => {
  const currentTheme = useSelector((state) => state.theme.theme)

  return (
    <ThemeProvider theme={currentTheme === "light" ? light : dark}>
      <Nav />
      <Main>{props.children}</Main>
    </ThemeProvider>
  )
}
