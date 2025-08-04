import Home from "@/features/home";
import Layout from "@/layouts/default";
import NotFound from "@/pages/not-found";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Alphabteical from "./features/bands/alphabteical";
import BandsByCountry from "./features/bands/country";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return {
        name: "Admin",
        role: "Administrator",
      };
    },
    id: "root",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "bands",
        children: [
          {
            path: "alphabetical",
            element: <Alphabteical />,
          },
          {
            path: "country",
            children: [
              {
                path: "",
                element: <BandsByCountry />,
              },
              {
                path: ":country",
                element: <Home />, // Placeholder for country-specific bands
              },
            ],
          },
          {
            path: "genre",
            element: <Home />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={browserRouter} />;
