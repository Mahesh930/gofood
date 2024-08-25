import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home.js";
import Menu from "../Pages/Shop/Menu.js";
import Signup from "../Components/Signup.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home/>
            },{
                path: "/menu",
                element: <Menu/>
            },{
                path: "/signup",
                element: <Signup/>
            }
        ]
    }
]);

export default router;
