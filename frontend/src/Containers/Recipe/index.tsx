import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { HomeWrapper } from "../Home/styles"
import { buttonStyles, StyledDiv } from "./styles"

const Recipe = () => {
  const { id } = useParams()

  fetch(`http://localhost:4000/api/recipe/${id}`, {
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
