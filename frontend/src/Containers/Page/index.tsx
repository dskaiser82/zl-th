import React from "react"
import "../../root.css"
import { Main } from "./styles"

type PageProps = {
  children: JSX.Element | JSX.Element[]
}
export const Page = (props: PageProps) => {
  return (
    <div>
      <Main>{props.children}</Main>
    </div>
  )
}
