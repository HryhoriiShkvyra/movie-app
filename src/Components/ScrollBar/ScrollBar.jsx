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






// ========================================



import React from "react";
import "./ScrollBar.css";
import Loading from "../Loading/Loading";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import { Link, useNavigate } from "react-router-dom";
import PendingIcon from "@mui/icons-material/Pending";
import { FreeBreakfast } from "@mui/icons-material";

export default function ScrollBar({ pageType, id, cleanedId, movieOrTv }) {
  const [trendingItemsDay, setTrendingItemsDay] = React.useState([]);
  const [trendingItemsWeek, setTrendingItemsWeek] = React.useState([]);
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

  const handleId = (id) => {
    let idWithLetters = id;
    // const onlyId = idWithLetters.replace(/\D/g, "");
    // let newId = onlyId;

    // for (let i = 0; i < id.length; i++) {
    //   if (!id[i].replace(/\D/g, "")) {
    //     newId += id[i];
    //   }
    // }
    // return onlyId;
  };


  // ==========================

  // console.log(handleId(id));

  // ==========================

  const fetch = require("node-fetch");

  // const Trending_url_day =
  //   process.env.REACT_APP_BASE_URL + "/trending/all/day?language=en-US";
  // const Trending_url_week =
    // process.env.REACT_APP_BASE_URL + "/trending/all/week?language=en-US";
  const Person_url =
    process.env.REACT_APP_BASE_URL + `person/${id}/movie_credits`;
  // const TV_credits_url =
  //   process.env.REACT_APP_BASE_URL + `tv/${id}/credits?language=en-US`;
  // const Movie_credits_url =
  //   process.env.REACT_APP_BASE_URL + `movie/${id}/credits?language=en-US`;

  // ==================

  // const handleTypeRequest = () => {
  //   let innerId = handleId(id);
  //   const TV_credits_url =
  //     process.env.REACT_APP_BASE_URL + `tv/${innerId}?language=en-US`;
  //   const Movie_credits_url =
  //     process.env.REACT_APP_BASE_URL + `movie/${innerId}?language=en-US`;
  // };

  // const fetchDataTypeReq = async () => {
  //   setIsLoading(true);
  //   async function getResponse() {
  //     try {
  //       const response = await fetch(TV_credits_url, options);
  //       if (!response.ok) {
  //         throw new Error("Request failed");
  //       }

  //       const data = await response.json();
  //       console.log("=>" + data);
  //       setTest(data);
  //     } catch (error) {
  //       const response = await fetch(Movie_credits_url, options);
  //       const data = await response.json();
  //       console.log(data);
  //       setTest(data);
  //     }
  //   }

  //   return getResponse();
  // };

  // React.useEffect(() => {
  //   fetchDataTypeReq();
  // }, []);

  // handleTypeRequest();

  // ==================

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TOKEN_v4,
    },
  };

  // fetch(`https://api.themoviedb.org/3/tv/94722?language=en-US`, options)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  // fetch(`https://api.themoviedb.org/3/movie/94722?language=en-US`, options)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

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

      // console.log(data);

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
    // return console.log(itemId);
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

  const ScrollBarLogicIndexPageTrending = () => {
    return (
      <div className="container-index-page">
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
                    onClick={(e) => (handleRedirectToTV(e), handleGetTitle(e))}
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
          <div className="container-index-page">
            {trendingItemsWeek.map((item) => (
              <div className="scroll-item" key={item.id}>
                <img
                  className="scroll-item-image"
                  src={
                    process.env.REACT_APP_IMAGE_URL + `w200` + item.poster_path
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

  React.useEffect(() => {
    // console.log(freeToWatchBtn);
  }, [freeToWatchBtn]);

  const ScrollBarLogicIndexPageFreeToWatch = () => {
    return (
      <div className="container-index-page">
        {freeToWatchBtn === "movies" ? (
          <div className="scroll-items">
            <h4>This panel didn't return any results. Try refreshing it.</h4>
          </div>
        ) : (
          <div className="container-index-page">
            {/* {trendingItemsWeek.map((item) => (
              <div className="scroll-item" key={item.id}>
                <img
                  className="scroll-item-image"
                  src={
                    process.env.REACT_APP_IMAGE_URL + `w200` + item.poster_path
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
            ))} */}
            <h4>not hehe</h4>
          </div>
        )}
      </div>
    );
  };

  const ScrollBarWrapper = () => {
    ScrollBarLogicIndexPageTrending();
    ScrollBarLogicIndexPageFreeToWatch();
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

    if (pageType === "index-page-trending") {
      return (
        <div className="container-index-page">
          <div className="scroll-text">
            <div className="scroll-title">Trending</div>
            <div className="scroll-type">
              <div
                onClick={(e) => setTrendingBtn("day")}
                className={
                  trendingBtn === "day"
                    ? "scroll-type-btn-active"
                    : "scroll-type-btn"
                }
              >
                <h3>
                  <a
                    className={
                      trendingBtn === "day"
                        ? "scroll-type-btn-anchor-active"
                        : "scroll-type-btn-anchor"
                    }
                  >
                    Today
                  </a>
                </h3>
              </div>
              <div
                onClick={(e) => setTrendingBtn("week")}
                className={
                  trendingBtn === "week"
                    ? "scroll-type-btn-active"
                    : "scroll-type-btn"
                }
              >
                <h3>
                  <a
                    className={
                      trendingBtn === "week"
                        ? "scroll-type-btn-anchor-active"
                        : "scroll-type-btn-anchor"
                    }
                  >
                    Week
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <ScrollBarLogicIndexPageTrending />
        </div>
      );
    } else if (pageType === "index-page-popular") {
      return (
        <div className="container-index-page">
          <div className="scroll-text">
            <div className="scroll-title">What's popular</div>
            <div className="scroll-type">
              <div
                onClick={(e) => setPopularBtn("streaming")}
                className={
                  popularBtn === "streaming"
                    ? "scroll-type-btn-active"
                    : "scroll-type-btn"
                }
              >
                <h3>
                  <a
                    className={
                      popularBtn === "streaming"
                        ? "scroll-type-btn-anchor-active"
                        : "scroll-type-btn-anchor"
                    }
                  >
                    Streaming
                  </a>
                </h3>
              </div>
              <div
                onClick={(e) => setPopularBtn("on-tv")}
                className={
                  popularBtn === "on-tv"
                    ? "scroll-type-btn-active"
                    : "scroll-type-btn"
                }
              >
                <h3>
                  <a
                    className={
                      popularBtn === "on-tv"
                        ? "scroll-type-btn-anchor-active"
                        : "scroll-type-btn-anchor"
                    }
                  >
                    On TV
                  </a>
                </h3>
              </div>
              <div
                onClick={(e) => setPopularBtn("for-rent")}
                className={
                  popularBtn === "for-rent"
                    ? "scroll-type-btn-active"
                    : "scroll-type-btn"
                }
              >
                <h3>
                  <a
                    className={
                      popularBtn === "for-rent"
                        ? "scroll-type-btn-anchor-active"
                        : "scroll-type-btn-anchor"
                    }
                  >
                    For Rent
                  </a>
                </h3>
              </div>
              <div
                onClick={(e) => setPopularBtn("in-theaters")}
                className={
                  popularBtn === "in-theaters"
                    ? "scroll-type-btn-active"
                    : "scroll-type-btn"
                }
              >
                <h3>
                  <a
                    className={
                      popularBtn === "in-theaters"
                        ? "scroll-type-btn-anchor-active"
                        : "scroll-type-btn-anchor"
                    }
                  >
                    In Theaters
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <ScrollBarLogicIndexPageTrending />
        </div>
      );
    } else if (pageType === "index-page-free") {
      return (
        <div className="container-index-page">
          <div className="scroll-text">
            <div className="scroll-title">Free To Watch</div>
            <div className="scroll-type">
              <div
                onClick={(e) => setFreeToWatchBtn("movies")}
                className={
                  freeToWatchBtn === "movies"
                    ? "scroll-type-btn-active"
                    : "scroll-type-btn"
                }
              >
                <h3>
                  <a
                    className={
                      freeToWatchBtn === "movies"
                        ? "scroll-type-btn-anchor-active"
                        : "scroll-type-btn-anchor"
                    }
                  >
                    Movies
                  </a>
                </h3>
              </div>
              <div
                onClick={(e) => setFreeToWatchBtn("tv")}
                className={
                  freeToWatchBtn === "tv"
                    ? "scroll-type-btn-active"
                    : "scroll-type-btn"
                }
              >
                <h3>
                  <a
                    className={
                      freeToWatchBtn === "tv"
                        ? "scroll-type-btn-anchor-active"
                        : "scroll-type-btn-anchor"
                    }
                  >
                    TV
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <ScrollBarLogicIndexPageFreeToWatch />
        </div>
      );
    }
  };

  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className="scroll-bar">{<ScrollBarWrapper />}</div>
      )}
    </>
  );
}
