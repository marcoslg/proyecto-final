import { RouteObject } from "react-router-dom";
import Play from "views/Play";
import App from "../templates/App/App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <h2>home</h2> },
      { path: "play", element: <Play /> },
    ],
  },
];

export default routes;
