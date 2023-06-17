import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "../app";
import {Planner} from "../entities/planner";

const Routes = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Planner/>
      }
    ]
  }
])

export const App = () => <RouterProvider router={ Routes }/>