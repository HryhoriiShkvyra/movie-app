import React from "react";
import "./SearchItem.css";
import LandscapeIcon from "@mui/icons-material/Landscape";
import { useNavigate } from "react-router-dom";
import CastItem from "../../Cast/CastItem/CastItem";

export default function SearchItem({ item, searchValue, searchType }) {
  const [overview, setOverview] = React.useState([]);
  const navigate = useNavigate();

  // console.log(searchType);

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

  function handleRedirectToItem() {
    return navigate(`/search/${searchValue}/${item.id}`);
  }

  const SearchItem = () => {
    // if (item.poster_path) {
    //   return (
    //     <div className="searchItem" onClick={handleRedirectToItem}>
    //       {item.poster_path === null ? (
    //         <div className="searchItem-null-wrapper">
    //           <LandscapeIcon className="searchItem-null-icon" />
    //         </div>
    //       ) : (
    //         <img
    //           className="searchItem-poster"
    //           src={process.env.REACT_APP_IMAGE_URL + `w200` + item.poster_path}
    //           alt=""
    //         />
    //       )}
    //       {item.id}
    //       <div className="searchItem-text">
    //         <div className="searchItem-text-main">
    //           {item.title ? (
    //             <div className="searchItem-title">{item.title}</div>
    //           ) : (
    //             <div className="searchItem-title">{item.name}</div>
    //           )}
    //           {item.release_date ? (
    //             <div className="searchItem-release-date">
    //               {item.release_date}
    //             </div>
    //           ) : (
    //             <div className="searchItem-release-date">
    //               {item.first_air_date}
    //             </div>
    //           )}
    //         </div>
    //         {item.overview ? (
    //           <>
    //             {item.overview.length > 230 ? (
    //               <div>{overview} ...</div>
    //             ) : (
    //               <div className="searchItem-overview">{item.overview}</div>
    //             )}
    //           </>
    //         ) : null}
    //       </div>
    //     </div>
    //   );
    // } else if (item.logo_path === null) {
    //   return (
    //     <div className="searchItem" onClick={handleRedirectToItem}>
    //       <div className="searchItem-text">
    //         <div className="searchItem-text-main">
    //           <div className="searchItem-title">{item.name}</div>
    //           <div className="searchItem-release-date">{item.release_date}</div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }

    if (searchType === "movie") {
      return (
        <div className="searchItem" onClick={handleRedirectToItem}>
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
    } else if (searchType === "tv") {
      return (
        <div className="searchItem" onClick={handleRedirectToItem}>
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
    } else if (searchType === "people") {
      return <CastItem item={item} />;
    } else if (searchType === "collection") {
      return (
        <div>
          <div className="searchItem" onClick={handleRedirectToItem}>
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
    } else if (searchType === "keywords") {
      return <div className="searchItem-title">{item.name}</div>;
    } else if (searchType === "company") {
      return (
        <div className="searchItem-company">
          <div className="searchItem-title">{item.name}</div>
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
