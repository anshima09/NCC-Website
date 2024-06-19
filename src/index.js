import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// redux store
import { Provider } from "react-redux";
import store from "./app/store";

// pages
import Signup from "./pages/Signup"
import AlumniRegister from "./pages/AlumniRegister"
import Uniform from "./pages/Uniform";
import Study from "./pages/Study";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Activities from "./pages/Activities"

// errors
import NotFound from "./errors/Error_404";
import NetworkIssue from "./errors/NetworkIssue";

//  Courses
import Drill from "./pages/Drill";
import Firing from "./pages/Firing";
import Flying from "./pages/Flying";
import Camp from "./pages/Camp";
import Aero from "./pages/Aero";
import Social from "./pages/Social";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: loader,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/Activities",
        element: <Activities />,
      },
      {
        path: "/Activities/Drill",
        element: <Drill />,
      },
      {
        path: "/Activities/Firing",
        element: <Firing />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/study",
        element: <Study />,
      },
      {
        path: "/AlumniRegister",
        element: <AlumniRegister />,
      },
      {
        path: "/uniform",
        element: <Uniform />,
      },
      {
        path: "/Activities/Flying",
        element: <Flying />,
      },{
        path: "/Activities/Camp",
        element: <Camp />,
      },{
        path: "/Activities/Social",
        element: <Social />,
      },{
        path: "/Activities/Aero",
        element: <Aero />,
      },
     
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      
    ],
  },
  
  {
    path: "/network",
    element: <NetworkIssue />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


