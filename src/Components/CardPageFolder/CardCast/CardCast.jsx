import React from "react";
import "./CardCast.css";
import Loading from "../../Loading/Loading";
import { Link, useParams, useNavigate } from "react-router-dom";
import ScrollBar from "../../ScrollBar/ScrollBar";
// import CrewPage from "../../Crew/CastPage/CastPage";

export default function CardCast() {
  const [isLoading, setIsLoading] = React.useState();
  const [castValue, setCastValue] = React.useState([]);
  const [personId, setPersonId] = React.useState();

  const scrollbarCarsCast = "card-cast";

  const { searchValue } = useParams();
  const { id } = useParams();
  const { requestType } = useParams();
  const fetch = require("node-fetch");
  const navigate = useNavigate();

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
          // console.log(data);
          setCastValue(data);
          setIsLoading((prev) => !prev);
        })
        .catch((err) => console.error("error:" + err));
    }

    request();
  }, []);

  // const handleRedirectToCardCast = (e) => {
  //   return navigate(`/${requestType}/${id}`);
  // };

  return (
    <div>
      {isLoading === true ? (
        <ScrollBar
          scrollbarType={scrollbarCarsCast}
          id={castValue.id}
          requestType={requestType}
        />
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
        to={`/${requestType}/${id}/cast`}
        className="full-cast-and-crew-link"
      >
        full cast & crew
      </Link>
    </div>
  );
}
