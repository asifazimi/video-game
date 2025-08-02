import { createBrowserRouter } from "react-router-dom";
import GameDetail from "./pages/GameDetail";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "games/:id",
        element: <GameDetail />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
export default router;
