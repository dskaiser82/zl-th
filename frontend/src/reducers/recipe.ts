import { GET_RECIPE, RECEIVE_RECIPE, FAIL_RECIPE } from "../actions"
import { Recipe } from "../types"

type InitialState = {
  recipeDetails: null | Recipe
  isLoading: boolean
  error: null | Error
}

const initialState: InitialState = {
  recipeDetails: null,
  isLoading: false,
  error: null,
}

const recipeFetching = (state: InitialState) => {
  return { ...state, isLoading: true }
}

const recipeFetched = (state: InitialState, payload: Recipe) => {
  return { ...state, isLoading: false, recipeDetails: payload }
}

const recipeFailed = (state: InitialState, payload: Error) => {
  return { ...state, isLoading: false, error: payload }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPE:
      return recipeFetching(state)
    case RECEIVE_RECIPE:
      return recipeFetched(state, payload)
    case FAIL_RECIPE:
      return recipeFailed(state, payload)
    default:
      return state
  }
}
