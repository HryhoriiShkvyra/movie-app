import React from "react";
import "./Components/Style/Index.css"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import Index from "./Components/Pages/Index/Index";




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet/>,
      children: ([
        {
          path: "/",
          element: <Index/>
        }
      ])
    }
  ])



  return (
    <div className="App">
      

    

    </div>
  );
}

export default App;
