import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Smartphones from "./pages/Smartphones/Smartphones"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "smartphones",
    element: <Smartphones />,
  },
  {
    path: "/",
    element: <Home />,
  }
]);

function App() {
  return (
    <div id="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;