import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/(landingPage)/Home";
import LandingPageLayout from "./pages/(landingPage)/landingPageLayout";
import About from "./pages/(landingPage)/About";
import AuthComponent from "./pages/(auth)/AuthComponent";
import Login from "./pages/(auth)/Login";
import Register from "./pages/(auth)/Register";

export const router = createBrowserRouter([
       {
         path: '/',
        Component: LandingPageLayout,
        children:[
            {index: true, Component: Home},
            {path: 'about', Component: About}
        ]

       },
    
       {
        path: '/auth',
        Component: AuthComponent,
        children:[
            {index: true, Component: Login},
            {path: 'register', Component: Register}
        ]
       }
    ])