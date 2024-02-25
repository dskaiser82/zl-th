import styled, { css } from "styled-components"

export const BodyInstructionCSS = css({
  fontSize: "16px",
  margin: "12px",
})

export const FlexHeroCSS = css({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  alignItems: "start",
})

export const StyledInstructions = styled.div`
  ${BodyInstructionCSS}
`

export const StyledFlexHero = styled.div`
  ${FlexHeroCSS}
`
