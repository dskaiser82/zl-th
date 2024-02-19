import React, { useState, useEffect, ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { HomeWrapper } from "./styles"
import Input from "@material-ui/core/Input"
import Checkbox from "@material-ui/core/Checkbox"
import Card from "@material-ui/core/Card"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import * as actions from "../../actions"
import { AnyAction } from "redux"
import { AppState } from "../../reducers"
import {
  Ingredient,
  ingredientList,
  IngredientListType,
  Recipe,
} from "../../types"

const Home = () => {
  const [term, setTerm] = useState("")
  const [ingredients, setIngredients] = useState(["milk"])
  const dispatch: ThunkDispatch<AppState, null, AnyAction> = useDispatch()
  const { recipes, isLoading } = useSelector((state: AppState) => state.search)

  const fetchSearch = () => {
    dispatch(actions.searchRecipes(term, ingredients))
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const handleIngredient = (ingredient, event) => {
    if (event.target.checked) {
      setIngredients((prevIngredients) => [...prevIngredients, ingredient])
    } else {
      setIngredients((prevIngredients) =>
        prevIngredients.filter((item) => item !== ingredient)
      )
    }
  }

  return (
    <HomeWrapper>
      <Input
        autoFocus={true}
        fullWidth={true}
        placeholder="Search by recipe name"
        onChange={handleSearch}
        value={term}
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
              />
            }
            label={ingredient}
          />
        ))}
      </div>
      <Button onClick={fetchSearch}>search</Button>
      <Divider />
      {recipes && (
        <List>
          {recipes.map((recipe: Recipe) => (
            <div key={recipe._id}>
              <Card style={{ width: "300px", padding: "12px" }}>
                <h3>{recipe.name}</h3>
                <p>
                  {recipe.ingredients?.map((ing: Ingredient) => {
                    return <span key={ing._id}>{ing.name} </span>
                  })}
                </p>
              </Card>
            </div>
          ))}
        </List>
      )}
      {isLoading && <LinearProgress />}
      <Divider />
      {/* TODO: Add a recipe component here. */}
    </HomeWrapper>
  )
}

export default Home
