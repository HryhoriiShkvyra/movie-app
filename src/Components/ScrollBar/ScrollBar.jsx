import React from "react";
import "./ScrollBar.css";
import Loading from "../Loading/Loading";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import { Link, useNavigate } from "react-router-dom";
import PendingIcon from "@mui/icons-material/Pending";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { FreeBreakfast } from "@mui/icons-material";

export default function ScrollBar({ scrollbarType, id, cleanedId, movieOrTv }) {
  const [indexPageTrendingItemsDay, setIndexPageTrendingItemsDay] =
    React.useState([]);
  const [indexPageTrendingItemsWeek, setIndexPageTrendingItemsWeek] =
    React.useState([]);
  const [data, setData] = React.useState();
  const [indexPagePopularItems, setIndexPagePopularItems] = React.useState([]);
  const [indexPageFreeItems, setIndexPageFreeItems] = React.useState([]);
  const [personFilmArray, setPersonFilmArray] = React.useState([]);
  const [tvCredits, setTvCredits] = React.useState([]);
  const [movieCredits, setMovieCredits] = React.useState([]);
  const [trendingBtn, setTrendingBtn] = React.useState("day");
  const [popularBtn, setPopularBtn] = React.useState("streaming");
  const [freeToWatchBtn, setFreeToWatchBtn] = React.useState("movies");
  const [isLoading, setIsLoading] = React.useState(null);
  const [personId, setPersonId] = React.useState();
  const [itemId, setItemId] = React.useState();
  const [test, setTest] = React.useState();

  const navigate = useNavigate();

  const fetch = require("node-fetch");

  const UrlTableForFetch = () => {
    let newUrl = "";

    const urlTable = () => {
      if (scrollbarType === "index-page-trending-day") {
        return (newUrl =
          process.env.REACT_APP_BASE_URL + "/trending/all/day?language=en-US");
      } else if (scrollbarType === "index-page-trending-week") {
        return (newUrl =
          process.env.REACT_APP_BASE_URL + "/trending/all/week?language=en-US");
      } else if (scrollbarType === "index-page-popular") {
        return (newUrl =
          process.env.REACT_APP_BASE_URL + "/trending/all/week?language=en-US");
      } else if (scrollbarType === "index-page-free") {
        return (newUrl =
          process.env.REACT_APP_BASE_URL + "/trending/all/week?language=en-US");
      }
    };

    urlTable();

    return newUrl;
  };

  const url = UrlTableForFetch();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TOKEN_v4,
    },
  };

  const FetchData = async () => {
    setIsLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setIsLoading((prev) => !prev);
      });
  };

  React.useEffect(() => {
    console.log(
      "everything looks like me need to use promise.all for all this requests. ok. I am must to ignore this error when something from it would not be able to fetch"
    );
  }, []);

  React.useEffect(() => {
    // console.log(FetchDataForEverything());
  }, []);

  const Person_url =
    // process.env.REACT_APP_BASE_URL + `person/${id}/movie_credits`;
    process.env.REACT_APP_BASE_URL + `person/550/movie_credits`;

  React.useEffect(() => {
    console.log(scrollbarType);
  }, []);
  // const fetchData = async () => {
  //   try {
  //     const promise_person_url = fetch(Person_url, options).then((response) =>
  //       response.json()
  //     );

  //     const results = await Promise.all([promise_person_url]);

  //     const data = results;

  //     setPersonFilmArray(data.cast);

  //     setIsLoading(true);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // I have data, which i recieve from server. this is severals data structures where is each is going to be setted by React.useState()

  const ScrollBarTypeFirst = ({ scrollbarTestType }) => {
    return (
      <div className="container-index-page">
        <div className="scroll-bar">
          {scrollbarTestType.results.map((item) => (
            <div key={item.id}>
              <div className="scroll-item-" key={item.id}>
                {item.title ? (
                  <div className="scrollbar-item">
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
                      // onClick={(e) => (
                      //   handleRedirectToMovie(e), handleGetTitle(e)
                      // )}
                    />
                    <PendingIcon className="card-icon" />
                    <div className="user-score-chart">
                      <span className="outer-circle">
                        <span className="outer-circle-number">
                          71 <span>%</span>{" "}
                        </span>
                      </span>
                    </div>
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
                    // onClick={(e) => (handleRedirectToTV(e), handleGetTitle(e))}
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
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ScrollbarTest = () => {
    if (scrollbarType === "index-page-trending-day") {
      return console.log(indexPageTrendingItemsDay);
      // return (
      //   <ScrollBarTypeFirst scrollbarTestType={indexPageTrendingItemsDay} />
      // );
    }
  };

  const ScrollBarTypeSecond = () => {
    return (
      <div className="scroll-bar">
        <div
          className="latest-trailers-background-image"
          // style={{ backgroundImage: `url("${backgroundImage}")` }}
          alt=""
        >
          <div className="latest-trailers">
            {/* <div className="latest-trailers-nav">
          <h2>latest trailers</h2>
          <div className="latest-trailers-btns">
            <button
              className={
                activeBtn === "popular"
                  ? "latest-trailers-btn-active"
                  : "latest-trailers-btn"
              }
              onClick={(e) => setActiveBtn("popular")}
            >
              <a>Popular</a>
            </button>
            <button
              className={
                activeBtn === "streaming"
                  ? "latest-trailers-btn-active"
                  : "latest-trailers-btn"
              }
              onClick={(e) => setActiveBtn("streaming")}
            >
              <a>Streaming</a>
            </button>
            <button
              className={
                activeBtn === "on-tv"
                  ? "latest-trailers-btn-active"
                  : "latest-trailers-btn"
              }
              onClick={(e) => setActiveBtn("on-tv")}
            >
              <a>On Tv</a>
            </button>
            <button
              className={
                activeBtn === "for-rent"
                  ? "latest-trailers-btn-active"
                  : "latest-trailers-btn"
              }
              onClick={(e) => setActiveBtn("for-rent")}
            >
              <a>For Rent</a>
            </button>
            <button
              className={
                activeBtn === "in-theaters"
                  ? "latest-trailers-btn-active"
                  : "latest-trailers-btn"
              }
              onClick={(e) => setActiveBtn("in-theaters")}
            >
              <a>In Theaters</a>
            </button>
          </div>
        </div> */}
            <div className="latest-trailers-cards">
              {personFilmArray.map((item) => (
                <div
                  className="latest-trailers-card"
                  key={item.title}
                  // onMouseEnter={setBackgroundImage(item.img)}
                  // onMouseLeave={onMouseLeave()}
                >
                  <div
                    className="latest-trailers-card-image-wrapper"
                    src=""
                    alt=""
                  >
                    {/* <div className="latest-trailers-card-image" /> */}
                    <img
                      className="latest-trailers-card-image"
                      src={item.img}
                      alt=""
                      // onClick={ClickTest}
                    />
                    <PendingIcon className="card-icon" />
                    <PlayArrowRoundedIcon className="card-play" />
                  </div>
                  <div className="latest-trailers-card-about">
                    <h2>{item.title}</h2>
                    <h3>{item.subTitle}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ScrollBarTypeThird = () => {
    return (
      <div className="card-cast-wrapper">
        <span className="card-cast-top">top billed cast</span>
        <div className="card-cast">
          {personFilmArray.slice(0, 9).map((item) => (
            // <div key={item.id} value={item.id} onClick={handlePersonId}>
            //   press here, in console you should see item-id
            // </div>
            <div
              className="card-cast-item"
              key={item.id}
              value={item.id}
              // onClick={handlePersonId}
            >
              <img
                className="card-cast-photo"
                src={
                  process.env.REACT_APP_IMAGE_URL + "w200" + item.profile_path
                }
                alt=""
              />
              <div className="card-cast-text">
                <div className="card-cast-name">{item.name}</div>
                <div className="card-cast-character">{item.character}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ScrollBarTypeFourth = () => {
    return (
      <div className="scroll-bar">
        {personFilmArray.map((item) => (
          <div className="scroll-bar-card-type-four" key={item.id}>
            <img
              className="scroll-bar-card-image-type-four"
              src={process.env.REACT_APP_IMAGE_URL + "w200" + item.poster_path}
              alt=""
            />
            <div className="scroll-bar-card-text">
              <h5>{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // const ScrollbarL = () => {
  //   if (scrollbarType === "index-page-trending") {
  //     return ScrollBarTypeFirst();
  //   }
  // };

  React.useEffect(() => {
    // console.log(FetchDataForEverything());
    // UrlTableForFetch();
    FetchData();
    // ScrollbarTest();

    // ScrollbarT5est();
    // scrollbarL();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <div>
          <ScrollbarTest />
          {/* <ScrollbarL /> */}
          {/* <h2> first variant</h2>

          <ScrollBarTypeFirst />

          <h2> second type </h2>

          <ScrollBarTypeSecond />

          <h2> third type </h2>

          <ScrollBarTypeThird />

          <h2> fourth type </h2>

          <ScrollBarTypeFourth /> */}
        </div>
      )}
    </>
  );
}
