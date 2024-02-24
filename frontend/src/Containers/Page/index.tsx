import React from "react"
import "../../root.css"

type PageProps = {
  children: JSX.Element
}
export const Page = (props: PageProps) => {
  return <div>{props.children}</div>
}
