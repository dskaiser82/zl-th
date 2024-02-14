import express from "express"
import bodyParser from "body-parser"
import http from "http"
import cors from "cors" // Import CORS
import { createAndConnectToServer } from "./db"
import { searchMiddleware, recipeMiddleware } from "./routes"

const appStartup = async (): Promise<void> => {
  await createAndConnectToServer()
  const app = express()

  app.use(cors()) // Use CORS
  // add parsers for the body
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  // create our routes
  app.post("/api/search", searchMiddleware)
  // Assuming you want to add the recipeMiddleware as well
  app.get("/api/recipe/:id", recipeMiddleware) // Ensure you've implemented recipeMiddleware

  // create a server
  const httpServer = new http.Server(app)
  httpServer.listen(4000, "0.0.0.0", () => {
    console.log("now running on 4000")
  })
}

appStartup()
