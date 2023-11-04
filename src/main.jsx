import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Menu from './components/Menu/Menu';
import Services from './components/Services/Services';
import Offers from './components/Offers/offers';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path:'/menu',
        element:<Menu></Menu>
      },
      {
        path:'/services',
        element:<Services></Services>
      },
      {
        path:'/offers',
        element: <Offers></Offers>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
