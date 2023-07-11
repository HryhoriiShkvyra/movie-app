import React from "react";
import "./Components/Style/Index.css"
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
import SearchPage from "./Components/Search/SearchPage/SearchPage";
import CardPage from "./Components/Card/CardPage/CardPage";
import CastPage from "./Components/Cast/CastPage/CastPage";


function App() {


  
  const  Layout = () => {
    return(
      <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
     
    )
  }
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
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
      },
      {
        path: "/search/:searchValue",
        element: <SearchPage/>,
      },
      {
        path: "/search/:searchValue/:id",
        element: <CardPage/>
      },
      {
        path: "/search/:searchValue/:id/cast",
        element:<CastPage/>
      },
    ])
  }
])



  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
