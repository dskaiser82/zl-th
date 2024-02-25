import styled from "styled-components"

export const StyledThemeButton = styled.button`
  background-color: ${(props) => props.theme.foreground};
  color: ${(props) => props.theme.background};
`
