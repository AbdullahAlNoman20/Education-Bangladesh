import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import Error from "./Components/Error";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Components/Providers/AuthProviders";
import ProtectedRoute from "./Components/ProtectedRoute";
import SpotDetails from './Components/SpotDetails';
import Contact from './Components11/Contact';
import AboutUs from './Components11/AboutUs';
import S_Dashboard from './Components12/S_Dashboard';
import AllUsers from './Components12/AllUsers';
import Courses from './Components12/Courses';
import Materials from './Components12/Materials';
import T_Dashboard from './Components12/T_Dashboard';
import Notes from './Components12/Notes';
import UploadMaterials from './Components12/UploadMaterials';
import SessionCreate from './Components12/SessionCreate';
import A_Dashboard from './Components12/A_Dashboard';
import BookedSession from './Components12/BookedSession';
import CreateNote from './Components12/CreateNote';
import MngNote from './Components12/MngNote';
import StudySessionRequest from './Components12/StudySessionRequest';
import StudayMaterialForStudent from './Components12/StudayMaterialForStudent';
import UpdateNote from './Components12/UpdateNote';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Contact",
        element:<Contact></Contact>,
      },
      // {
      //   path: "/Review",
      //   element: <About></About>,
      //   loader: ()=>fetch('https://mountrideserver.vercel.app/spot')
      // },
      {
        path: "/AboutUs",
        element: <AboutUs></AboutUs>,
        // loader: ()=>fetch('https://mountrideserver.vercel.app/spot')
      },
      // {
      //   path: "/login",
      //   element: <Login></Login>,
      // },
      // {
      //   path: "/register",
      //   element: <Register></Register>,
      // },
      {
        path: "/s_dashboard",
        element: <ProtectedRoute><S_Dashboard></S_Dashboard></ProtectedRoute>,
        children: [
          {
            index: true,
            element: <AllUsers></AllUsers>,
          },
          {
            path: "courses",
            element: <Courses></Courses>,
          },
          {
            path: "materials",
            element: <Materials></Materials>,
          },
        ]
      },
      {
        path: "/t_dashboard",
        element: <ProtectedRoute><T_Dashboard></T_Dashboard></ProtectedRoute>,
        children: [
          {
            path: "create",
            element: <SessionCreate></SessionCreate>,
          },
          {
            path: "courses",
            element: <StudySessionRequest></StudySessionRequest>,
            loader: () => fetch('http://localhost:5000/sessions')
          },
          {
            path: "Upload_Materials",
            element: <UploadMaterials></UploadMaterials>,
          },
          {
            path: "materials",
            element: <Materials></Materials>,
          },
          {
            path: "notes",
            element: <Notes></Notes>,
            loader: () => fetch('http://localhost:5000/nots')
          },
        ]
      },
      {
        path: "/a_dashboard",
        element: <ProtectedRoute><A_Dashboard></A_Dashboard></ProtectedRoute>,
        children: [
          {
            path: "BookedSession",
            element: <BookedSession></BookedSession>,
          },
          {
            path: "CreateNote",
            element: <CreateNote></CreateNote>,
          },
          {
            path: "mngNote",
            element: <MngNote></MngNote>,
            loader: () => fetch('http://localhost:5000/nots')
          },
          {
            path: "/a_dashboard/update/:id",
            element: <UpdateNote></UpdateNote>,
            loader: ({params}) => fetch(`http://localhost:5000/nots/${params.id}`)
          },
          {
            path: "materials",
            element: <StudayMaterialForStudent></StudayMaterialForStudent>,
          },
        ]
      },
      {
        path: "/spotDetails/:id",
        element: <ProtectedRoute><SpotDetails></SpotDetails></ProtectedRoute>,
        loader: ()=>fetch('/Country.json')
        // loader: ()=>fetch(`https://mountrideserver.vercel.app/courses/${params.id}`)
      },
      
    ],
    
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  } 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProviders>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
  
);
