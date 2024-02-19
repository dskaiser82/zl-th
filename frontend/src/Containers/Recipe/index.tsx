import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { AppState } from "../../reducers"
import { HomeWrapper } from "../Home/styles"
import * as actions from "../../actions"
import { buttonStyles, StyledDiv } from "./styles"

const Recipe = () => {
  const dispatch: ThunkDispatch<AppState, null, AnyAction> = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(actions.dispatchGetRecipe(id))
  }, [])

  // fetch(`http://localhost:4000/api/recipe/${id}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((res) => console.log(res))

  return (
    <HomeWrapper>
      <StyledDiv className={buttonStyles}>Im a recipe</StyledDiv>
    </HomeWrapper>
  )
}

export default Recipe
