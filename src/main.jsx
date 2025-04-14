import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import Calcs from './calcs.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './index.css'
import App from './App.jsx'
import Contact from './Contact.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    patch: "/calcs",
      element: <calcs/>
    
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Analytics/>
     <RouterProvider router={router} />
  </StrictMode>,
)