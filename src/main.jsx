import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Movie from "./routes/movie";
import Login from "./routes/login";
import Signup from "./routes/singup";

// import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
        authBox: true,
      },
      {
        path: "/signup",
        element: <Signup />,
        authBox: true,
      },
      {
        path: "/movies/:movieId",
        element: <Movie />,
        authBox: false,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
