import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home.js";
import Menu from "../Pages/Shop/Menu.js";
import Signup from "../Components/Signup.js";
import PrivateRouter from "../Layout/PrivateRouter/PrivateRouter.js";
import UpdateProfile from "../Pages/Dashboard/UpdateProfile.js";
import CartPage from "../Pages/Shop/CartPage.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            }, {
                path: "/menu",
                element: <PrivateRouter><Menu /></PrivateRouter>
            }, {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/update-profile",
                element: <UpdateProfile />
            },
            {
                path: "/cart-page",
                element: <CartPage />
            }
        ]
    }
]);

export default router;
