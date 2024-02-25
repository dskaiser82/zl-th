import styled from "styled-components"
import { baseLayoutStyles } from "../shared"

export const Main = styled.main`
  height: 90vh;
  display: flex;
  flex-flow: column;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
  padding: 8px;
  ${baseLayoutStyles}
`