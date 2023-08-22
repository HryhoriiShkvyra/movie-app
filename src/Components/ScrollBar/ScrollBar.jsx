import React from "react";
import "./ScrollBar.css";
import Loading from "../Loading/Loading";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import { Link, useNavigate } from "react-router-dom";
import Movie from "../Pages/Movie/Movie";

export default function ScrollBar({ pageType, id }) {
  const [trendingItemsDay, setTrendingItemsDay] = React.useState([]);
  const [trendingItemsWeek, setTrendingItemsWeek] = React.useState([]);
  const [trendingBtn, setTrendingBtn] = React.useState("day");
  const [isLoading, setIsLoading] = React.useState(null);
  const [personFilmArray, setPersonFilmArray] = React.useState([]);
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
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TOKEN_v4,
    },
  };

  React.useEffect(() => {
    console.log(trendingBtn);
  }, [trendingBtn]);

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

      const results = await Promise.all([
        promise_trending_url_day,
        promise_trending_url_week,
        promise_person_url,
      ]);

      const data = results;

      console.log(data);

      setTrendingItemsDay(data[0].results);
      setTrendingItemsWeek(data[1].results);
      setPersonFilmArray(data[2].cast);
      setIsLoading((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleItemId = (e) => {
    const itemId = e.target.getAttribute("getId");
    // console.log(itemId);
    return navigate(<Movie itemId={itemId} />);
    // return navigate("/search");
  };

  const HandleTitleForRedirect = (e) => {
    const getTitle = e.target.getAttribute("getTitle");

    if (getTitle === null) {
      return navigate(`/tv`);
    } else {
      navigate(`/movie`);
    }

    return getTitle;
  };

  const ScrollBarWrapper = () => {
    const ScrollBarLogic = () => {
      return (
        <>
          {trendingBtn === "day" ? (
            <div className="scroll-items">
              {trendingItemsDay.map((item) => (
                <div className="scroll-item" key={item.id}>
                  <img
                    className="scroll-item-image"
                    src={
                      process.env.REACT_APP_IMAGE_URL +
                      `w200` +
                      item.poster_path
                    }
                    alt=""
                    getId={item.id}
                    getTitle={item.title}
                    onClick={(e) => (
                      handleItemId(e), HandleTitleForRedirect(e)
                    )}
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
                    getId={item.id}
                    onClick={handleItemId}
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
          <div className="scroll-items-wrapper">
            <ScrollBarLogic />
          </div>
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
