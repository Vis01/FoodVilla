import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
//import About from "./src/components/About";
import Error from "./src/components/Error";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";
import RestaurentMenu from "./src/components/RestaurentMenu";

const About = lazy(()=> import("./src/components/About"));
const App=()=>{
     return (
        <div>
        <Header/>
        <Outlet/>
        <Footer/>
        </div>  
        
    );
};
const appRouter=createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/about",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                             <About/> 
                         </Suspense> 
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path: "/restaurent/:resid",
                element:< RestaurentMenu/>
            }
        ],
        errorElement:<Error/>
    },
        
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);