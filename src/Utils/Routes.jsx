import Home from "../Pages/Private Pages/Home.jsx";
import PublicPage from "../Pages/Public Pages/PublicPage.jsx";
import {Navigate} from "react-router-dom";
import About from "../Pages/Private Pages/About.jsx";



export const PUBLIC_PAGE = '/publicPage'
export const HOME_PAGE = '/'
export const ABOUT_PAGE = '/about'

export const publicRoutes = [
    {path: PUBLIC_PAGE, element: <PublicPage />, name: 'PublicPage'},
    {path: '*', element: <Navigate to={PUBLIC_PAGE} />}
]

export const privateRoutes = [
    {path: HOME_PAGE, element: <Home />, name: 'Home'},
    {path: ABOUT_PAGE, element: <About />, name: 'About'},
    {path: '*', element: <Navigate to={HOME_PAGE} />}
]