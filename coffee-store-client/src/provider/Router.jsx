import {  createBrowserRouter,  } from "react-router-dom";
import AddCoffee from "../component/AddCoffee";
import UpdateCoffee from "../component/UpdateCoffee";
import Root from "../MainLayout/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      loader: ()=> fetch('http://localhost:5000/coffee'),
    },
    {
        path: 'addcoffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: 'updatecoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
    }
  ]);

  export default router;