import { Request, Response } from "express"
import { Ingredient } from "../models"
import { RecipeModel } from "../models/recipe" // Adjust the import path as necessary

export const searchMiddleware = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, ingredients } = req.body

  let query: any = {}

  if (name) {
    query.name = new RegExp(escapeRegex(name), "i")
  }

  if (ingredients && Array.isArray(ingredients) && ingredients.length) {
    query["ingredients.name"] = { $all: ingredients }
  }

  // Execute the query
  try {
    const foundRecipes = await RecipeModel.find(query)
    res.json(foundRecipes)
  } catch (error) {
    console.error("Error fetching recipes:", error)
    res.status(500).send("Error fetching recipes")
  }
}

// Helper function to escape special characters in regex patterns
function escapeRegex(text: string): string {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
}
