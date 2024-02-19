import { IngredientListType, Recipe } from "../types"
import { AppDispatch } from "./types"

export const GET_RECIPE = "GET_RECIPE"
export const RECEIVE_RECIPE = "RECEIVE_RECIPE"
export const FAIL_RECIPE = "FAIL_RECIPE"

const fetchingRecipe = () => ({
  type: GET_RECIPE,
})

const fetchedRecipe = (payload: Recipe[]) => ({
  type: RECEIVE_RECIPE,
  payload,
})

const failedRecipe = (payload: Error) => ({
  type: FAIL_RECIPE,
  payload,
})

export const getRecipeDetails = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:4000/api/recipe/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      throw new Error("Network response was not ok.")
    }
    return await response.json()
  } catch (err) {
    throw err // Rethrow to ensure the promise is rejected
  }
}
export const dispatchGetRecipe = (id?: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchingRecipe())
    try {
      const res = await getRecipeDetails(id)
      dispatch(fetchedRecipe(res))
    } catch (err) {
      dispatch(
        failedRecipe(
          err instanceof Error ? err : new Error("An error occurred")
        )
      )
    }
  }
}
