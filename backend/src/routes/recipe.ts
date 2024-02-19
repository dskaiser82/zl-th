import { RecipeModel } from "../models"

export const recipeMiddleware = async (
  req: Request,
  res: Response
): Promise<void> => {
  const recipeId = "000000000000000000000001"

  try {
    const recipes = await RecipeModel.findOne({ _id: recipeId })
    console.log("Recipes found:", recipes)
    res.json(recipes) // Send the found recipes as the response
  } catch (error) {
    console.error("Error fetching recipes:", error)
    res.status(500).send("Error fetching recipes")
  }
}
