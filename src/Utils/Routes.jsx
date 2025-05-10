import Home from "../Pages/Private Pages/Home.jsx";
import PublicPage from "../Pages/Public Pages/PublicPage.jsx";
import { Navigate } from "react-router-dom";
import About from "../Pages/Private Pages/About.jsx";
import KTutorial from "../Pages/Private Pages/Karate/KTutorial.jsx";
import Contact from "../Pages/Private Pages/Information/Contact.jsx";
import PrivacyPolicy from "../Pages/Private Pages/Information/PrivacyPolicy.jsx";
import TermsOfService from "../Pages/Private Pages/Information/TermsOfService.jsx";
import AdminPage from "../Pages/Admin Pages/AdminPage.jsx";
import UsersControl from "../Pages/Admin Pages/Pages/UsersControl.jsx";
import KarateControl from "../Pages/Admin Pages/Pages/KarateControl.jsx";
import AdminHomePage from "../Pages/Admin Pages/Pages/Admin Home Page.jsx";

export const PUBLIC_PAGE = '/publicPage';
export const HOME_PAGE = '/';
export const ABOUT_PAGE = '/about';
export const KTUTORIAL_PAGE = '/ktutorial';
export const CONTACT_PAGE = '/contact';
export const PRIVACY_POLICY_PAGE = '/privacyPolicy';
export const TERMS_OF_SERVICE_PAGE = '/termsOfService';
export const ADMIN_PAGE = '/admin/:page';
export const USERS_CONTROL_PAGE = '/usersControl';
export const KARATE_CONTROL_PAGE = '/karateControl';
export const ADMIN_HOME_PAGE = '/adminHomePage';
export const publicRoutes = [
    { path: PUBLIC_PAGE, element: <PublicPage />, name: 'PublicPage' },
    { path: '*', element: <Navigate to={PUBLIC_PAGE} /> },
];

export const privateRoutes = [
    { path: HOME_PAGE, element: <Home />, name: 'Home', menu: true },
    { path: ABOUT_PAGE, element: <About />, name: 'About', menu: true },
    { path: KTUTORIAL_PAGE, element: <KTutorial />, name: 'Karate Tutorial', menu: true },
    { path: CONTACT_PAGE, element: <Contact />, name: 'Contact' },
    { path: PRIVACY_POLICY_PAGE, element: <PrivacyPolicy />, name: 'Privacy Policy' },
    { path: TERMS_OF_SERVICE_PAGE, element: <TermsOfService />, name: 'Terms of Service' },
    { path: '*', element: <Navigate to={HOME_PAGE} /> },
];

export const adminRoutes = [
    { path: ADMIN_PAGE, element: <AdminPage />, name: 'Admin Page', page: 'admin' },
    {path: ADMIN_HOME_PAGE, element: <AdminHomePage/>, name: 'Admin Home Page', page: 'adminHome' },
    { path: USERS_CONTROL_PAGE, element: <UsersControl />, name: 'Users Control', page: 'usersControl' },
    { path: KARATE_CONTROL_PAGE, element: <KarateControl />, name: 'Karate Control', page: 'karateControl' },
    { path: '*', element: <Navigate to={'/admin/adminHome'} /> },
];