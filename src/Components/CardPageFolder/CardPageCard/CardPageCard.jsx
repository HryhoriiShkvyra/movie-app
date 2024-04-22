import React from "react";
import "./CardPageCard.css";
import { useLocation, useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";

export default function CardPageCard() {
  const [cardValue, setCardValue] = React.useState();
  const [cardGenres, setCardGenres] = React.useState([]);
  const [cardReleaseDate, setCardReleaseDate] = React.useState();
  const [cardOverview, setCardOverview] = React.useState();
  const { id } = useParams();
  const { requestType } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleId = (id) => {
    let idWithLetters = id;
    const onlyId = idWithLetters.replace(/\D/g, "");
    // let newId = onlyId;

    // for (let i = 0; i < id.length; i++) {
    //   if (!id[i].replace(/\D/g, "")) {
    //     newId += id[i];
    //   }
    // }
    return onlyId;
  };

  React.useEffect(() => {
    handleId(id);
    console.log(requestType);
  }, [id]);

  const fetch = require("node-fetch");

  const url = `https://api.themoviedb.org/3/${requestType}/${handleId(
    id
  )}?language=en-US`;
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
          setIsLoading((prev) => !prev);
          console.log(data);
        })

        .catch((err) => console.error("error:" + err));
    }
    response();
  }, []);

  return (
    <div className="card-page-card">
      <div className="container">
        {isLoading === false ? (
          <Loading />
        ) : (
          <div className="card-page-card-wrapper">
            {cardValue.poster_path ? (
              <div>
                <img
                  className="card-page-card-poster"
                  src={
                    process.env.REACT_APP_IMAGE_URL +
                    `w300` +
                    cardValue.poster_path
                  }
                />
              </div>
            ) : (
              <div className="card-page-no-poster">
                <div className="card-page-no-poster-icon">
                  <LandscapeRoundedIcon />
                </div>
              </div>
            )}

            <div className="card-page-card-header-poster">
              <div className="card-page-card-title">
                <div className="card-page-card-title-cols">
                  {cardValue.title ? (
                    <span className="card-page-card-name">
                      {cardValue.title}
                    </span>
                  ) : (
                    <span className="card-page-card-name">
                      {cardValue.name}
                    </span>
                  )}
                  <span className="card-page-card-name">{cardValue.name}</span>
                  <span className="card-page-card-release-year">
                    {cardReleaseDate === undefined ? (
                      <>({cardValue.first_air_date.slice(0, 4)})</>
                    ) : (
                      <>({cardReleaseDate.slice(0, 4)})</>
                    )}
                  </span>
                </div>
                <div className="card-page-card-facts">
                  {cardValue.release_date === undefined ? null : (
                    <span className="card-page-card-release-date">
                      {cardValue.release_date}
                    </span>
                  )}
                  <div className="card-genres">
                    {cardGenres.map((item) => (
                      <span className="card-page-card-genre" key={item.id}>
                        {item.name}
                      </span>
                    ))}
                  </div>
                  {cardValue.runtime === undefined ? null : (
                    <span className="card-page-card-runtime">
                      {cardValue.runtime} min
                    </span>
                  )}
                </div>
              </div>

              <div className="card-page-card-actions">
                <div className="card-page-card-chart">
                  <div className="card-page-card-chart-wrapper">
                    <div className="card-page-card-chart-line">
                      <span className="card-page-card-chart-score">100</span>
                      <span className="card-page-card-chart-symbol">%</span>
                    </div>
                  </div>
                  <div className="card-page-card-chart-text">
                    <span>user</span>
                    <span>score</span>
                  </div>
                </div>
                <div className="card-page-card-add-to-value">
                  <FormatListBulletedRoundedIcon />
                </div>
                <div className="card-page-card-add-to-value">
                  <FavoriteRoundedIcon />
                </div>
                <div className="card-page-card-add-to-value">
                  <BookmarkRoundedIcon />
                </div>
                <div className="card-page-card-add-to-value">
                  <StarRoundedIcon />
                </div>
                <div className="card-page-card-trailer">
                  <PlayArrowRoundedIcon />
                  play trailer
                </div>
              </div>
              <div className="card-page-card-header-info">
                <div className="card-page-card-tagline">
                  {cardValue.tagline}
                </div>
                <div className="card-page-card-overview-wrapper">
                  <div className="card-page-card-overview-title">Overview</div>
                  <div className="card-page-card-overview-text">
                    {cardValue.overview}
                  </div>
                </div>
              </div>
              {cardValue.created_by === undefined ? (
                <div className="card-page-card-no-image">
                  <div className="card-page-card-profile">
                    David Fincher
                    <span className="card-page-card-character">Director</span>
                  </div>
                  <div className="card-page-card-profile">
                    Chuck Palahniuk
                    <span className="card-page-card-character">Novel</span>
                  </div>
                  <div className="card-page-card-profile">
                    Jim Uhls
                    <span className="card-page-card-character">Screenplay</span>
                  </div>
                </div>
              ) : (
                <div className="card-page-card-no-image">
                  {cardValue.created_by.map((item) => (
                    <div className="card-page-card-profile" key={item.id}>
                      {item.name}
                      <span className="card-page-card-character">Director</span>
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
