import React from "react";
import "./PersonPage.css";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import Navbar from "../../Navbar/Navbar";
import ScrollBar from "../../ScrollBar/ScrollBar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

export default function PersonPage() {
  const { id } = useParams();
  const onlyId = id.slice(0, 3);
  const pageType = "person";

  const navigate = useNavigate();

  const scrollbarPeoplePage = "people-page";

  const [sortedData, setSortedData] = React.useState();

  const [personValue, setPersonValue] = React.useState([]);
  const [personKnownAs, setPersonKnownAs] = React.useState([]);
  const [personMovieActingCast, setPersonMovieActingCast] = React.useState([]);
  const [personMovieActingCrew, setPersonMovieActingCrew] = React.useState([]);
  const [personTvActingCast, setPersonTvActingCast] = React.useState([]);
  const [personTvActingCrew, setPersonTvActingCrew] = React.useState([]);
  const [doubleArray, setDoubleArray] = React.useState([]);
  // const [releasedDate, setReleasedDate] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const fetch = require("node-fetch");

  const Person_Url =
    process.env.REACT_APP_BASE_URL + `person/${id}?language=en-US`;
  const Person_Acting_Movie =
    process.env.REACT_APP_BASE_URL + `person/${id}/movie_credits`;
  const Person_Acting_TV =
    process.env.REACT_APP_BASE_URL + `person/${id}/tv_credits`;

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
      const promise_0 = fetch(Person_Url, options).then((response) =>
        response.json()
      );
      const promise_1 = fetch(Person_Acting_Movie, options).then((response) =>
        response.json()
      );

      const promise_2 = fetch(Person_Acting_TV, options).then((response) =>
        response.json()
      );

      const results = await Promise.all([promise_0, promise_1, promise_2]);

      const data = results;

      console.log(data);

      setPersonValue(data[0]);
      setPersonKnownAs(data[0].also_known_as);
      setPersonMovieActingCast(data[1].cast);
      setPersonMovieActingCrew(data[1].crew);
      setPersonTvActingCast(data[2].cast);
      setPersonTvActingCrew(data[2].crew);
      // setDoubleArray(data[1].cast, data[1].crew);

      setIsLoading((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const PeopleWrapper = () => {
    const actingMovieYearArray = personMovieActingCast.sort(
      (a, b) =>
        a.release_date.replace(/-/g, "") - b.release_date.replace(/-/g, "")
    );
    const actingTvYearArray = personTvActingCast.sort(
      (a, b) =>
        a.first_air_date.replace(/-/g, "") - b.first_air_date.replace(/-/g, "")
    );
    const actingMovieAndTvYearArray =
      actingMovieYearArray.concat(actingTvYearArray);

    const crewMovieYearArray = personMovieActingCrew.sort(
      (a, b) =>
        a.release_date.replace(/-/g, "") - b.release_date.replace(/-/g, "")
    );
    const crewTvYearArray = personTvActingCrew.sort(
      (a, b) =>
        a.first_air_date.replace(/-/g, "") - b.first_air_date.replace(/-/g, "")
    );
    const crewMovieAndTvYearArray = crewMovieYearArray.concat(crewTvYearArray);

    const HandleRedirectToMovie = (e) => {
      let title = e.title.replace(/ /g, "-").toLowerCase();

      return navigate(`/movie/${e.id}-${title}`);
    };

    return (
      <div className="pp-wrapper">
        <div className="pp-left">
          <img
            className="pp-photo"
            src={
              process.env.REACT_APP_IMAGE_URL +
              "w300" +
              personValue.profile_path
            }
            alt=""
          />
          <div className="pp-cols-title">personal info</div>
          <div className="pp-cols">
            <div className="pp-col">
              <div className="pp-col-title">knows for</div>
              <div className="pp-col-text">
                {personValue.known_for_department}
              </div>
            </div>
            <div className="pp-col">
              <div className="pp-col-title">known credits</div>
              <div className="pp-col-text">100</div>
            </div>
            <div className="pp-col">
              <div className="pp-col-title">gender</div>
              <div className="pp-col-text">{personValue.gender}</div>
            </div>
            <div className="pp-col">
              <div className="pp-col-title">birthday</div>
              <div className="pp-col-text">{personValue.birthday}</div>
            </div>
            <div className="pp-col">
              <div className="pp-col-title">place of birth</div>
              <div className="pp-col-text">{personValue.place_of_birth}</div>
            </div>
            <div className="pp-col">
              <div className="pp-col-title">also known</div>
              <div className="pp-col-text-wrapper">
                {personKnownAs.map((item) => (
                  <div className="pp-col-text" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pp-right">
          <div className="pp-name">{personValue.name}</div>
          <div className="pp-biography">
            <div className="pp-biography-title">biography</div>
            <div className="pp-biography-text">{personValue.biography}</div>
          </div>
          <div className="pp-section">
            <h2>Known For</h2>
            <ScrollBar scrollbarType={scrollbarPeoplePage} id={id} />
            <div className="pp-acting-content">{/* <ArrayTable /> */}</div>
          </div>
          <div className="pp-section">
            <div className="pp-section-head">
              <h2>Acting</h2>
              <div className="pp-section-controls">
                <button className="pp-acting-btn">
                  all
                  <ArrowDropDownIcon />
                </button>
                <button className="pp-acting-btn">
                  department
                  <ArrowDropDownIcon />
                </button>
              </div>
            </div>
            <div className="pp-acting-content">
              {actingMovieAndTvYearArray.map((item) => (
                <div className="person-page-acting-wrapper" key={item.id}>
                  <div className="acting-year-wrapper">
                    {item.release_date ? (
                      <div className="acting-year">
                        {item.release_date.replace(/-/g, "").slice(0, 4)}
                      </div>
                    ) : (
                      <div className="acting-year">_</div>
                    )}
                    <div className="acting-circle">
                      <PanoramaFishEyeIcon />
                    </div>
                  </div>
                  <div className="acting-text">
                    <h4
                      onClick={(e) => HandleRedirectToMovie(item)}
                      className="acting-title"
                    >
                      {item.title}
                    </h4>
                    <div className="acting-character">
                      <p>as</p>

                      {item.character}
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
          <div className="pp-section">
            <h2>Production</h2>
            <div className="pp-acting-content">
              {crewMovieAndTvYearArray.map((item) => (
                <div className="person-page-acting-wrapper" key={item.id}>
                  <div className="acting-year-wrapper">
                    {item.release_date ? (
                      <div className="acting-year">
                        {item.release_date.replace(/-/g, "").slice(0, 4)}
                      </div>
                    ) : (
                      <div className="acting-year">_</div>
                    )}
                    <div className="acting-circle">
                      <PanoramaFishEyeIcon />
                    </div>
                  </div>
                  <div className="acting-text">
                    <h4 className="acting-title">{item.title}</h4>
                    <div className="acting-character">
                      <p>as</p>

                      {item.job}
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="person-page">
      <Navbar />
      <div className="container">
        {isLoading === false ? <Loading /> : <PeopleWrapper />}
      </div>
    </div>
  );
}
