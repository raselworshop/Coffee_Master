import {  createBrowserRouter,  } from "react-router-dom";
import AddCoffee from "../component/AddCoffee";
import UpdateCoffee from "../component/UpdateCoffee";
import Root from "../MainLayout/Root";
import SignIn from "../component/SignIn";
import SignUp from "../component/SignUp";
import Users from "../component/Users";

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
    },
    {
      path: 'signin',
      element: <SignIn></SignIn>
    },
    {
      path: 'signup',
      element: <SignUp></SignUp>
    },
    {
      path: 'users',
      element: <Users></Users>,
      loader: ()=> fetch('http://localhost:5000/users')
    }
  ]);

  export default router;