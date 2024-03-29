import React, { useState, ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { CardLi, CardLink, CardTitle, CardUl, FlexContainer } from "./styles"
import Input from "@material-ui/core/Input"
import Checkbox from "@material-ui/core/Checkbox"
import Card from "@material-ui/core/Card"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"

import * as actions from "../../../store/actions"
import { AnyAction } from "redux"
import { AppState } from "../../../store/reducers"
import {
  Ingredient,
  ingredientList,
  IngredientListType,
  Recipe,
} from "../../../types"
import { Page } from "../../Layout/Page"

const Home = () => {
  const [term, setTerm] = useState("")
  const [ingredients, setIngredients] = useState<IngredientListType[]>(["milk"])
  const dispatch: ThunkDispatch<AppState, null, AnyAction> = useDispatch()
  const { recipes, isLoading } = useSelector((state: AppState) => state.search)

  const fetchSearch = () => {
    dispatch(actions.searchRecipes(term, ingredients))
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const handleIngredient = (
    ingredient: IngredientListType,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      setIngredients((prevIngredients) => [...prevIngredients, ingredient])
    } else {
      setIngredients((prevIngredients) =>
        prevIngredients.filter((item) => item !== ingredient)
      )
    }
  }

  return (
    <Page>
      <Input
        autoFocus={true}
        fullWidth={true}
        placeholder="Search for recipes"
        onChange={handleSearch}
        value={term}
        style={{
          borderBottom: "1px solid var(--first)",
          color: "var(--foreground)",
          fontSize: "60px",
        }}
      />
      <div>
        <h3>Ingredients on hand</h3>

        {ingredientList.map((ingredient: IngredientListType) => (
          <FormControlLabel
            key={ingredient}
            control={
              <Checkbox
                checked={ingredients.includes(ingredient)}
                onChange={(event) => handleIngredient(ingredient, event)}
                value={ingredient}
                style={{ color: "var(--palette-third)" }}
              />
            }
            label={ingredient}
          />
        ))}
      </div>
      <Button
        style={{
          backgroundColor: "var(--third)",
          color: "var(--background)",
        }}
        onClick={fetchSearch}
      >
        search
      </Button>
      <Divider />
      {recipes && (
        <FlexContainer>
          {recipes.map((recipe: Recipe) => (
            <CardLink href={`/recipe/${recipe._id}`} key={recipe._id}>
              <Card
                style={{
                  width: "300px",
                  padding: "20px",
                  margin: "12px",
                  border: "1px solid var(--foreground)",
                }}
              >
                <CardTitle>{recipe.name}</CardTitle>
                <CardUl>
                  {recipe.ingredients?.map((ing: Ingredient) => {
                    return <CardLi key={ing._id}>{ing.name} </CardLi>
                  })}
                </CardUl>
              </Card>
            </CardLink>
          ))}
        </FlexContainer>
      )}
      {isLoading && <LinearProgress />}
      <Divider />
    </Page>
  )
}

export default Home
