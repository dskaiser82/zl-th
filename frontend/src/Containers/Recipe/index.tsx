import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { AppState } from "../../reducers"
import { HomeWrapper } from "../Home/styles"
import * as actions from "../../actions"
import { StyledInstructions, StyledFlexHero } from "./styles"
import { LinearProgress } from "@material-ui/core"

const Recipe = () => {
  const dispatch: ThunkDispatch<AppState, null, AnyAction> = useDispatch()
  const { recipeDetails, isLoading } = useSelector(
    (state: AppState) => state.recipe
  )
  const { id } = useParams()

  useEffect(() => {
    dispatch(actions.dispatchGetRecipe(id))
  }, [])

  return (
    <HomeWrapper>
      <a
        href="/"
        style={{ fontSize: "50px", textDecoration: "none", color: "black" }}
      >
        {"\u2190"}
      </a>
      {recipeDetails?.name && (
        <div>
          <h1> {recipeDetails?.name}</h1>
          <StyledFlexHero>
            <img
              style={{ width: "300px" }}
              src="https://theme-assets.getbento.com/sensei/74ec6d7.sensei/assets/images/catering-item-placeholder-704x520.png"
              alt="placeholder recipe food"
            />

            {recipeDetails?.ingredients.map((ing) => {
              return (
                <ul>
                  <li>
                    {ing.unit} of {ing.name} / {ing.amount} units
                  </li>
                </ul>
              )
            })}
          </StyledFlexHero>

          <StyledInstructions>{recipeDetails.instructions}</StyledInstructions>
        </div>
      )}

      {isLoading && <LinearProgress />}
    </HomeWrapper>
  )
}

export default Recipe
