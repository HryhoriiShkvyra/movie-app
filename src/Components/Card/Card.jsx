import React from "react";
import "./Card.css";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CardPage from "../CardPageFolder/CardPage/CardPage";
import CardPageCard from "../CardPageFolder/CardPageCard/CardPageCard";

export default function Card(pageValue) {
  const [value, setValue] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [pageValueState, setPageValueState] = React.useState();

  const navigate = useNavigate();

  const pageRequestValue = () => {};

  const handlePageValue = () => {
    if (pageValue.pageValue === "Popular Movies") {
      return setPageValueState("movie/popular");
    } else if (pageValue.pageValue === "Now Playing Movies") {
      return setPageValueState("movie/now_playing");
    } else if (pageValue.pageValue === "Upcoming Movies") {
      return setPageValueState("movie/upcoming");
    } else if (pageValue.pageValue === "Top Rated Movies") {
      return setPageValueState("movie/top_rated");
    } else if (pageValue.pageValue === "Popular TV Shows") {
      return setPageValueState("tv/popular");
    } else if (pageValue.pageValue === "TV Shows Airing Today") {
      return setPageValueState("tv/airing_today");
    } else if (pageValue.pageValue === "Currently Airing TV Shows") {
      return setPageValueState("tv/on_the_air");
    } else if (pageValue.pageValue === "Top Rated TV Shows") {
      return setPageValueState("tv/top_rated");
    }
  };

  React.useState(() => {
    console.log(pageValue);
    handlePageValue();
    // console.log(pageValueState);
  }, [pageValue]);

  const fetch = require("node-fetch");

  const url = `https://api.themoviedb.org/3/${pageValueState}?language=en-US&page=1`;

  React.useEffect(() => {
    console.log(
      `https://api.themoviedb.org/3/${pageValueState}?language=en-US&page=1`
    );
  }, [pageValue]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0",
    },
  };

  const fetchData = () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setValue(data);
        console.log(data);
        handlePageValue();
        setIsLoading((prev) => !prev);
      })
      .catch((err) => console.error("error:" + err));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleRedirectToCard = (e) => {
    e.preventDefault();
    console.log(e.id);
    navigate(`/movie/${e.id}-${e.name}`);
  };

  const handleId = (e) => {
    console.log(e);
  };

  return (
    <>
      {isLoading ? (
        <div className="cards">
          {value.results.map((item) => (
            <Link
              className="card"
              key={item.id}
              to={`/movie/${item.id}-${item.name}`}
            >
              <div className="card-poster">
                <img
                  className="card-poster"
                  src={
                    process.env.REACT_APP_IMAGE_URL + "/w200" + item.poster_path
                  }
                  alt=""
                />
              </div>
              <div className="card-about">
                <div className="user-score-chart">
                  <span className="outer-circle">
                    <span className="outer-circle-number">
                      71 <span>%</span>{" "}
                    </span>
                  </span>
                </div>
                <div className="card-title">
                  {item.name ? (
                    <h3 className="card-title">{item.name}</h3>
                  ) : (
                    <h3 className="card-title">{item.title}</h3>
                  )}
                </div>
                <div className="card-release-date">
                  {item.first_air_date ? (
                    <p>{item.first_air_date}</p>
                  ) : (
                    <p>{item.release_date}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <>
          <Loading />
          No items were found that match your query
        </>
      )}
    </>
  );
}
