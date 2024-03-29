import styled from "styled-components"
import { baseLayoutStyles } from "../shared"

export const Main = styled.main`
  margin-top: 100px;
  display: flex;
  flex-flow: column;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
  padding: 8px;
  ${baseLayoutStyles}
`
