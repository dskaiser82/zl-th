import { Request, Response } from "express"
import { RecipeModel } from "../models"

const fetchAllRecipes = async () => {
  try {
    const recipes = await RecipeModel.find({})
    return recipes
  } catch (error) {
    console.error("Error fetching recipes:", error)
  }
}

export const allRecipeMiddleware = async (
  req: Request,
  res: Response
): Promise<void> => {
  // res.send(builtRecipes)
  res.send(await fetchAllRecipes())
}
