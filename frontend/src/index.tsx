import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { Provider as ReduxProvider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { configureStore } from "@reduxjs/toolkit"
import Home from "./components/Containers/Home"
import Recipe from "./components/Containers/Recipe"
import reducers from "./reducers"

const store = configureStore({
  reducer: reducers,
  // configureStore is newer and means we don't need to manually apply thunkMiddleware; included by default.
})
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recipe/:id",
    element: <Recipe />,
  },
])

const rootElement = document.getElementById("root")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <React.StrictMode>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </React.StrictMode>
  )
}
