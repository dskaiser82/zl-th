export type Ingredient = {
  _id: string
  name: string
  unit: string
  amount: number
}

export type Recipe = {
  _id: string
  name: string
  instructions: string
  ingredients: Ingredient[]
}

export const ingredientList = [
  "flour",
  "sugar",
  "salt",
  "butter",
  "milk",
] as const
export type IngredientListType = typeof ingredientList[number]
