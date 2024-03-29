import { IngredientListType, Recipe } from "../../types"
import { AppDispatch } from "./types"

export const GET_SEARCH = "GET_SEARCH"
export const RECEIVE_SEARCH = "RECEIVE_SEARCH"
export const FAIL_SEARCH = "FAIL_SEARCH"

const fetchingSearch = () => ({
  type: GET_SEARCH,
})

const fetchedSearch = (payload: Recipe[]) => ({
  type: RECEIVE_SEARCH,
  payload,
})

const failedSearch = (payload: Error) => ({
  type: FAIL_SEARCH,
  payload,
})

export const executeSearch = async (
  name: string,
  ingredients: IngredientListType[]
) => {
  return fetch("http://localhost:4000/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      ingredients,
    }),
  })
    .then((response) => response.json())
    .catch((err) => err)
}

export const searchRecipes = (
  name: string,
  ingredients: IngredientListType[]
) => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchingSearch())
    return executeSearch(name, ingredients)
      .then((res) => dispatch(fetchedSearch(res)))
      .catch((err) => dispatch(failedSearch(err)))
  }
}
