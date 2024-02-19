import React, { useState, useEffect } from "react"
import { HomeWrapper } from "../Home/styles"
import { buttonStyles, StyledDiv } from "./styles"

const Recipe = () => {
  fetch("http://localhost:4000/api/recipe/test", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((res) => console.log(res))

  return (
    <HomeWrapper>
      <StyledDiv className={buttonStyles}>Im a recipe</StyledDiv>
    </HomeWrapper>
  )
}

export default Recipe
