import React from "react";
import "./SearchItem.css";
import LandscapeIcon from "@mui/icons-material/Landscape";
import { useNavigate } from "react-router-dom";

export default function SearchItem({ item, searchValue }) {
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

  function redirectToItem() {
    return navigate(`/search/${searchValue}/${item.id}`);
  }

  return (
    <div className="searchItem" onClick={redirectToItem}>
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
          <div className="searchItem-release-date">{item.release_date}</div>
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
}
