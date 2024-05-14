import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SightseeingPage from "./pages/sightseeing/sightseeing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "example",
    element: <SightseeingPage />,
  },
  // {
  //   path: "packing",
  //   element: <PackingList />,
  // },
  // {
  //   path: "flights",
  //   element: <FlightInfo />,
  // },
  {
    path: "sightseeing",
    element: <SightseeingPage />,
      },
]);
