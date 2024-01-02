import React from "react";
import "./CardCast.css";
import Loading from "../../Loading/Loading";
import { Link, useParams } from "react-router-dom";
// import CrewPage from "../../Crew/CastPage/CastPage";

export default function CardCast() {
  const [isLoading, setIsLoading] = React.useState();
  const [castValue, setCastValue] = React.useState([]);
  const [personId, setPersonId] = React.useState();

  const { searchValue } = useParams();
  const { id } = useParams();
  const { requestType } = useParams();
  const fetch = require("node-fetch");

  const url = `https://api.themoviedb.org/3/${requestType}/${id}/credits?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0",
    },
  };

  React.useEffect(() => {
    function request() {
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          setCastValue(data.cast);
          setIsLoading((prev) => !prev);
        })
        .catch((err) => console.error("error:" + err));
    }

    request();
  }, []);

  const handlePersonId = (e) => {
    const personId = e.target.getAttribute("value");
    console.log(personId);
  };

  return (
    <div>
      {isLoading === true ? (
        <div className="card-cast-wrapper">
          <span className="card-cast-top">top billed cast</span>
          <div className="card-cast">
            {castValue.slice(0, 9).map((item) => (
              // <div key={item.id} value={item.id} onClick={handlePersonId}>
              //   press here, in console you should see item-id
              // </div>
              <div
                className="card-cast-item"
                key={item.id}
                value={item.id}
                onClick={handlePersonId}
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
      ) : (
        <div className="tcast-wrapper">
          <h1>
            {" "}
            .card-cast-wrapper clearly busy right now, and we have no access to
            this part of .file and you need to change parent name
          </h1>
          {/* <span className="cast-text">top billed cast</span>
          <div className="cast">
            <div className="cast-unfilled-photo"></div>
            <div className="cast-unfilled-name"></div>
            <div className="cast-unfilled-character"></div>
          </div> */}
        </div>
      )}

      <Link
        to={`/search/${searchValue}/${id}/cast`}
        className="full-cast-and-crew-link"
      >
        full cast & crew
      </Link>
    </div>
  );
}
