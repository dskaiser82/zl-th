import styled, { css } from "styled-components"

export const buttonStyles = css({
  backgroundColor: "blue",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "darkblue",
  },
})

export const StyledDiv = styled.div`
  ${buttonStyles}
`
