import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { AppState } from "../../../store/reducers"
import * as actions from "../../../store/actions"
import { StyledInstructions, StyledFlexHero, Arrow, StyledH1 } from "./styles"
import { LinearProgress } from "@material-ui/core"
import { Page } from "../../Layout/Page"

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
    <Page>
      <a
        href="/"
        style={{ fontSize: "50px", textDecoration: "none", color: "black" }}
      >
        <Arrow>{"\u2190"}</Arrow>
      </a>
      <div>
        {recipeDetails?.name && (
          <div>
            <StyledH1> {recipeDetails?.name}</StyledH1>
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

            <StyledInstructions>
              {recipeDetails.instructions}
            </StyledInstructions>
          </div>
        )}
        {isLoading && <LinearProgress />}
      </div>
    </Page>
  )
}

export default Recipe
