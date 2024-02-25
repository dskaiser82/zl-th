import React from "react"
import { StyledNav, StyledUl, StyledLi } from "./styles"

export const Nav = () => {
  return (
    <StyledNav>
      <img
        src="https://www.zeal.com/_next/static/media/zeal-by-puzzl.9dc9cf8e.svg"
        alt="Zeal logo"
      />
      <StyledUl>
        <>Why Zeal</>
        <StyledLi>Platform </StyledLi>
        <StyledLi>Solutions </StyledLi>
        <StyledLi>Developers </StyledLi>
        <StyledLi>Resources </StyledLi>
      </StyledUl>
    </StyledNav>
  )
}
