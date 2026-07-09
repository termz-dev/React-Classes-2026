import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/(landingPage)/Home";
import LandingPageLayout from "./pages/(landingPage)/landingPageLayout";
import About from "./pages/(landingPage)/About";
import AuthComponent from "./pages/(auth)/AuthComponent";
import Login from "./Pages/(auth)/Signin";
import Register from "./pages/(auth)/Register";
import Blogs from "./pages/(landingPage)/blogs";
import CreateBlog from "./pages/(landingPage)/blogs/CreateBlog";
import SingleBlog from "./pages/(landingPage)/blogs/SingleBlog";
import Cars from "./pages/(landingPage)/cars";
import SingleCar from "./pages/(landingPage)/cars/SingleCar";
import EditCar from "./pages/(landingPage)/cars/EditCar";
import EditBlog from "./pages/(landingPage)/blogs/EditBlog";
import FormComponnt from "./pages/(landingPage)/form";
import Celebrities from "./pages/(landingPage)/celebrities";
import SearchCar from "./pages/(landingPage)/cars/SearchCar";
import Signin from "./Pages/(auth)/Signin";
import Dashboard from "./Pages/dashboard";
import CreateCeleb from "./Pages/(landingPage)/celebrities/CreateCeleb";
import SingleCeleb from "./Pages/(landingPage)/celebrities/SingleCeleb";
import EditCeleb from "./Pages/(landingPage)/celebrities/EditCeleb";

export const router = createBrowserRouter([
       {
         path: '/',
        Component: LandingPageLayout,
        children:[
            {index: true, Component: Home},
            {path: 'about', Component: About},
            {path: 'blogs', Component: Blogs},
            {path: "blogs/:id", Component: SingleBlog },
            {path: 'create-blog', Component: CreateBlog},
            {path: 'blogs/:id/edit', Component: EditBlog},
            {path: 'cars', Component: Cars},
            {path: '/cars', Component: SearchCar },
            {path: 'cars/:id', Component: SingleCar},
            {path: 'cars/:id/edit', Component: EditCar},
            {path: 'form', Component: FormComponnt},
            {path: 'celebs', Component: Celebrities},
            {path: 'celebs/:id', Component: SingleCeleb},
            {path: 'celebs/:id/edit', Component: EditCeleb},
            {path: 'dashboard', Component: Dashboard},
            {path: 'create-celeb', Component: CreateCeleb}

        ]

       },
    
       {
        path: '/auth',
        Component: AuthComponent,
        children:[
            {index: true, Component: Login},
            {path: 'register', Component: Register},
            {path: 'signin', Component: Signin}
        ]
       }
    ])