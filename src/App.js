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
        path: "/search/:id",
        element: <SearchPage/>,
      },
      {
        path: "/search/:id/item/:id",
        element: <CardPage/>
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
