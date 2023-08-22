import React from "react";
import "./Movie.css";
import Card from "../../Card/Card/Card";
import CardPage from "../../Card/CardPage/CardPage";

export default function Movie() {
  const [trendingItems, setTrendingItems] = React.useState([]);

  const fetch = require("node-fetch");

  const url =
    process.env.REACT_APP_BASE_URL + "trending/all/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TOKEN_v4,
    },
  };

  React.useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTrendingItems(data.results);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div className="movie">
      <div className="container">
        <div className="movie-wrapper">
          <CardPage />
        </div>
      </div>
    </div>
  );
}
