import {  createBrowserRouter,  } from "react-router-dom";
import AddCoffee from "../component/AddCoffee";
import UpdateCoffee from "../component/UpdateCoffee";
import Root from "../MainLayout/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    },
    {
        path: 'addcoffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: 'updatecoffee',
        element: <UpdateCoffee></UpdateCoffee>
    }
  ]);

  export default router;