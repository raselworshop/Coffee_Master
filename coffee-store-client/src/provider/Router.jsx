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
      loader: ()=> fetch('https://coffee-store-server-liart-ten.vercel.app/coffee'),
    },
    {
        path: 'addcoffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: 'updatecoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=> fetch(`https://coffee-store-server-liart-ten.vercel.app/coffee/${params.id}`)
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
      loader: ()=> fetch('https://coffee-store-server-liart-ten.vercel.app/users')
    }
  ]);

  export default router;