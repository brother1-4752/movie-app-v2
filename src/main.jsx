import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Movie from "./routes/movie";
import Login from "./routes/login";
import Signup from "./routes/singup";

const Authorization = ({ children }) => {
  const { isLogged, routeToLoginPage } = useLoginState();

  if (!isLogged) {
    routeToLoginPage();

    return <>로그인 페이지로 이동합니다...</>;
  }

  return <>{children}</>;
};

const RouterInfo = [
  {
    path: "/",
    element: <Root />,
    withAuthorization: true,
    label: "홈",
  },
  {
    path: "/login",
    element: <Login />,
    withAuthorization: true,
  },
  {
    path: "/signup",
    element: <Signup />,
    withAuthorization: true,
  },
];

export const ReactRouterObject = createBrowserRouter(
  RouterInfo.map((routerInfo) => {
    return routerInfo.withAuthorization
      ? {
          path: routerInfo.path,
          element: (
            <Authorization currentPath={routerInfo.path.replace(/\/\*$/g, "")}>
              {routerInfo.element}
            </Authorization>
          ),
        }
      : {
          path: routerInfo.path,
          element: routerInfo.element,
        };
  })
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     // errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/login",
//         element: <Login />,
//         authBox: true,
//       },
//       {
//         path: "/signup",
//         element: <Signup />,
//         authBox: true,
//       },
//       {
//         path: "/movies/:movieId",
//         element: <Movie />,
//         authBox: false,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={ReactRouterObject} />
  </React.StrictMode>
);
