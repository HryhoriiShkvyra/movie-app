import React from "react";
import "./JoinToday.css";

export default function JoinToday() {
  const [value, setValue] = React.useState([]);
  const [image, setImage] = React.useState();
  const [isLoading, setIsLoading] = React.useState(null);

  const fetch = require("node-fetch");

  const url = "https://api.themoviedb.org/3/movie/550?language=en-US";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TOKEN_v4,
    },
  };

  const FetchData = async () => {
    setIsLoading(true);
    const request = await fetch(url, options).then((response) =>
      response.json().then((data) => {
        // console.log(data);
        setValue(data);
        setIsLoading((prev) => !prev);
      })
    );
  };

  React.useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="join-today">
      {isLoading === true ? (
        <div>null</div>
      ) : (
        <div
          className="container-index-page-join-today"
          style={{
            // backgroundImage: `
            // linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
            // (${process.env.REACT_APP_IMAGE_URL}w500${value.backdrop_path})`,
            // backgroundSize: "contain",
            // backgroundPosition: "center",
            // backgroundColor: "rgba(128, 91, 231, 0.5)",

            backgroundImage: `
              linear-gradient(to bottom, rgba(128, 91, 231, 0.5), rgba(128, 91, 231, 0.5)),
              url(${process.env.REACT_APP_IMAGE_URL}w500${value.backdrop_path})
            `,
            // backgroundBlendMode: "overlay",
            backgroundSize: "cover",
          }}
        >
          <div className="join-today-title">Join Today</div>
          <div className="join-today-inner">
            <div className="join-today-left">
              <div className="join-today-left-text">
                Get access to maintain your own custom personal lists, track
                what you've seen and search and filter for what to watch
                next—regardless if it's in theatres, on TV or available on
                popular streaming services like Netflix, Apple TV Plus, Rakuten
                TV, MUBI, and FilmBox+.
              </div>
              <button className="join-today-left-btn">Sign Up</button>
            </div>
            <div className="join-today-right">
              <ul>
                <li>Enjoy TMDB ad free</li>
                <li>Maintain a personal watchlist</li>
                <li>
                  Filter by your subscribed streaming services and find
                  something to watch
                </li>
                <li>Log the movies and TV shows you've seen</li>
                <li>Build custom lists</li>
                <li>Contribute to and improve our database</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
