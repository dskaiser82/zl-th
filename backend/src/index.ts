import express from "express"
import bodyParser from "body-parser"
import http from "http"
import cors from "cors"
import path from "path"
import { createAndConnectToServer } from "./db"
import { searchMiddleware, recipeMiddleware } from "./routes"
import { allRecipeMiddleware } from "./routes/getAllRecipes"

const appStartup = async (): Promise<void> => {
  await createAndConnectToServer()
  const app = express()

  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  // Define API routes
  app.post("/api/search", searchMiddleware)
  app.get("/api/all-recipes", allRecipeMiddleware)
  app.get("/api/recipe/:id", recipeMiddleware)

  // Serve static files from the React app's build directory
  app.use(express.static(path.join(__dirname, "build")))

  // Catchall handler for client-side routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
  })

  // Listen on port 4000
  const httpServer = new http.Server(app)
  httpServer.listen(4000, "0.0.0.0", () => {
    console.log("Server now running on port 4000")
  })
}

appStartup()
