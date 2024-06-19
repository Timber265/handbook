import { createBrowserRouter } from "react-router-dom";
import Root from '../routes/Root'
import MainPage from '../pages/MainPage'
import AboutPage from "../pages/AboutPage";
import NotFound from "../components/helper/NotFound";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);