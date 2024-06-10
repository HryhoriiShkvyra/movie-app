import React from "react";
import "./SearchItem.css";
import LandscapeIcon from "@mui/icons-material/Landscape";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PersonIcon from "@mui/icons-material/Person";

export default function SearchItem({ item, stateTypeRequest }) {
  const [overview, setOverview] = React.useState([]);
  const navigate = useNavigate();

  const handleOverviewLength = async () => {
    const handleOverview = await item.overview;
    const subString =
      typeof (await handleOverview) === "string"
        ? handleOverview.substring(0, 230)
        : "";
    setOverview(subString);
  };

  React.useEffect(() => {
    handleOverviewLength();
  }, [handleOverviewLength]);

  const HandleRedirectToMovie = (value) => {
    const cleanString = (title) => {
      const cleanedString = title
        .replace(/[^a-zA-Z0-9]/g, "-")
        .replace(/[0-9]/g, "");
      const words = cleanedString.toLowerCase().match(/\b\w+\b/g);
      return words.join("-");
    };
    const properMovieTitle = cleanString(value.title);

    console.log(properMovieTitle);

    if (/\d/.test(value.title) === true) {
      return navigate(`/movie/${value.id}` + "-" + `${properMovieTitle}`);
    } else return navigate(`/movie/${value.id}` + "-" + `${properMovieTitle}`);
  };

  const HandleRedirectToTv = (value) => {
    const cleanString = (name) => {
      const cleanedString = name
        .replace(/[^a-zA-Z0-9]/g, "-")
        .replace(/[0-9]/g, "");
      const words = cleanedString.toLowerCase().match(/\b\w+\b/g);
      return words.join("-");
    };
    const properTvName = cleanString(value.name);

    if (/\d/.test(value.name) === true) {
      return navigate(`/tv/${value.id}` + "-" + `${properTvName}`);
    } else return navigate(`/tv/${value.id}` + "-" + `${properTvName}`);
  };

  const HandleRedirectToCollection = (value) => {
    const cleanString = (name) => {
      const cleanedString = name
        .replace(/[^a-zA-Z0-9]/g, "-")
        .replace(/[0-9]/g, "");
      const words = cleanedString.toLowerCase().match(/\b\w+\b/g);
      return words.join("-");
    };
    const properCollectionName = cleanString(value.name);

    if (/\d/.test(value.name) === true) {
      return navigate(
        `/collection/${value.id}` + "-" + `${properCollectionName}`
      );
    } else
      return navigate(
        `/collection/${value.id}` + "-" + `${properCollectionName}`
      );
  };

  function HandleOriginalName(item) {
    if (item.known_for && item.known_for.length > 0) {
      if (item.known_for[0].original_name) {
        return (
          <div className="searchItem-people-role">
            {item.known_for.map((name, index) => (
              <div key={name.id + "-" + index}>{name.original_name}</div>
            ))}
          </div>
        );
      } else {
        return (
          <div className="searchItem-people-role">
            {item.known_for.map((title, index) => (
              <div key={title.id + "-" + index}>{title.title}</div>
            ))}
          </div>
        );
      }
    } else {
      return null;
    }
  }

  function HandlePosterPath(item) {
    if (item.profile_path) {
      return (
        <div className="searchItem-people-photo-wrapper">
          <img
            className="searchItem-people-photo"
            src={process.env.REACT_APP_IMAGE_URL + "/w200" + item.profile_path}
          />
        </div>
      );
    } else {
      return (
        <div className="searchItem-people-no-photo">
          <div className="searchItem-people-icon">
            <PersonIcon />
          </div>
        </div>
      );
    }
  }

  const HandleRedirectToPeople = (person) => {
    let name = person.name;

    const cleanString = (name) => {
      const cleanedString = name.replace(/[^a-zA-Z0-9]/g, "-");
      const words = cleanedString.toLowerCase().match(/\b\w+\b/g);
      return words.join("-");
    };
    const properName = cleanString(name);

    navigate(`/person/${person.id}` + "-" + `${properName}`);
  };

  const MovieOrTvItem = (value) => {
    if (stateTypeRequest === "movie") {
      return HandleRedirectToMovie(value);
    } else if (stateTypeRequest === "tv") {
      return HandleRedirectToTv(value);
    } else if (stateTypeRequest === "collection") {
      return HandleRedirectToCollection(value);
    } else return console.log("error");
  };

  const SearchItem = () => {
    React.useEffect(() => {
      console.log(stateTypeRequest);
      // console.log(stateTypeRequest);
      // console.log(item.name);
    }, []);

    if (stateTypeRequest === "movie") {
      return (
        <div className="searchItem" onClick={(e) => MovieOrTvItem(item)}>
          {item.poster_path === null ? (
            <div className="searchItem-null-wrapper">
              <LandscapeIcon className="searchItem-null-icon" />
            </div>
          ) : (
            <img
              className="searchItem-poster"
              src={process.env.REACT_APP_IMAGE_URL + `w200` + item.poster_path}
              alt=""
            />
          )}
          {item.overview ? (
            <div className="searchItem-text">
              <div className="searchItem-text-main">
                <div className="searchItem-title">{item.title}</div>
                <div className="searchItem-release-date">
                  {item.release_date}
                </div>
              </div>
              {item.overview ? (
                <>
                  {item.overview.length > 230 ? (
                    <div>{overview} ...</div>
                  ) : (
                    <div className="searchItem-overview">{item.overview}</div>
                  )}
                </>
              ) : null}
            </div>
          ) : (
            <div className="searchItem-text">
              <div className="searchItem-text-main">
                <div className="searchItem-title">
                  {item.title} <p>({item.original_title})</p>
                </div>
                <div className="searchItem-release-date">
                  {item.release_date}
                </div>
              </div>
              {item.overview ? (
                <>
                  {item.overview.length > 230 ? (
                    <div>{overview} ...</div>
                  ) : (
                    <div className="searchItem-overview">{item.overview}</div>
                  )}
                </>
              ) : null}
            </div>
          )}
        </div>
      );
    } else if (stateTypeRequest === "tv") {
      return (
        <div className="searchItem" onClick={(e) => MovieOrTvItem(item)}>
          {item.poster_path === null ? (
            <div className="searchItem-null-wrapper">
              <LandscapeIcon className="searchItem-null-icon" />
            </div>
          ) : (
            <img
              className="searchItem-poster"
              src={process.env.REACT_APP_IMAGE_URL + `w200` + item.poster_path}
              alt=""
            />
          )}
          {item.overview ? (
            <div className="searchItem-text">
              <div className="searchItem-text-main">
                <div className="searchItem-title">{item.name}</div>
                <div className="searchItem-release-date">
                  {item.first_air_date}
                </div>
              </div>
              {item.overview ? (
                <>
                  {item.overview.length > 230 ? (
                    <div>{overview} ...</div>
                  ) : (
                    <div className="searchItem-overview">{item.overview}</div>
                  )}
                </>
              ) : null}
            </div>
          ) : (
            <div className="searchItem-text">
              <div className="searchItem-text-main">
                <div className="searchItem-title">
                  {item.name} <p>({item.original_name})</p>
                </div>
                <div className="searchItem-release-date">
                  {item.first_air_date}
                </div>
              </div>
              {item.overview ? (
                <>
                  {item.overview.length > 230 ? (
                    <div>{overview} ...</div>
                  ) : (
                    <div className="searchItem-overview">{item.overview}</div>
                  )}
                </>
              ) : null}
            </div>
          )}
        </div>
      );
    } else if (stateTypeRequest === "people") {
      // return <CrewItem item={item} />;
      return (
        <div className="searchItem-people-item">
          <div className="searchItem-people-photo-wrapper">
            {HandlePosterPath(item)}
            {/* <div className="searchItem-people-photo">
              <img
                src={
                  process.env.REACT_APP_IMAGE_URL + "/w200" + item.profile_path
                }
              />
            </div>
            <div className="searchItem-people-no-photo">
              <div className="searchItem-people-icon">
                <PersonIcon />
              </div>
            </div> */}
          </div>
          <div className="searchItem-people-text">
            <div
              onClick={(e) => HandleRedirectToPeople(item)}
              className="searchItem-people-title"
            >
              <h2>{item.name}</h2>
            </div>
            <div className="searchItem-people-sup-title-wrapper">
              <div className="searchItem-people-position">
                {item.known_for_department}
              </div>
              <div className="searchItem-people-sub-icon">
                <FiberManualRecordIcon />
              </div>
              {HandleOriginalName(item)}
              {/* <div className="searchItem-people-role">
                {item.known_for.map((item, index) => (
                  <div key={item.id + "-" + index}>{item.original_name}</div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      );
    } else if (stateTypeRequest === "collection") {
      return (
        <div>
          <div className="searchItem" onClick={(e) => MovieOrTvItem(item)}>
            {item.poster_path === null ? (
              <div className="searchItem-null-wrapper">
                <LandscapeIcon className="searchItem-null-icon" />
              </div>
            ) : (
              <img
                className="searchItem-poster"
                src={
                  process.env.REACT_APP_IMAGE_URL + `w200` + item.poster_path
                }
                alt=""
              />
            )}
            <div className="searchItem-text-collectionType">
              <div className="searchItem-text-main">
                {item.title ? (
                  <div className="searchItem-title">{item.title}</div>
                ) : (
                  <div className="searchItem-title">{item.name}</div>
                )}
              </div>
              {item.overview ? (
                <>
                  {item.overview.length > 230 ? (
                    <div>{overview} ...</div>
                  ) : (
                    <div className="searchItem-overview">{item.overview}</div>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </div>
      );
    } else if (stateTypeRequest === "keywords") {
      return <div className="searchItem-title">{item.name}</div>;
    } else if (stateTypeRequest === "company") {
      return (
        <div className="searchItem-company">
          <div className="searchItem-title">{item.name}</div>
        </div>
      );
    } else if (stateTypeRequest === "networks") {
      return (
        <div className="searchItem-company">
          <div className="searchItem-title">{item}l</div>
        </div>
      );
    }
  };

  return (
    <div>
      <SearchItem />
    </div>
  );
}
