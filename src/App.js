import React from "react";
import "./Components/Style/Index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Index from "./Components/Pages/Index/Index";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Movie from "./Components/Pages/Movie/Movie";
import TV from "./Components/Pages/TV/TV";
import People from "./Components/Pages/People/People";
import More from "./Components/Pages/More/More";
import SearchPage from "./Components/Search/SearchPage/SearchPage";
import MTVPage from "./Components/MTV/MTVPage/MTVPage";
import CastPage from "./Components/Cast/CastPage/CastPage";
import PersonPage from "./Components/Person/PersonPage/PersonPage";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Index />,
        },
        {
          path: "/movie",
          element: <Movie />,
          children: [
            {
              path: "/movie/",
            },
          ],
        },
        {
          path: "/tv",
          element: <TV />,
        },
        {
          path: "/people",
          element: <People />,
        },
        {
          path: "/more",
          element: <More />,
        },
        {
          path: "/search/:searchValue",
          element: <SearchPage />,
        },
        // {
        //   path: "/search/:searchValue/:id",
        //   element: <MTVPage />,
        // },
        {
          path: "/:requestType/:id",
          element: <MTVPage />,
        },
        {
          path: "/people/:searchValue/:id",
          element: <MTVPage />,
        },
        {
          path: "/search/:searchValue/:id/cast",
          element: <CastPage />,
        },
        {
          path: "/person/:id",
          element: <PersonPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
