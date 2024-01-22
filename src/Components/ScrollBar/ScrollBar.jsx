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
  const [indexPageTrendingBtn, setIndexPageTrendingBtn] = React.useState("day");
  const [indexPageSecondTypeBtn, setIndexPageSecondTypeBtn] =
    React.useState("first");
  const [indexPageFreeBtn, setIndexPageFreeBtn] = React.useState([]);
  const [personFilmArray, setPersonFilmArray] = React.useState([]);
  const [tvCredits, setTvCredits] = React.useState([]);
  const [movieCredits, setMovieCredits] = React.useState([]);
  const [popularBtn, setPopularBtn] = React.useState("streaming");
  const [freeToWatchBtn, setFreeToWatchBtn] = React.useState("movies");
  const [isLoading, setIsLoading] = React.useState(null);
  const [personId, setPersonId] = React.useState();
  const [itemId, setItemId] = React.useState();
  const [test, setTest] = React.useState();

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

  const FetchData = async () => {
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

      setIndexPageTrendingItemsDay(data[0].results);
      setIndexPageTrendingItemsWeek(data[1].results);
      setPersonFilmArray(data[2].cast);
      setTvCredits(data[3].cast);
      setMovieCredits(data[4].cast);

      ScrollbarLogic();
      console.log(scrollbarType);
      setIsLoading((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  const ScrollBarTypeFirst = ({ scrollbarData }) => {
    if (scrollbarType === "index-page-trending-day") {
      return (
        <div className="container-index-page">
          <div className="scrollbar-wrapper">
            <div className="scrollbar-top-side">
              <div className="scroll-title">Trending</div>
              <div className="scrollbar-btns-wrapper">
                <div
                  onClick={(e) => setIndexPageTrendingBtn("day")}
                  className={
                    indexPageTrendingBtn === "day"
                      ? "scrollbar-btn active"
                      : "scrollbar-btn"
                  }
                >
                  <h3>
                    <a
                      className={
                        indexPageTrendingBtn === "day"
                          ? "scroll-type-btn-anchor-active"
                          : "scroll-type-btn-anchor"
                      }
                    >
                      Today
                    </a>
                  </h3>
                </div>
                <div
                  onClick={(e) => setIndexPageTrendingBtn("week")}
                  className={
                    indexPageTrendingBtn === "week"
                      ? "scrollbar-btn active"
                      : "scrollbar-btn"
                  }
                >
                  <h3>
                    <a
                      className={
                        indexPageTrendingBtn === "week"
                          ? "scroll-type-btn-anchor-active"
                          : "scroll-type-btn-anchor"
                      }
                    >
                      This Week
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            {indexPageTrendingBtn === "day" ? (
              <div className="scrollbar">
                {indexPageTrendingItemsDay.map((item) => (
                  <div key={item.id}>
                    <div className="scroll-item-">
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
                            onClick={(e) => HandleRedirectToMovie(item)}
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
                          onClick={(e) => HandleRedirectToMovie(item)}
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
            ) : (
              <div className="scrollbar">
                {indexPageTrendingItemsWeek.map((item) => (
                  <div key={item.id}>
                    <div className="scroll-item-">
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
                            onClick={(e) => HandleRedirectToMovie(item)}
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
                          onClick={(e) => HandleRedirectToMovie(item)}
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
            )}
          </div>
        </div>
      );
    } else if (scrollbarType === "index-page-popular") {
      return (
        <div className="container-index-page">
          <div className="scrollbar-wrapper">
            <div className="scrollbar-top-side">
              <div className="scroll-title">What's Popular</div>
              <div className="scrollbar-btns-wrapper">
                <div
                  onClick={(e) => setIndexPageSecondTypeBtn("first")}
                  className={
                    indexPageSecondTypeBtn === "first"
                      ? "scrollbar-btn active"
                      : "scrollbar-btn"
                  }
                >
                  <h3>
                    <a
                      className={
                        indexPageSecondTypeBtn === "first"
                          ? "scroll-type-btn-anchor-active"
                          : "scroll-type-btn-anchor"
                      }
                    >
                      Streaming
                    </a>
                  </h3>
                </div>
                <div
                  onClick={(e) => setIndexPageSecondTypeBtn("second")}
                  className={
                    indexPageSecondTypeBtn === "second"
                      ? "scrollbar-btn active"
                      : "scrollbar-btn"
                  }
                >
                  <h3>
                    <a
                      className={
                        indexPageSecondTypeBtn === "second"
                          ? "scroll-type-btn-anchor-active"
                          : "scroll-type-btn-anchor"
                      }
                    >
                      On TV
                    </a>
                  </h3>
                </div>
                <div
                  onClick={(e) => setIndexPageSecondTypeBtn("third")}
                  className={
                    indexPageSecondTypeBtn === "third"
                      ? "scrollbar-btn active"
                      : "scrollbar-btn"
                  }
                >
                  <h3>
                    <a
                      className={
                        indexPageSecondTypeBtn === "third"
                          ? "scroll-type-btn-anchor-active"
                          : "scroll-type-btn-anchor"
                      }
                    >
                      For Rent
                    </a>
                  </h3>
                </div>
                <div
                  onClick={(e) => setIndexPageSecondTypeBtn("fourth")}
                  className={
                    indexPageSecondTypeBtn === "fourth"
                      ? "scrollbar-btn active"
                      : "scrollbar-btn"
                  }
                >
                  <h3>
                    <a
                      className={
                        indexPageSecondTypeBtn === "fourth"
                          ? "scroll-type-btn-anchor-active"
                          : "scroll-type-btn-anchor"
                      }
                    >
                      In Theatre
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <ScrollbarIndexPageSecondType />
          </div>
        </div>
      );
    } else if (scrollbarType === "index-page-free") {
      return (
        <div className="container-index-page">
          <div className="scrollbar-wrapper">
            <div className="scrollbar-top-side">
              <div className="scroll-title">Free To Watch</div>

              <div className="scrollbar-btns-wrapper">
                <div
                  onClick={(e) => setIndexPageTrendingBtn("day")}
                  className={
                    indexPageTrendingBtn === "day"
                      ? "scrollbar-btn active"
                      : "scrollbar-btn"
                  }
                >
                  <h3>
                    <a
                      className={
                        indexPageTrendingBtn === "day"
                          ? "scroll-type-btn-anchor-active"
                          : "scroll-type-btn-anchor"
                      }
                    >
                      Movie
                    </a>
                  </h3>
                </div>
                <div
                  onClick={(e) => setIndexPageTrendingBtn("week")}
                  className={
                    indexPageTrendingBtn === "week"
                      ? "scrollbar-btn active"
                      : "scrollbar-btn"
                  }
                >
                  <h3>
                    <a
                      className={
                        indexPageTrendingBtn === "week"
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

            {indexPageTrendingBtn === "day" ? (
              <div className="scrollbar">
                {indexPageTrendingItemsDay.map((item) => (
                  <div key={item.id}>
                    <div className="scroll-item-">
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
                            onClick={(e) => HandleRedirectToMovie(item)}
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
                          onClick={(e) => HandleRedirectToMovie(item)}
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
            ) : (
              <div className="scrollbar">
                {indexPageTrendingItemsWeek.map((item) => (
                  <div key={item.id}>
                    <div className="scroll-item-">
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
                            onClick={(e) => HandleRedirectToMovie(item)}
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
                          onClick={(e) => HandleRedirectToMovie(item)}
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
            )}
          </div>
        </div>
      );
    }
  };

  // const ScrollBarTypeSecond = () => {
  //   return (
  //     <div className="scroll-bar">
  //       <div
  //         className="latest-trailers-background-image"
  //         style={{ backgroundImage: `url("${backgroundImage}")` }}
  //         alt=""
  //       >
  //         <div className="latest-trailers">
  //           <div className="latest-trailers-nav">
  //             <h2>latest trailers</h2>
  //             <div className="latest-trailers-btns">
  //               <button
  //                 className={
  //                   activeBtn === "popular"
  //                     ? "latest-trailers-btn-active"
  //                     : "latest-trailers-btn"
  //                 }
  //                 onClick={(e) => setActiveBtn("popular")}
  //               >
  //                 <a>Popular</a>
  //               </button>
  //               <button
  //                 className={
  //                   activeBtn === "streaming"
  //                     ? "latest-trailers-btn-active"
  //                     : "latest-trailers-btn"
  //                 }
  //                 onClick={(e) => setActiveBtn("streaming")}
  //               >
  //                 <a>Streaming</a>
  //               </button>
  //               <button
  //                 className={
  //                   activeBtn === "on-tv"
  //                     ? "latest-trailers-btn-active"
  //                     : "latest-trailers-btn"
  //                 }
  //                 onClick={(e) => setActiveBtn("on-tv")}
  //               >
  //                 <a>On Tv</a>
  //               </button>
  //               <button
  //                 className={
  //                   activeBtn === "for-rent"
  //                     ? "latest-trailers-btn-active"
  //                     : "latest-trailers-btn"
  //                 }
  //                 onClick={(e) => setActiveBtn("for-rent")}
  //               >
  //                 <a>For Rent</a>
  //               </button>
  //               <button
  //                 className={
  //                   activeBtn === "in-theaters"
  //                     ? "latest-trailers-btn-active"
  //                     : "latest-trailers-btn"
  //                 }
  //                 onClick={(e) => setActiveBtn("in-theaters")}
  //               >
  //                 <a>In Theaters</a>
  //               </button>
  //             </div>
  //           </div>
  //           <div className="latest-trailers-cards">
  //             {personFilmArray.map((item) => (
  //               <div
  //                 className="latest-trailers-card"
  //                 key={item.title}
  //                 // onMouseEnter={setBackgroundImage(item.img)}
  //                 // onMouseLeave={onMouseLeave()}
  //               >
  //                 <div
  //                   className="latest-trailers-card-image-wrapper"
  //                   src=""
  //                   alt=""
  //                 >
  //                   {/* <div className="latest-trailers-card-image" /> */}
  //                   <img
  //                     className="latest-trailers-card-image"
  //                     src={item.img}
  //                     alt=""
  //                     // onClick={ClickTest}
  //                   />
  //                   <PendingIcon className="card-icon" />
  //                   <PlayArrowRoundedIcon className="card-play" />
  //                 </div>
  //                 <div className="latest-trailers-card-about">
  //                   <h2>{item.title}</h2>
  //                   <h3>{item.subTitle}</h3>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

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
      <div className="scrollbar">
        {personFilmArray.map((item) => (
          <div className="scrollbar-card-type-four" key={item.id}>
            <img
              className="scrollbar-card-image-type-four"
              src={process.env.REACT_APP_IMAGE_URL + "w200" + item.poster_path}
              alt=""
            />
            <div className="scrollbar-card-text">
              <h5>{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const ScrollbarIndexPageSecondType = () => {
    if (indexPageSecondTypeBtn === "first") {
      return (
        <div className="scrollbar">
          {indexPageTrendingItemsDay.map((item) => (
            <div key={item.id}>
              <div className="scroll-item-">
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
                    onClick={(e) => HandleRedirectToMovie(item)}
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
      );
    } else if (indexPageSecondTypeBtn === "second") {
      return (
        <div className="scrollbar">
          {indexPageTrendingItemsWeek.map((item) => (
            <div key={item.id}>
              <div className="scroll-item-">
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
                    onClick={(e) => HandleRedirectToMovie(item)}
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
      );
    } else if (indexPageSecondTypeBtn === "third") {
      return (
        <div className="scrollbar">
          {indexPageTrendingItemsDay.map((item) => (
            <div key={item.id}>
              <div className="scroll-item-">
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
                    onClick={(e) => HandleRedirectToMovie(item)}
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
      );
    } else if (indexPageSecondTypeBtn === "fourth") {
      return (
        <div className="scrollbar">
          {indexPageTrendingItemsWeek.map((item) => (
            <div key={item.id}>
              <div className="scroll-item-">
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
                    onClick={(e) => HandleRedirectToMovie(item)}
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
      );
    }
  };

  const HandleRedirectToMovie = (e) => {
    console.log(e);
    // const itemId = e.target.getAttribute("getid");
    // return console.log(itemId);
    return navigate(`/movie/${e.id}`);
  };

  const ScrollbarLogic = () => {
    if (scrollbarType === "index-page-trending-day") {
      return (
        <div>
          <ScrollBarTypeFirst />
        </div>
      );
    } else if (scrollbarType === "index-page-popular") {
      return (
        <div>
          <ScrollBarTypeFirst />
        </div>
      );
    } else if (scrollbarType === "index-page-free") {
      return (
        <div>
          <ScrollBarTypeFirst />
        </div>
      );
    }
  };

  React.useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <div>
          <ScrollbarLogic />
        </div>
      )}
    </>
  );
}
