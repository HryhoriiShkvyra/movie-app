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
import CardPage from "./Components/CardPageFolder/CardPage/CardPage";
import CrewPage from "./Components/Crew/CrewPage/CrewPage";
import CardPageCard from "./Components/CardPageFolder/CardPageCard/CardPageCard";
import PersonPage from "./Components/Person/PersonPage/PersonPage";
import MovieWrapper from "./Components/MovieWrapper/MovieWrapper";

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

  console.log(
    'git commit -m "In a case of it, I must push everything to github"'
  );

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
              path: "/movie/now-paying",
              element: <MovieWrapper />,
            },
            {
              path: "/movie/upcoming",
              element: <MovieWrapper />,
            },
            {
              path: "/movie/top-rated",
              element: <MovieWrapper />,
            },
            // {
            //   path: "/movie/:id",
            //   element: <CardPage />,
            // },
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
        //   element: <CardPage />,
        // },
        {
          path: "/:requestType/:id",
          element: <CardPage />,
        },
        {
          path: "/people/:searchValue/:id",
          element: <CardPage />,
        },
        {
          path: "/search/:searchValue/:id/cast",
          element: <CrewPage />,
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
