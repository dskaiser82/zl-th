import React from "react"
import { ThemeProvider } from "styled-components"
import "../../root.css"
import { Main } from "./styles"

type PageProps = {
  children: JSX.Element | JSX.Element[]
}

const light = {
  foreground: "var(--grayscale-charcoal)",
  background: "var(--grayscale-white)",
}

const dark = {
  foreground: "var(--grayscale-white)",
  background: "var(--grayscale-charcoal)",
}

export const Page = (props: PageProps) => {
  return (
    <ThemeProvider theme={dark}>
      <Main>{props.children}</Main>
    </ThemeProvider>
  )
}
