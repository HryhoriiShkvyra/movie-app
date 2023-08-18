import React from "react";
import "./PersonPage.css";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import Navbar from "../../Navbar/Navbar";
import ScrollBar from "../../ScrollBar/ScrollBar";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";

export default function PersonPage() {
  const { id } = useParams();
  const onlyId = id.slice(0, 3);
  const pageType = "person";

  const [personValue, setPersonValue] = React.useState([]);
  const [personKnownAs, setPersonKnownAs] = React.useState([]);
  const [personActingCast, setPersonActingCast] = React.useState([]);
  const [personActingCrew, setPersonActingCrew] = React.useState([]);
  const [years, setYears] = React.useState();
  // const [releasedDate, setReleasedDate] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const fetch = require("node-fetch");

  const Person_Url =
    process.env.REACT_APP_BASE_URL + `person/${onlyId}?language=en-US`;
  const Person_Acting =
    process.env.REACT_APP_BASE_URL + `person/${onlyId}/movie_credits`;

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
      const promise_1 = fetch(Person_Acting, options).then((response) =>
        response.json()
      );

      const results = await Promise.all([promise_0, promise_1]);

      const data = results;

      setPersonValue(data[0]);
      setPersonKnownAs(data[0].also_known_as);
      setPersonActingCast(data[1].cast);
      setPersonActingCrew(data[1].crew);
      // setYearsLength(data[1);
      setIsLoading((prev) => !prev);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  function ArrayTable() {
    function DataSequence() {
      const array = personActingCast.map((item) =>
        item.release_date.replace(/-/g, "")
      );

      array.sort((a, b) => {
        return a.localeCompare(b);
      });

      console.log(array);

      // return (
      //   <div>
      //     {array.map((item) => (
      //       <div key={item}>{item}</div>
      //     ))}
      //   </div>
      // );
    }

    function compareReleaseDates(a, b) {
      return b.release_date.localeCompare(a.release_date);
    }

    const otherArray = personActingCast;

    const releaseDates = DataSequence();

    const newArray = otherArray.sort(compareReleaseDates);

    const limitedArray = () => {
      const array = personActingCast.map((item) =>
        item.release_date.replace(/-/g, "")
      );

      array.sort((a, b) => {
        return a.localeCompare(b);
      });

      const uniqYear = [];

      array.slice().forEach((year) => {
        if (!uniqYear.includes(year.slice(0, 4))) {
          uniqYear.push(year.slice(0, 4));
        }
      });
      console.log(uniqYear);

      return uniqYear;
    };

    limitedArray();

    return (
      <div>
        {newArray.map((item) => {
          if (item.release_date === limitedArray) {
            <div className="pp-section-item" key={item.id}>
              <div className="pp-section-release-date">
                {item.release_date.slice(0, 4)} <PanoramaFishEyeRoundedIcon />
              </div>
              <div className="pp-section-text">
                <div className="pp-section-title">{item.title}</div>
                <div className="pp-section-character">{item.character}</div>
              </div>
            </div>;
          }
        })}
      </div>
    );
  }

  function testFunc() {
    const array0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const array1 = [2, 3, 5, 7, 8];
    const container = [];

    array0.map((item) => {
      if (item === array1) {
        container.push(item);
      }
    });

    console.log(container);
  }

  testFunc();

  const PeopleWrapper = () => {
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
          <ScrollBar pageType={pageType} id={personValue.id} />
          <div className="pp-section">
            <div className="pp-section-controls">
              <span className="pp-section-title">Acting</span>
              <div className="pp-section-sort">
                <button className="pp-acting-title">
                  <ChevronRightRoundedIcon />
                  all
                </button>
                <button className="pp-acting-title">
                  <ChevronRightRoundedIcon />
                  department
                </button>
              </div>
            </div>
            <div className="pp-acting-content">
              <ArrayTable />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // const Array = async () => {
  //     const yearArray = await
  // }

  return (
    <div className="person-page">
      <Navbar />
      <div className="container">
        {isLoading === false ? <Loading /> : <PeopleWrapper />}
      </div>
    </div>
  );
}
