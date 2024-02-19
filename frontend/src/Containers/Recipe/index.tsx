import React, { useState, useEffect } from "react"
import { HomeWrapper } from "../Home/styles"
import { buttonStyles, StyledDiv } from "./styles"

const Recipe = () => {
  return (
    <HomeWrapper>
      <StyledDiv className={buttonStyles}>Im a recipe</StyledDiv>
    </HomeWrapper>
  )
}

export default Recipe
