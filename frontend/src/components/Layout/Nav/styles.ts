import styled from "styled-components"
import { baseLayoutStyles } from "../shared"

export const StyledNav = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
  position: sticky;
  top: 0;
  ${baseLayoutStyles}
`

export const StyledUl = styled.ul`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  list-style-type: none;
`

export const StyledLi = styled.ul``
