import React from "react";

import { useNavigate } from "react-router-dom";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

export default function CardPageAdditionalInfoCollection(
  matrix,
  matrixCollection
) {
  const [hoverSortBtn, setHoverSortBtn] = React.useState(false);
  const [hoverSortByPopularity, setHoverSortByPopularity] =
    React.useState(false);
  const [hoverSortByRating, setHoverSortByRating] = React.useState(false);
  const [hoverSortByReleaseDate, setHoverSortByReleaseDate] =
    React.useState(false);

  const [pressSortByPopular, setPressSortByPopular] = React.useState(false);
  const [pressSortByRating, setPressSortByRating] = React.useState(false);
  const [pressSortByReleaseDate, setPressSortByReleaseDate] =
    React.useState(false);

  const [sortValue, setSortValue] = React.useState();

  const navigate = useNavigate();

  console.log(matrix);

  const Movie_overview_limit = (overview) => {
    const newOverview = overview.slice(0, 250) + "...";

    if (overview.length > 250) {
      return newOverview;
    } else return overview;
  };

  const HandleRedirectToMovie = (value) => {
    let title = value.title;

    const cleanString = (title) => {
      const cleanedString = title.replace(/[^a-zA-Z0-9]/g, "-");
      const words = cleanedString.toLowerCase().match(/\b\w+\b/g);
      return words.join("-");
    };

    const properTitle = cleanString(value.title);

    if (/\d/.test(value.title) === false) {
      //   return console.log("value =====>" + `${properTitle}`);
      // } else return console.log(value.title);
      return navigate(`/movie/${value.id}` + "-" + `${properTitle}`);
    } else return navigate(`/movie/${value.id}` + "-" + `${properTitle}`);
  };

  const HandleRedirectToTv = (value) => {
    const cleanString = (name) => {
      const cleanedString = name.replace(/[^a-zA-Z0-9]/g, "-");
      const words = cleanedString.toLowerCase().match(/\b\w+\b/g);
      return words.join("-");
    };
    const properName = cleanString(value.name);

    if (/\d/.test(value.name) === true) {
      return navigate(`/tv/${value.id}` + "-" + `${properName}`);
    } else return navigate(`/tv/${value.id}` + "-" + `${properName}`);
  };

  const MovieOrTvItem = (value) => {
    console.log(value);

    if (value.title) {
      return HandleRedirectToMovie(value);
    } else if (value.name) {
      return HandleRedirectToTv(value);
    } else return console.log("error");
  };

  // function sortArrayByPopularAscending(a, b) {
  //   return a.popular - b.popular;
  // }

  // function sortArrayByPopularDescending(a, b) {
  //   return b.popular - a.popular;
  // }

  // function sortFilms(films, sortFunction) {}

  // const sortSelectState = sortArrayByPopularAscending;
  // const SortedFilms = sortFilms(matrixCollection, sortSelectState);

  return (
    <div>
      <div className="card-page-cast-wrapper">
        <div className="card-page-section">
          <h2>Featured Cast</h2>
          <div className="card-page-cast-items">
            {matrix.matrix.map((actor, index) => (
              <div
                key={index + "-" + actor.id + "-" + actor.cast_id}
                className="card-page-cast-item"
              >
                {actor.profile_path ? (
                  <div className="card-page-cast-photo-wrapper">
                    <img
                      className="card-page-cast-photo"
                      src={
                        process.env.REACT_APP_IMAGE_URL +
                        "w200" +
                        `${actor.profile_path}`
                      }
                    />
                  </div>
                ) : (
                  <div className="card-page-cast-no-photo">
                    <PersonRoundedIcon className="" />
                  </div>
                )}
                <div className="card-page-cast-text">
                  <h4>{actor.name}</h4>
                  <span className="card-page-cast-character">
                    {actor.character}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-page-black-blank"></div>

        <div className="card-page-section">
          <h2>Featured Cast</h2>
          <div className="card-page-cast-items">
            {matrix.matrix.map((actor, index) => (
              <div
                key={index + "-" + actor.id + "-" + actor.cast_id}
                className="card-page-cast-item"
              >
                {actor.profile_path ? (
                  <div className="card-page-cast-photo-wrapper">
                    <img
                      className="card-page-cast-photo"
                      src={
                        process.env.REACT_APP_IMAGE_URL +
                        "w200" +
                        `${actor.profile_path}`
                      }
                    />
                  </div>
                ) : (
                  <div className="card-page-cast-no-photo">
                    <PersonRoundedIcon className="" />
                  </div>
                )}
                <div className="card-page-cast-text">
                  <h4>{actor.name}</h4>
                  <span className="card-page-cast-character">
                    {actor.character}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-page-black-blank"></div>

        <div className="card-page-section">
          <div className="card-page-title-wrapper">
            <h2>{matrix.matrixCollection.length} movies</h2>
            <div
              onMouseEnter={(e) => setHoverSortBtn(true)}
              onMouseLeave={(e) => setHoverSortBtn(false)}
              className="card-page-sort-wrapper"
            >
              <h2>Sort</h2>
              <div
                // className="card-page=items-active"
                className={
                  hoverSortBtn
                    ? "card-page-items-active"
                    : "card-page-items-not-active"
                }
              >
                <div
                  onMouseEnter={(e) => setHoverSortByPopularity(true)}
                  onMouseLeave={(e) => setHoverSortByPopularity(false)}
                  className="card-page-item"
                >
                  <div className="card-page-item-first">
                    Popularity <ArrowDropDownRoundedIcon />
                  </div>
                  <div
                    className={
                      hoverSortByPopularity
                        ? "card-page-item-second-active"
                        : "card-page-item-second-not-active"
                    }
                  >
                    <div
                      onClick={(e) => setSortValue("PopularAscending")}
                      className="card-page-sub-item-second"
                    >
                      Ascending
                    </div>
                    <div
                      onClick={(e) => setSortValue("PopularDescending")}
                      className="card-page-sub-item-second"
                    >
                      Descending
                    </div>
                  </div>
                </div>
                <div
                  onMouseEnter={(e) => setHoverSortByRating(true)}
                  onMouseLeave={(e) => setHoverSortByRating(false)}
                  className="card-page-item"
                >
                  <div className="card-page-item-first">
                    Rating <ArrowDropDownRoundedIcon />
                  </div>
                  <div
                    className={
                      hoverSortByRating
                        ? "card-page-item-second-active"
                        : "card-page-item-second-not-active"
                    }
                  >
                    <div
                      onClick={(e) => setSortValue("RatingAscending")}
                      className="card-page-sub-item-second"
                    >
                      Ascending
                    </div>
                    <div
                      onClick={(e) => setSortValue("RatingDescending")}
                      className="card-page-sub-item-second"
                    >
                      Descending
                    </div>
                  </div>
                </div>
                <div
                  onMouseEnter={(e) => setHoverSortByReleaseDate(true)}
                  onMouseLeave={(e) => setHoverSortByReleaseDate(false)}
                  className="card-page-item"
                >
                  <div className="card-page-item-first">
                    Release Date <ArrowDropDownRoundedIcon />
                  </div>
                  <div
                    className={
                      hoverSortByReleaseDate
                        ? "card-page-item-second-active"
                        : "card-page-item-second-not-active"
                    }
                  >
                    <div
                      onClick={(e) => setSortValue("ReleaseDateAscending")}
                      className="card-page-sub-item-second"
                    >
                      Ascending
                    </div>
                    <div
                      onClick={(e) => setSortValue("ReleaseDateDescending")}
                      className="card-page-sub-item-second"
                    >
                      Descending
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-page-films">
            {matrix.matrixCollection
              // .sort((a, b) => a.popularity - b.popularity)
              .map((movie, index) => (
                <div key={`${movie.id}-${index}`} className="card-page-film">
                  <div className="card-page-film-poster-wrapper">
                    <img
                      className="card-page-film-poster"
                      src={
                        process.env.REACT_APP_IMAGE_URL +
                        "w200" +
                        `${movie.poster_path}`
                      }
                      onClick={(e) => MovieOrTvItem(movie)}
                    />
                  </div>
                  <div className="card-page-film-text">
                    <div className="card-page-film-title-wrapper">
                      <h2
                        onClick={(e) => MovieOrTvItem(movie)}
                        className="card-page-film-title"
                      >
                        {movie.original_title}
                      </h2>
                      <p>{movie.release_date}</p>
                    </div>
                    <div className="card-page-film-about">
                      {Movie_overview_limit(movie.overview)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
