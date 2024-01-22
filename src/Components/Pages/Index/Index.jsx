import React from "react";
import "./Index.css";
import { useNavigate } from "react-router-dom";
import ScrollBar from "../../ScrollBar/ScrollBar";
import JoinToday from "../../JoinToday/JoinToday";
import Leaderboard from "../../Leaderboards/Leaderboard";

export default function Index() {
  const [searchValue, setSearchValue] = React.useState([]);
  const scrollbarTrendingDay = "index-page-trending-day";
  // const scrollbarTrendingWeek = "index-page-trending-week";
  const scrollbarPopular = "index-page-popular";
  const scrollbarFree = "index-page-free";
  const scrollbarLatestTrailers = "index-page-latest-trailers";

  const navigate = useNavigate();
  function handleInputDown(event) {
    if (event.key === "Enter") {
      fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          searchValue +
          "&api_key=f164cbb41dc7c82862fe2a087be89aa9"
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
      return navigate(`/search/${searchValue}`);
    }
  }

  function handleClickSearch() {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchValue +
        "&api_key=f164cbb41dc7c82862fe2a087be89aa9"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    return navigate(`/search/${searchValue}`);
  }

  return (
    <div className="index">
      <div className="container">
        <div className="index-wrapper">
          <div className="searching-bar-wrapper">
            <span className="searching-bar-title">Welcome.</span>
            <span className="searching-bar-sub-title">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="searching-bar">
              <input
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyDown={handleInputDown}
                className="searching"
                placeholder="Search for a movie, tv show, person ..."
              />
              <button onClick={handleClickSearch} className="searching-btn">
                Search
              </button>
            </div>
          </div>
          <ScrollBar scrollbarType={scrollbarTrendingDay} />
          <ScrollBar scrollbarType={scrollbarLatestTrailers} />
          {/* <LatestTrailers /> */}
          <ScrollBar scrollbarType={scrollbarPopular} />
          <ScrollBar scrollbarType={scrollbarFree} />
          <JoinToday />
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}
