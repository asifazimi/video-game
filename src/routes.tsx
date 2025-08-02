import { createBrowserRouter } from "react-router-dom";
import GameDetail from "./pages/GameDetail";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

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
    ],
  },
]);
export default router;
