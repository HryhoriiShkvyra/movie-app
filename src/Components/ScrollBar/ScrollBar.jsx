import React from "react";
import "./ScrollBar.css";
import Loading from "../Loading/Loading";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import { Link, useNavigate } from "react-router-dom";
import PendingIcon from "@mui/icons-material/Pending";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { FreeBreakfast } from "@mui/icons-material";
import IMG0 from "../../Images/posters/breaking-bad_poster.jpg";
import IMG1 from "../../Images/posters/better-call-saul_poster.jpeg";
import IMG2 from "../../Images/posters/the-sopranos_poster.jpg";
import LandscapeIcon from "@mui/icons-material/Landscape";

export default function ScrollBar({ scrollbarType, id, requestType }) {
  const [indexPageTrendingItemsDay, setIndexPageTrendingItemsDay] =
    React.useState([]);
  const [indexPageTrendingItemsWeek, setIndexPageTrendingItemsWeek] =
    React.useState([]);
  const [indexPageTrendingBtn, setIndexPageTrendingBtn] = React.useState("day");
  const [indexPageSecondTypeBtn, setIndexPageSecondTypeBtn] =
    React.useState("first");

  const [latestTrailersBtn, setLatestTrailerBtn] = React.useState("popular");

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

  const latestTrailers = [
    {
      title: "Breaking Bad",
      subTitle: "Breaking Bad - the Second season",
      img: IMG0,
    },
    {
      title: "Better Call Saul",
      subTitle: "Better Call Saul - the First season",
      img: IMG1,
    },
    {
      title: "The Sopranos",
      subTitle: "The Sopranos - the Season",
      img: IMG2,
    },
    {
      title: "Breaking Bad Bad",
      subTitle: "Breaking Bad - the Second season",
      img: IMG0,
    },
    {
      title: "Better Call Saul Saul",
      subTitle: "Better Call Saul - the First season",
      img: IMG1,
    },
    {
      title: "The Sopranos pinos",
      subTitle: "The Sopranos - the Season",
      img: IMG2,
    },
  ];

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
    process.env.REACT_APP_BASE_URL +
    `${requestType}/${id}/credits?language=en-US`;

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
      let promises = [];

      if (scrollbarType === "index-page-trending-day") {
        promises = [
          fetch(Trending_url_day, options),
          fetch(Trending_url_week, options),
        ];
      } else if (scrollbarType === "index-page-popular") {
        promises = [
          fetch(Trending_url_day, options),
          fetch(Trending_url_week, options),
        ];
      } else if (scrollbarType === "index-page-free") {
        promises = [
          fetch(Trending_url_day, options),
          fetch(Trending_url_week, options),
        ];
      } else if (scrollbarType === "card-cast") {
        promises = [fetch(Movie_credits_url, options)];
      } else if (scrollbarType === "people-page") {
        promises = [fetch(Person_url, options)];
      } else if (scrollbarType === "TV") {
        promises = [fetch(TV_credits_url, options)];
      }

      const results = await Promise.all(promises);

      const data = await handleFetchResults(results);

      if (scrollbarType === "index-page-trending-day") {
        setIndexPageTrendingItemsDay(data[0]);
        setIndexPageTrendingItemsWeek(data[1]);
      } else if (scrollbarType === "index-page-popular") {
        setIndexPageTrendingItemsDay(data[0]);
        setIndexPageTrendingItemsWeek(data[1]);
      } else if (scrollbarType === "index-page-free") {
        setIndexPageTrendingItemsDay(data[0]);
        setIndexPageTrendingItemsWeek(data[1]);
      } else if (scrollbarType === "card-cast") {
        setMovieCredits(data[0]);
      } else if (scrollbarType === "people-page") {
        setPersonFilmArray(data[0]);
      } else if (scrollbarType === "TV") {
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFetchResults = async (results) => {
    return Promise.all(
      results.map(async (result) => {
        if (!result.ok) {
          throw new Error("Fetch failed");
        }

        return result.json();
      })
    ).then((dataArr) => {
      return dataArr.map((data) => {
        if (scrollbarType === "index-page-trending-day") {
          return data.results;
        }
        if (scrollbarType === "index-page-popular") {
          return data.results;
        }
        if (scrollbarType === "index-page-free") {
          return data.results;
        }
        if (scrollbarType === "card-cast" || scrollbarType === "people-page") {
          return data.cast;
        }
      });
    });
  };

  const ScrollBarTypeFirst = () => {
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
                            gettitle={item.name}
                            onClick={(e) => HandleRedirectToTv(item)}
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
                          onClick={(e) => HandleRedirectToTv(item)}
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
                            gettitle={item.name}
                            onClick={(e) => HandleRedirectToTv(item)}
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
                          onClick={(e) => HandleRedirectToTv(item)}
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

  const ScrollBarTypeSecond = () => {
    return (
      <div className="container">
        <div className="scrollbar">
          <div
            className="scrollbar-latest-trailers-background-image"
            // style={{ backgroundImage: `url("${backgroundImage}")` }}
            alt=""
          >
            <div className="scrollbar-latest-trailers">
              <div className="scrollbar-latest-trailers-nav">
                <h2>latest trailers</h2>
                <div className="scrollbar-latest-trailers-btns">
                  <button
                    className={
                      latestTrailersBtn === "popular"
                        ? "scrollbar-latest-trailers-btn-active"
                        : "scrollbar-latest-trailers-btn"
                    }
                    onClick={(e) => setLatestTrailerBtn("popular")}
                  >
                    <a>Popular</a>
                  </button>
                  <button
                    className={
                      latestTrailersBtn === "streaming"
                        ? "scrollbar-latest-trailers-btn-active"
                        : "scrollbar-latest-trailers-btn"
                    }
                    onClick={(e) => setLatestTrailerBtn("streaming")}
                  >
                    <a>Streaming</a>
                  </button>
                  <button
                    className={
                      latestTrailersBtn === "on-tv"
                        ? "scrollbar-latest-trailers-btn-active"
                        : "scrollbar-latest-trailers-btn"
                    }
                    onClick={(e) => setLatestTrailerBtn("on-tv")}
                  >
                    <a>On Tv</a>
                  </button>
                  <button
                    className={
                      latestTrailersBtn === "for-rent"
                        ? "scrollbar-latest-trailers-btn-active"
                        : "scrollbar-latest-trailers-btn"
                    }
                    onClick={(e) => setLatestTrailerBtn("for-rent")}
                  >
                    <a>For Rent</a>
                  </button>
                  <button
                    className={
                      latestTrailersBtn === "in-theaters"
                        ? "scrollbar-latest-trailers-btn-active"
                        : "scrollbar-latest-trailers-btn"
                    }
                    onClick={(e) => setLatestTrailerBtn("in-theaters")}
                  >
                    <a>In Theaters</a>
                  </button>
                </div>
              </div>
              <div className="scrollbar-latest-trailers-cards">
                {latestTrailers.map((item) => (
                  <div
                    className="latest-trailers-card"
                    key={item.title}
                    // onMouseEnter={setBackgroundImage(item.img)}
                    // onMouseLeave={onMouseLeave()}
                  >
                    <div
                      className="scrollbar-latest-trailers-card-image-wrapper"
                      src=""
                      alt=""
                    >
                      {/* <div className="latest-trailers-card-image" /> */}
                      <img
                        className="scrollbar-latest-trailers-card-image"
                        src={item.img}
                        alt=""
                        // onClick={ClickTest}
                      />
                      <PendingIcon className="card-icon" />
                      <PlayArrowRoundedIcon className="card-play" />
                    </div>
                    <div className="scrollbar-latest-trailers-card-about">
                      <h2>{item.title}</h2>
                      <h3>{item.subTitle}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ScrollBarTypeThird = () => {
    return (
      <div className="scrollbar-card-cast-wrapper">
        <span className="scrollbar-card-cast-top">top billed cast</span>
        <div className="scrollbar-card-cast">
          {movieCredits.slice(0, 9).map((item) => (
            // <div key={item.id} value={item.id} onClick={handlePersonId}>
            //   press here, in console you should see item-id
            // </div>
            <div
              className="scrollbar-card-cast-item"
              key={item.id}
              value={item.id}
              onClick={(e) => handlePersonId(item)}
            >
              <img
                className="scrollbar-card-cast-photo"
                src={
                  process.env.REACT_APP_IMAGE_URL + "w200" + item.profile_path
                }
                alt=""
              />
              <div className="scrollbar-card-cast-text">
                <div className="scrollbar-card-cast-name">{item.name}</div>
                <div className="scrollbar-card-cast-character">
                  {item.character}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ScrollBarTypeFourth = () => {
    return (
      <div className="scrollbar-people-page">
        {personFilmArray.slice(0, 8).map((item) => (
          <div className="scrollbar-card-type-four" key={item.id}>
            {item.poster_path ? (
              <img
                className="scrollbar-card-image-type-four"
                src={
                  process.env.REACT_APP_IMAGE_URL + "w200" + item.poster_path
                }
                alt=""
                onClick={(e) => HandleRedirectToMovie(item)}
              />
            ) : (
              <div className="scrollbar-card-type-four-no-image">
                <LandscapeIcon />
              </div>
            )}
            <div className="scrollbar-card-text">
              <h5>{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handlePersonId = (e) => {
    console.log(e);

    const actorName = e.name.replace(/-/g, "").toLowerCase();

    const actorId = e.id;

    //  console.log(title.replace(/[^a-zA-Z]/g, "-"));
    // console.log(title.replace(/ /g, "-").toLowerCase());
    return navigate(`/person/${actorId}-${actorName}`);
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

    let title = e.title.replace(/ /g, "-").toLowerCase();

    // console.log(title.replace(/[^a-zA-Z]/g, "-"));
    // console.log(title.replace(/ /g, "-").toLowerCase());
    // console
    // const titleForRedirect =

    // const itemId = e.target.getAttribute("getid");
    // return console.log(itemId);
    return navigate(`/movie/${e.id}-${title}`);
  };

  const HandleRedirectToTv = (e) => {
    console.log(e);

    let name = e.name.replace(/ /g, "-").toLowerCase();

    return navigate(`/tv/${e.id}-${name}`);
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
    } else if (scrollbarType === "index-page-latest-trailers") {
      return <ScrollBarTypeSecond />;
    } else if (scrollbarType === "card-cast") {
      return <ScrollBarTypeThird />;
    } else if (scrollbarType === "people-page") {
      return <ScrollBarTypeFourth />;
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
