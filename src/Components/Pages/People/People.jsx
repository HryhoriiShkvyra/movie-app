import React from "react";
import "./People.css";
import PersonIcon from "@mui/icons-material/Person";
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";

export default function People() {
  const [personArray, setPersonArray] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetch = require("node-fetch");

  const url =
    "https://api.themoviedb.org/3/person/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0",
    },
  };

  const FetchData = () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setPersonArray(data.results);
        console.log(data.results);
        setIsLoading(true);
      })
      .catch((err) => console.error("error:" + err));
  };

  React.useEffect(() => {
    FetchData();
    console.log(
      "need to group up all roles in person-card-know_for to one div"
    );
  }, []);

  return (
    <div className="people">
      <div className="container">
        <div className="title">
          <h2>Popular People</h2>
        </div>
        {isLoading ? (
          <div className="people-wrapper">
            {personArray.map((item) => (
              <Link
                className="person-card"
                key={item.id}
                to={`/person/${item.id}-${item.name}`}
              >
                <div className="person-card-img-wrapper">
                  {item.profile_path ? (
                    <img
                      className="person-card-img"
                      src={
                        process.env.REACT_APP_IMAGE_URL +
                        "/w200" +
                        item.profile_path
                      }
                    />
                  ) : (
                    <div className="person-card-img-not-found">
                      <PersonIcon />
                    </div>
                  )}
                </div>
                <div className="person-card-text">
                  <div className="person-card-name">
                    <h2>{item.name}</h2>
                  </div>
                  <div className="person-card-know_for">
                    {item.known_for.map((i) => (
                      <p key={i.id}>
                        {i.original_title}
                        {"     "}
                      </p>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
