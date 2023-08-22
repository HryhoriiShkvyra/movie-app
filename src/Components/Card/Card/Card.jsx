import React from "react";
import "./Card.css";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

export default function Card() {
  const [cardValue, setCardValue] = React.useState();
  const [cardGenres, setCardGenres] = React.useState([]);
  const [cardReleaseDate, setCardReleaseDate] = React.useState();
  const [cardOverview, setCardOverview] = React.useState();
  const { id } = useParams();
  const { requestType } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);

  // React.useEffect(() => console.log(requestType), []);

  const fetch = require("node-fetch");

  const url = `https://api.themoviedb.org/3/${requestType}/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0",
    },
  };

  React.useEffect(() => {
    function response() {
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          setCardValue(data);
          setCardGenres(data.genres);
          setCardReleaseDate(data.release_date);
          setCardOverview(data.overview);
          console.log(data);
          setIsLoading((prev) => !prev);
        })
        .catch((err) => console.error("error:" + err));
    }
    response();
  }, []);

  return (
    <div className="card">
      <div className="container">
        {isLoading === false ? (
          <Loading />
        ) : (
          <div className="card-wrapper">
            <img
              className="card-poster"
              src={
                process.env.REACT_APP_IMAGE_URL + `w300` + cardValue.poster_path
              }
            />
            <div className="card-header-poster">
              <div className="card-title">
                <div className="card-title-cols">
                  {cardValue.title ? (
                    <span className="card-name">{cardValue.title}</span>
                  ) : (
                    <span className="card-name">{cardValue.name}</span>
                  )}
                  {/* <span className="card-name">{cardValue.name}</span> */}
                  <span className="card-release-year">
                    {cardReleaseDate === undefined ? (
                      <>({cardValue.first_air_date.slice(0, 4)})</>
                    ) : (
                      <>({cardReleaseDate.slice(0, 4)})</>
                    )}
                  </span>
                </div>
                <div className="card-facts">
                  {cardValue.release_date === undefined ? null : (
                    <span className="card-release-date">
                      {cardValue.release_date}
                    </span>
                  )}
                  <div className="card-genres">
                    {cardGenres.map((item) => (
                      <span className="card-genre" key={item.id}>
                        {item.name}
                      </span>
                    ))}
                  </div>
                  {cardValue.runtime === undefined ? null : (
                    <span className="card-runtime">
                      {cardValue.runtime} min
                    </span>
                  )}
                </div>
              </div>

              <div className="card-actions">
                <div className="card-chart">
                  <div className="card-chart-wrapper">
                    <div className="card-chart-line">
                      <span className="card-chart-score">100</span>
                      <span className="card-chart-symbol">%</span>
                    </div>
                  </div>
                  <div className="card-chart-text">
                    <span>user</span>
                    <span>score</span>
                  </div>
                </div>
                <div className="card-add-to-value">
                  <FormatListBulletedRoundedIcon />
                </div>
                <div className="card-add-to-value">
                  <FavoriteRoundedIcon />
                </div>
                <div className="card-add-to-value">
                  <BookmarkRoundedIcon />
                </div>
                <div className="card-add-to-value">
                  <StarRoundedIcon />
                </div>
                <div className="card-trailer">
                  <PlayArrowRoundedIcon />
                  play trailer
                </div>
              </div>
              <div className="card-header-info">
                <div className="card-tagline">{cardValue.tagline}</div>
                <div className="card-overview-wrapper">
                  <div className="card-overview-title">Overview</div>
                  <div className="card-overview-text">{cardValue.overview}</div>
                </div>
              </div>
              {cardValue.created_by === undefined ? (
                <div className="card-no-image">
                  <div className="card-profile">
                    David Fincher
                    <span className="card-character">Director</span>
                  </div>
                  <div className="card-profile">
                    Chuck Palahniuk
                    <span className="card-character">Novel</span>
                  </div>
                  <div className="card-profile">
                    Jim Uhls
                    <span className="card-character">Screenplay</span>
                  </div>
                </div>
              ) : (
                <div className="card-no-image">
                  {cardValue.created_by.map((item) => (
                    <div className="card-profile" key={item.id}>
                      {item.name}
                      <span className="card-character">Director</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
