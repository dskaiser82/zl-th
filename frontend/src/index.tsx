import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { Provider as ReduxProvider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { configureStore } from "@reduxjs/toolkit"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import Home from "./Containers/Home"
import Recipe from "./Containers/Recipe"
import reducers from "./reducers"

// @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// TODO:
const store = configureStore({
  reducer: reducers, // Your root reducer
  // You don't need to manually apply thunkMiddleware; it's included by default.
  // If you have additional middleware, you can add them in the middleware array.
})
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recipe",
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
