import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import Index from "./Components/Pages/Index/Index";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Movie from "./Components/Pages/Movie/Movie"
import Shows from './Components/Pages/Shows/Shows';
import People from './Components/Pages/People/People';
import More from './Components/Pages/More/More';



const root = ReactDOM.createRoot(
  document.getElementById("root"),
);

const main = [<Header/>,
              <Outlet/>,
              <Footer/>];

const router = createBrowserRouter([
  {
    path: "/",
    element: main,
    children: ([
      {
        path: "/",
        element: <Index/>,
      },
      {
        path: "/movie",
        element: <Movie/>
      },
      {
        path: "/shows",
        element: <Shows/>
      },
      {
        path: "/people",
        element: <People/>
      },
      {
        path: "/more",
        element: <More/>
      }
    ])
  }
])

root.render(
  <RouterProvider router={router}><App/></RouterProvider>
)
