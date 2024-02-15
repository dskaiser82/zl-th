import express from "express"
import bodyParser from "body-parser"
import http from "http"
import cors from "cors"
import { createAndConnectToServer } from "./db"
import { searchMiddleware, recipeMiddleware } from "./routes"
import { allRecipeMiddleware } from "./routes/getAllRecipes"

const appStartup = async (): Promise<void> => {
  await createAndConnectToServer()
  const app = express()

  app.use(cors())

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  app.post("/api/search", searchMiddleware)
  app.get("/api/all-recipes", allRecipeMiddleware)

  app.get("/api/recipe/:id", recipeMiddleware)

  const httpServer = new http.Server(app)
  httpServer.listen(4000, "0.0.0.0", () => {
    console.log("now running on 4000")
  })
}

appStartup()
