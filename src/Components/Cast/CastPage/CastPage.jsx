import React from "react";
import "./CastPage.css";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Navbar from "../../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import PersonPage from "../../Person/PersonPage/PersonPage";

export default function CrewPage() {
  const [itemValue, setItemValue] = React.useState();
  const [actors, setActors] = React.useState([]);
  const [crew, setCrew] = React.useState([]);
  const [releasedDate, setReleasedDate] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const { id } = useParams();
  const { searchValue } = useParams();
  const navigate = useNavigate();

  const [personId, setPersonId] = React.useState();
  // console.log(id)
  // console.log(searchValue)

  const fetch = require("node-fetch");

  const film_url =
    process.env.REACT_APP_BASE_URL + `movie/${id}?language=en-US`;
  const credits_url =
    process.env.REACT_APP_BASE_URL + `movie/${id}/credits?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0",
    },
  };

  const fetchData = async () => {
    try {
      const promise_0 = fetch(film_url, options).then((response) =>
        response.json()
      );
      const promise_1 = fetch(credits_url, options).then((response) =>
        response.json()
      );

      const request = await Promise.all([promise_0, promise_1]);

      const data = request;

      setItemValue(data[0]);
      setActors(data[1].cast);
      setCrew(data[1].crew);
      setReleasedDate(data[0].release_date);
      setIsLoading((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const CastPageWrapper = () => {
    return (
      <div className="cast-page-wrapper">
        <div className="cast-up-wrapper">
          <div className="container">
            <div className="cast-up">
              <img
                src={
                  process.env.REACT_APP_IMAGE_URL +
                  "/w200" +
                  itemValue.poster_path
                }
                alt=""
                className="cast-poster"
              />
              <div className="cast-page-text">
                <div className="cast-title-wrapper">
                  <div className="cast-title">
                    {itemValue.name ? itemValue.name : itemValue.title}
                  </div>
                  <div className="cast-year">({releasedDate.slice(0, 4)})</div>
                </div>
                <Link className="cast-btn" to={`/search/${searchValue}/${id}`}>
                  <div className="cast-btn-icon">
                    <ArrowBackRoundedIcon />
                  </div>
                  <div className="cast-btn-text">Back to main</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="cast-down">
            <div className="cast-peoples-wrapper">
              <div className="cast-peoples-label">Cast </div>
              {/* <div className="cast-peoples-label">Cast {actors.length}</div> */}
              <div className="cast-peoples">
                {actors.map((item) => (
                  <div className="cast-people" key={item.id}>
                    {item.profile_path === null ? (
                      <Link
                        to={`/person/${item.id}-${item.name}`}
                        value={item.id}
                        onClick={handleRedirectToPerson}
                        className="cast-people-photo-wrapper-icon"
                      >
                        <PersonRoundedIcon className="cast-people-photo-icon" />
                      </Link>
                    ) : (
                      <Link
                        to={`/person/${item.id}-${item.name}`}
                        value={item.id}
                        onClick={handleRedirectToPerson}
                        className="cast-people-photo-wrapper"
                      >
                        <img
                          src={
                            process.env.REACT_APP_IMAGE_URL +
                            "w200" +
                            item.profile_path
                          }
                          className="cast-people-photo"
                        />
                      </Link>
                    )}
                    <div className="cast-people-text">
                      <Link
                        to={`/person/${item.id}-${item.name}`}
                        value={item.id}
                        onClick={handleRedirectToPerson}
                        className="cast-people-name"
                      >
                        {item.name}
                      </Link>
                      <div className="cast-people-character">
                        {item.character}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="crew">
              <div className="cast-peoples-wrapper">
                <div className="cast-peoples-label">Crew</div>
                {/* <div className="cast-peoples-label">Crew {crew.length}</div> */}
                <div className="cast-peoples">
                  {crew.map((item) => (
                    <div className="cast-people" key={item.id}>
                      {item.profile_path === null ? (
                        <div className="cast-people-photo-wrapper-icon">
                          <PersonRoundedIcon
                            className="cast-people-photo-icon"
                            value={item.id}
                            onClick={handleRedirectToPerson}
                          />
                        </div>
                      ) : (
                        <div className="cast-people-photo-wrapper">
                          <img
                            src={
                              process.env.REACT_APP_IMAGE_URL +
                              "w200" +
                              item.profile_path
                            }
                            alt=""
                            className="cast-people-photo"
                            value={item.id}
                            onClick={handleRedirectToPerson}
                          />
                        </div>
                      )}
                      <div className="cast-people-text">
                        <div className="cast-people-name">{item.name}</div>
                        <div className="cast-people-character">{item.job}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleRedirectToPerson = (e) => {
    const itemId = e.target.getAttribute("value");
    return navigate(<PersonPage id={id} />);
  };

  return (
    <>
      <Navbar />
      <div className="cast-page">
        {isLoading === true ? <CastPageWrapper /> : <Loading />}
      </div>
    </>
  );
}
