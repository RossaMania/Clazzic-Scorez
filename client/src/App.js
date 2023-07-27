import React from "react";
import Games from "./pages/Games";
import Home from "./pages/Home";
import Scores from "./pages/Scores";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/games",
        element: <Games />,
      },
      {
        path: "/scores",
        element: <Scores />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
