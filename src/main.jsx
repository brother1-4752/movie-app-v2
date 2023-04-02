import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/home";
import Authorization from "./components/authorization";
import Login from "./routes/login";

const RouterInfo = [
  {
    path: "/",
    element: <Home />,
    withAuthorization: true,
    label: "홈",
  },
  {
    path: "/login",
    element: <Login />,
    withAuthorization: true,
  },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  //   withAuthorization: true,
  // },
];

const ReactRouterObject = createBrowserRouter(
  RouterInfo.map((routerInfo) => {
    return routerInfo.withAuthorization
      ? {
          path: routerInfo.path,
          element: <Authorization>{routerInfo.element}</Authorization>,
        }
      : {
          path: routerInfo.path,
          element: routerInfo.element,
        };
  })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={ReactRouterObject} />
  </React.StrictMode>
);
