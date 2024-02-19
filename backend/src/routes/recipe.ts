import { RecipeModel } from "../models"
import { Request, Response } from "express"

export const recipeMiddleware = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params

  console.log(req.params)

  try {
    const recipes = await RecipeModel.findOne({ _id: id })
    console.log("Recipes found:", recipes)
    res.json(recipes) // Send the found recipes as the response
  } catch (error) {
    console.error("Error fetching recipes:", error)
    res.status(500).send("Error fetching recipes")
  }
}
