import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './compo/home/Home';
import Contact from './compo/contact/Contact';
import Mealdetail from './compo/mealdetail/Mealdetail';
import Notfound from './compo/error/Notfound'
import { data } from 'autoprefixer';
import Mainhome from './compo/main-home/Mainhome';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Notfound></Notfound>,
    children: [
      {
        path: '/',
        element: <Mainhome></Mainhome>,
        loader: () => fetch('/data.json')
      },
      {
        path: 'home/:mealDetailId', element: <Mealdetail></Mealdetail>, loader: ({ params }) => fetch(`/data-${params.mealDetailId}.json`)},
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {path:'*', element:<Notfound></Notfound>}

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
