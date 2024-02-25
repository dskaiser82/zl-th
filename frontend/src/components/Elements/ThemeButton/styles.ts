import styled from "styled-components"

export const StyledThemeButton = styled.button`
  background-color: ${(props) => props.theme.foreground};
  color: ${(props) => props.theme.background};
  text-transform: uppercase;
  height: 48px;
  width: 200px;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
`
