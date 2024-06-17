import React from "react";
import "./KeywordPage.css";
import backgroundIMG from "../../Images/light_blue.svg";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SearchItem from "../Search/SearchItem/SearchItem";
import Loading from "../Loading/Loading";

export default function KeywordPage() {
  const navigate = useNavigate();

  const [temporaryData, setTemporaryData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(null);

  let NavbarType = "keywordPage";

  let { id } = useParams();
  let { requestType } = useParams();

  const fetch = require("node-fetch");

  const url = "https://api.themoviedb.org/3/movie/550language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0",
    },
  };

  React.useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    setIsLoading(false);
    try {
      const response = await fetch(url, options);
      const jsonData = await response.json();

      console.log(jsonData);
      setTemporaryData(jsonData);
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(requestType);

  function TopBar() {
    if (requestType === "movie") {
      return (
        <div className="top-bar">
          <div className="top-bar-wrapper">
            <div className="top-bar-type">kung fu</div>
            <div className="top-bar-count-wrapper">
              <div className="top-bar-count-type">movies</div>
              <div className="top-bar-count">( count )</div>
            </div>
          </div>
        </div>
      );
    } else if (requestType === "tv") {
      return (
        <div className="top-bar">
          {" "}
          <div className="top-bar-wrapper">
            <div className="top-bar-type"></div>
            <div className="top-bar-count-wrapper">
              <div className="top-bar-count-type">tvs</div>
              <div className="top-bar-count">count</div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="keyword-page" src={backgroundIMG}>
      {isLoading === true ? (
        <div className="keyword-page-wrapper">
          {TopBar()}
          <Navbar navbarType={NavbarType} />
          <div className="keyword-page-search-items">
            <SearchItem item={temporaryData} stateTypeRequest={"movie"} />
            <SearchItem item={temporaryData} stateTypeRequest={"movie"} />
            <SearchItem item={temporaryData} stateTypeRequest={"movie"} />
            <SearchItem item={temporaryData} stateTypeRequest={"movie"} />
            <SearchItem item={temporaryData} stateTypeRequest={"movie"} />
            <SearchItem item={temporaryData} stateTypeRequest={"movie"} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
