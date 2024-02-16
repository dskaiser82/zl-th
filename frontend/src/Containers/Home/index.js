import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HomeWrapper } from "./styles"
import Input from "@material-ui/core/Input"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import LinearProgress from "@material-ui/core/LinearProgress"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import * as actions from "../../actions"

const ingredientList = ["flour", "sugar", "salt", "butter", "milk"]

const Home = () => {
  const [term, setTerm] = useState("")
  const [ingredients, setIngredients] = useState(["milk"])
  const dispatch = useDispatch()
  const { recipes, isLoading } = useSelector((state) => state.search)

  const fetchSearch = () => {
    // TODO: Implement the fetching logic here
    // You might want to dispatch an action to fetch recipes
    // e.g., dispatch(actions.searchRecipes(term, ingredients));

    fetch("http://localhost:4000/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ["milk"],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error))
  }

  const handleSearch = (event) => {
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

  useEffect(() => {
    fetch("http://localhost:4000/api/all-recipes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error))
  }, [])

  return (
    <HomeWrapper>
      <Input
        autoFocus={true}
        fullWidth={true}
        onChange={handleSearch}
        value={term}
      />
      <div>
        <h3>Ingredients on hand</h3>
        {ingredientList.map((ingredient) => (
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
          {recipes.map((recipe) => (
            <ListItem key={recipe.id}>
              <ListItemText primary={recipe.name} />
            </ListItem>
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
