import React from "react";
import "./SearchItem.css";
import LandscapeIcon from "@mui/icons-material/Landscape";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import CastItem from "../../Cast/CastItem/CastItem";
import MTVPage from "../../MTV/MTVPage/MTVPage";

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
  }, []);

  // function typeRequest() {
  //   const type = () => {
  //     if (item.title === undefined) {
  //       return item.name;
  //     } else {
  //       return item.title;
  //     }
  //   };
  //   console.log(type);
  //   return type;
  // }

  function HandleUrlValue() {
    const url = `${item.id}-${item.title}`;
    const fixedUrl = url.replace(/ /g, "-").toLowerCase();
    return fixedUrl;
  }

  const ProperUlr = HandleUrlValue();

  function HandleRedirectToItem() {
    return navigate(`/${stateTypeRequest}/${ProperUlr}`);
  }
  const SearchItem = () => {
    React.useEffect(() => {
      console.log(stateTypeRequest);
      console.log(item.name);
      HandleUrlValue();
    }, []);

    if (stateTypeRequest === "movie") {
      return (
        <div className="searchItem" onClick={HandleRedirectToItem}>
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
          <div className="searchItem-text">
            <div className="searchItem-text-main">
              {item.title ? (
                <div className="searchItem-title">{item.title}</div>
              ) : (
                <div className="searchItem-title">{item.name}</div>
              )}
              {item.release_date ? (
                <div className="searchItem-release-date">
                  {item.release_date}
                </div>
              ) : (
                <div className="searchItem-release-date">
                  {item.first_air_date}
                </div>
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
      );
    } else if (stateTypeRequest === "tv") {
      return (
        <div className="searchItem" onClick={HandleRedirectToItem}>
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
          <div className="searchItem-text">
            <div className="searchItem-text-main">
              {item.title ? (
                <div className="searchItem-title">{item.title}</div>
              ) : (
                <div className="searchItem-title">{item.name}</div>
              )}
              {item.release_date ? (
                <div className="searchItem-release-date">
                  {item.release_date}
                </div>
              ) : (
                <div className="searchItem-release-date">
                  {item.first_air_date}
                </div>
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
      );
    } else if (stateTypeRequest === "people") {
      return <CastItem item={item} />;
    } else if (stateTypeRequest === "collection") {
      return (
        <div>
          <div className="searchItem" onClick={HandleRedirectToItem}>
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
