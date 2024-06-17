import React from "react";
import "./CrewPage.css";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Navbar from "../../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import PersonPage from "../../Person/PersonPage/PersonPage";
import CastItem from "../CrewItem/CrewItem";
import CrewItem from "../CrewItem/CrewItem";

export default function CrewPage() {
  const [itemValue, setItemValue] = React.useState();
  const [actors, setActors] = React.useState([]);
  // const [crew, setCrew] = React.useState([]);
  // const [updatedCrew, setUpdatedCrew] = React.useState([]);
  const [crew, setCrew] = React.useState([]);
  const [updatedCrewById, setUpdatedCrewById] = React.useState({});
  const [updatedCrewByDepartment, setUpdatedCrewByDepartment] = React.useState(
    {}
  );
  const [newUpdatedCrew, setNewUpdatedCrew] = React.useState({});
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

  React.useEffect(() => {
    fetchData();
  }, []);

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

      console.log(data[1]);
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
    if (crew.length > 0) {
      handleDuplicate();
      // crewByIdObject();
    }
  }, [crew]);

  const handleDuplicate = () => {
    // const crewByIdObject = {};
    // crew.forEach((item) => {
    //   if (crewByIdObject[item.id]) {
    //     crewByIdObject[item.id].job.push(item.job);
    //   } else {
    //     crewByIdObject[item.id] = {
    //       id: item.id,
    //       name: [item.name],
    //       job: [item.job],
    //       photo: item.profile_path,
    //       department: item.known_for_department,
    //       popularity: item.popularity,
    //     };
    //   }
    // });
    // const updatedCrewByIdObject = JSON.parse(JSON.stringify(crewByIdObject));
    // setUpdatedCrewById((prevState) => ({
    //   ...prevState,
    //   crewByIdObject: updatedCrewByIdObject,
    // }));

    const crewByDepartmentObject = {};
    crew.forEach((item) => {
      const department = item.known_for_department;

      if (crewByDepartmentObject[department]) {
        crewByDepartmentObject[department].push({
          id: item.id,
          name: [item.name],
          job: [item.job],
          photo: item.profile_path,
          department: item.known_for_department,
          popularity: item.popularity,
        });
      } else {
        crewByDepartmentObject[item.department] = [
          {
            id: item.id,
            name: [item.name],
            job: [item.job],
            photo: item.profile_path,
            department: item.known_for_department,
            popularity: item.popularity,
          },
        ];
      }
    });

    const updatedCrewByDepartmentObject = JSON.parse(
      JSON.stringify(crewByDepartmentObject)
    );
    setUpdatedCrewByDepartment((prevState) => ({
      ...prevState,
      crewByDepartmentObject: updatedCrewByDepartmentObject,
    }));

    // Object.values(updatedCrewByDepartment.crewByDepartmentObject).flat();

    // Object.values(updatedCrewByDepartment.crewByDepartmentObject);
    // console.log(Object.entries(crewByDepartmentObject));

    console.log(crewByDepartmentObject);
  };

  // const crewByIdObject = () => {
  //   console.log(updatedCrewByDepartment);
  //   const crewByIdObject = {};

  //   console.log(
  //     "Check if updatedCrewByDepartment and crewByDepartmentObject are not undefined or null"
  //   );
  //   if (updatedCrewByDepartment?.crewByDepartmentObject) {
  //     const crewData = Object.values(
  //       updatedCrewByDepartment.crewByDepartmentObject
  //     ).flat();

  //     console.log(crewData);

  //     crewData.forEach((item) => {
  //       if (crewByIdObject[item.id]) {
  //         crewByIdObject[item.id].job.push(item.job);
  //       } else {
  //         crewByIdObject[item.id] = {
  //           id: item.id,
  //           name: item.name,
  //           job: item.job,
  //           photo: item.profile_path,
  //           department: item.known_for_department,
  //           popularity: item.popularity,
  //         };
  //       }
  //     });

  //     const updatedCrewByIdObject = JSON.parse(JSON.stringify(crewByIdObject));
  //     setUpdatedCrewById((prevState) => ({
  //       ...prevState,
  //       crewByIdObject: updatedCrewByIdObject,
  //     }));
  //   }
  //   console.log(crewByIdObject);
  // };

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
                <Link className="cast-btn" to={`/${searchValue}/${id}`}>
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
                {actors.map((actor, index) => (
                  <CastItem key={`${actor.id}-${index}`} member={actor} />
                ))}
              </div>
            </div>

            <div className="crew">
              <div className="cast-peoples-wrapper">
                <div className="cast-peoples-label">Crew</div>
                {/* {updatedCrewById && updatedCrewById.crewByIdObject
                  ? Object.values(updatedCrewById.crewByIdObject || {}).map(
                      (crewMember, index) => (
                        <div key={`${crewMember}-${index}`}>
                          <CrewItem crewMember={crewMember} />
                        </div>
                      )
                    )
                  : null} */}
                {/* <div className="cast-peoples-label">Crew {crew.length}</div> */}

                <div className="cast-peoples">
                  {updatedCrewByDepartment &&
                  updatedCrewByDepartment.crewByDepartmentObject
                    ? Object.entries(
                        updatedCrewByDepartment.crewByDepartmentObject || {}
                      )
                        .sort()
                        .map(([department, crewMembers], index) => (
                          <div
                            key={`${department}-${index}`}
                            className="crewMembers-wrapper"
                          >
                            <h2>{department}</h2>
                            <div className="crewMember">
                              {crewMembers
                                // .sort((a, b) => b.popularity - a.popularity) need to understand how to sort this items by popularity in top level
                                .map(
                                  (member, memberIndex) => (
                                    <CrewItem
                                      key={`${member}-${memberIndex}`}
                                      member={member}
                                    />
                                  )
                                  // Array.isArray(member) ? (
                                  //   <li key={`${department}-${memberIndex}`}>
                                  //     Array: {member.length} items
                                  //   </li>
                                  // ) : (
                                  //   <li key={`${department}-${memberIndex}`}>
                                  //     {member.name ||
                                  //       member.title ||
                                  //       `Object ${memberIndex + 1}`}
                                  //   </li>
                                  // )
                                )}
                            </div>
                          </div>
                        ))
                    : null}
                  {/* {updatedCrewByDepartment &&
                  updatedCrewByDepartment.crewByDepartmentObject
                    ? Object.entries(
                        updatedCrewByDepartment.crewByDepartmentObject || {}
                      ).map((crewByDepartment, category, index) => (
                        <div key={`${crewByDepartment} - ${index}`}></div>
                      ))
                    : null} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  {
    /* {updatedCrewById.map((item) => (
                            <div>{item.job}</div>
                          ))} */
  }
  {
    /* {crewDepartment.map((departmentItems, index) => (
                            <div key={`${departmentItems}-${index}`}>
                              <CrewItem crewMember={departmentItems} />
                              {departmentItems.department}
                            </div>
                          ))} */
  }

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
