import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Authorization from "./components/authorization";

// 라우터 한번에 관리
const RouterInfo = [
  {
    path: "/",
    element: <Home />,
    /* 로그인시 : profile, 즐겨찾기 추가한 목록 보여주는 페이지 등등 유저에 대한 권한 부여 가능 */
    withAuthorization: true,
    label: "홈",
  },
];

// Auth필요한 라우트에는 검증단계로 AuthContainer를 씌운다
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
