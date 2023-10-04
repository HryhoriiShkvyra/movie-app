import React from "react";
import "./ScrollBar.css";
import Loading from "../Loading/Loading";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import { Link, useNavigate } from "react-router-dom";
import Movie from "../Pages/Movie/Movie";
import PendingIcon from "@mui/icons-material/Pending";

export default function ScrollBar({ pageType, id, cleanedId, movieOrTv }) {
  const [trendingItemsDay, setTrendingItemsDay] = React.useState([]);
  const [trendingItemsWeek, setTrendingItemsWeek] = React.useState([]);
  const [personFilmArray, setPersonFilmArray] = React.useState([]);
  const [tvCredits, setTvCredits] = React.useState([]);
  const [movieCredits, setMovieCredits] = React.useState([]);
  const [trendingBtn, setTrendingBtn] = React.useState("day");
  const [isLoading, setIsLoading] = React.useState(null);
  const [personId, setPersonId] = React.useState();
  const [itemId, setItemId] = React.useState();

  const navigate = useNavigate();

  const fetch = require("node-fetch");

  const Trending_url_day =
    process.env.REACT_APP_BASE_URL + "/trending/all/day?language=en-US";
  const Trending_url_week =
    process.env.REACT_APP_BASE_URL + "/trending/all/week?language=en-US";
  const Person_url =
    process.env.REACT_APP_BASE_URL + `person/${id}/movie_credits`;
  const TV_credits_url =
    process.env.REACT_APP_BASE_URL + `tv/${id}/credits?language=en-US`;
  const Movie_credits_url =
    process.env.REACT_APP_BASE_URL + `movie/${id}/credits?language=en-US`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TOKEN_v4,
    },
  };

  React.useEffect(() => {
    console.log(pageType);
    console.log(cleanedId);
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const promise_trending_url_day = fetch(Trending_url_day, options).then(
        (response) => response.json()
      );

      const promise_trending_url_week = fetch(Trending_url_week, options).then(
        (response) => response.json()
      );

      const promise_person_url = fetch(Person_url, options).then((response) =>
        response.json()
      );

      const promise_tv_credits_url = fetch(TV_credits_url, options).then(
        (response) => response.json()
      );

      const promise_movie_credits_url = fetch(Movie_credits_url, options).then(
        (response) => response.json()
      );

      const results = await Promise.all([
        promise_trending_url_day,
        promise_trending_url_week,
        promise_person_url,
        promise_tv_credits_url,
        promise_movie_credits_url,
      ]);

      const data = results;

      console.log(data);

      setTrendingItemsDay(data[0].results);
      setTrendingItemsWeek(data[1].results);
      setPersonFilmArray(data[2].cast);
      setTvCredits(data[3].cast);
      setMovieCredits(data[4].cast);

      setIsLoading((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleGetTitle = (e) => {
    const itemId = e.target.getAttribute("gettitle");
    return console.log(itemId);
  };

  const handleRedirectToMovie = (e) => {
    e.preventDefault();
    const itemId = e.target.getAttribute("getid");
    // return console.log(itemId);
    return navigate(`/movie/${itemId}`);
  };

  const handleRedirectToTV = (e) => {
    e.preventDefault();
    const itemId = e.target.getAttribute("getid");
    // return console.log(itemId);
    return navigate(`/tv/${itemId}`);
  };

  const handleRedirectToActor = (e) => {
    const itemId = e.target.getAttribute("getid");
    return navigate(`/person/${itemId}`);
  };

  const ScrollBarWrapper = () => {
    const ScrollBarLogicIndexPage = () => {
      return (
        <div className="scroll-items-wrapper">
          {trendingBtn === "day" ? (
            <div className="scroll-items">
              {trendingItemsDay.map((item) => (
                <div className="scroll-item" key={item.id}>
                  {item.title ? (
                    <div>
                      <img
                        className="scroll-item-image"
                        src={
                          process.env.REACT_APP_IMAGE_URL +
                          `w200` +
                          item.poster_path
                        }
                        alt=""
                        getid={item.id}
                        gettitle={item.title}
                        onClick={(e) => (
                          handleRedirectToMovie(e), handleGetTitle(e)
                        )}
                      />
                      <PendingIcon className="card-icon" />
                    </div>
                  ) : (
                    <img
                      className="scroll-item-image"
                      src={
                        process.env.REACT_APP_IMAGE_URL +
                        `w200` +
                        item.poster_path
                      }
                      alt=""
                      getid={item.id}
                      gettitle={item.name}
                      onClick={(e) => (
                        handleRedirectToTV(e), handleGetTitle(e)
                      )}
                    />
                  )}
                  <div className="scroll-item-text">
                    <span className="scroll-item-title">
                      {item.name ? item.name : item.title}
                    </span>
                    <span className="scroll-item-date-release">
                      {item.release_date
                        ? item.release_date
                        : item.first_air_date}{" "}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="scroll-items">
              {trendingItemsWeek.map((item) => (
                <div className="scroll-item" key={item.id}>
                  <img
                    className="scroll-item-image"
                    src={
                      process.env.REACT_APP_IMAGE_URL +
                      `w200` +
                      item.poster_path
                    }
                    alt=""
                    getid={item.id}
                    onClick={(e) => handleRedirectToTV(e)}
                  />
                  <div className="scroll-item-text">
                    <span className="scroll-item-title">
                      {item.name ? item.name : item.title}
                    </span>
                    <span className="scroll-item-date-release">
                      {item.release_date
                        ? item.release_date
                        : item.first_air_date}{" "}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    };

    const ScrollBarLogicMTVPage = () => {
      return (
        <>
          {movieOrTv === "movie" ? (
            <div className="cast-wrapper">
              <span className="cast-top">top billed cast</span>
              <div className="cast">
                {movieCredits.slice(0, 8).map((item) => (
                  <div
                    className="cast-item"
                    key={item.id}
                    onClick={(e) => handleRedirectToActor(e)}
                  >
                    <img
                      className="cast-photo"
                      src={
                        process.env.REACT_APP_IMAGE_URL +
                        "w200" +
                        item.profile_path
                      }
                      getid={item.id}
                      alt=""
                    />
                    <div className="cast-text">
                      <div className="cast-name">{item.name}</div>
                      <div className="cast-character">{item.character}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="cast-wrapper">
              <span className="cast-top">top billed cast</span>
              <div className="cast">
                {tvCredits.slice(0, 8).map((item) => (
                  <div
                    className="cast-item"
                    key={item.id}
                    onClick={(e) => handleRedirectToActor(e)}
                  >
                    <img
                      className="cast-photo"
                      src={
                        process.env.REACT_APP_IMAGE_URL +
                        "w200" +
                        item.profile_path
                      }
                      getid={item.id}
                      alt=""
                    />
                    <div className="cast-text">
                      <div className="cast-name">{item.name}</div>
                      <div className="cast-character">{item.character}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      );
    };

    if (pageType === "index-page") {
      return (
        <div className="container">
          <div className="scroll-text">
            <div className="scroll-title">Trending</div>
            <div className="scroll-type">
              <button
                onClick={(e) => setTrendingBtn("day")}
                className={
                  trendingBtn === "day"
                    ? "scroll-type-btn-active"
                    : "scroll-type-btn"
                }
              >
                Today
              </button>
              <button
                onClick={(e) => setTrendingBtn("week")}
                className={
                  trendingBtn === "week"
                    ? "scroll-type-btn-active"
                    : "scroll-type-btn"
                }
              >
                This Week
              </button>
            </div>
          </div>
          <ScrollBarLogicIndexPage />
        </div>
      );
    } else if (pageType === "mtv-actors") {
      return (
        <div className="container">
          <ScrollBarLogicMTVPage />
        </div>
      );
    }
  };

  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className="scroll-bar">
          <ScrollBarWrapper />
        </div>
      )}
    </>
  );
}
