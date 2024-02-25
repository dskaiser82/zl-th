import styled from "styled-components"
import { baseLayoutStyles } from "../shared"

export const StyledNav = styled.nav`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.foreground};
  position: sticky;
  top: 0;
  padding-right: 12px;
  ${baseLayoutStyles};
`

export const StyledUl = styled.ul`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  list-style-type: none;

  @media (max-width: 1260px) {
    display: none;
  }
`

export const StyledLi = styled.ul``
