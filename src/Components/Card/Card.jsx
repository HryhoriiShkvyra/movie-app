import React from "react";
import "./Card.css";
import Loading from "../Loading/Loading";

export default function Card() {
  const [value, setValue] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const fetch = require("node-fetch");

  const url =
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0",
    },
  };

  const fetchData = () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setValue(data);
        console.log(data);
        setIsLoading((prev) => !prev);
      })
      .catch((err) => console.error("error:" + err));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          {value.results.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-poster">
                <img
                  className="card-poster"
                  src={
                    process.env.REACT_APP_IMAGE_URL + "/w200" + item.poster_path
                  }
                  alt=""
                />
              </div>
              <div className="card-about">
                <div className="user-score-chart">
                  <span className="outer-circle">
                    <span className="outer-circle-number">
                      71 <span>%</span>{" "}
                    </span>
                  </span>
                </div>
                <div className="card-title">
                  {item.name ? (
                    <h3 className="card-title">{item.name}</h3>
                  ) : (
                    <h3>item.name not working</h3>
                  )}
                </div>
                <div className="card-release-date">
                  {item.first_air_date ? (
                    <p>{item.first_air_date}</p>
                  ) : (
                    <p>item.first_air_date not working</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
