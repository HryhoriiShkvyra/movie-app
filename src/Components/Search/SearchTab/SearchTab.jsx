import React from "react";
import ErrorIcon from "@mui/icons-material/Error";

export default function SearchTab({
  dataArray,
  stateTypeRequest,
  setStateTypeRequest,
}) {
  return (
    <div className="search-tab">
      <div className="search-page-results">
        <div className="search-page-results-title">Search Results</div>
        <div className="search-page-results-cols">
          <div
            onClick={(e) => setStateTypeRequest("tv")}
            className={
              stateTypeRequest === "tv"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                stateTypeRequest === "tv"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              TV Shows
            </span>
            <span
              className={
                stateTypeRequest === "tv"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[1]}
            </span>
          </div>
          <div
            onClick={(e) => setStateTypeRequest("movie")}
            className={
              stateTypeRequest === "movie"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                stateTypeRequest === "movie"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Movies
            </span>
            <span
              className={
                stateTypeRequest === "movie"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[0]}
            </span>
          </div>

          <div
            onClick={(e) => setStateTypeRequest("people")}
            className={
              stateTypeRequest === "people"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                stateTypeRequest === "people"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              People
            </span>
            <span
              className={
                stateTypeRequest === "people"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[6]}
            </span>
          </div>
          <div
            onClick={(e) => setStateTypeRequest("collection")}
            className={
              stateTypeRequest === "collection"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                stateTypeRequest === "collection"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Collections
            </span>
            <span
              className={
                stateTypeRequest === "collection"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[2]}
            </span>
          </div>

          <div
            onClick={(e) => setStateTypeRequest("keywords")}
            className={
              stateTypeRequest === "keywords"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                stateTypeRequest === "keywords"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Keywords
            </span>
            <span
              className={
                stateTypeRequest === "keywords"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[4]}
            </span>
          </div>
          <div
            onClick={(e) => setStateTypeRequest("company")}
            className={
              stateTypeRequest === "company"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                stateTypeRequest === "company"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Companies
            </span>
            <span
              className={
                stateTypeRequest === "company"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[3]}
            </span>
          </div>
          <div
            onClick={(e) => setStateTypeRequest("networks")}
            className={
              stateTypeRequest === "networks"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                stateTypeRequest === "networks"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Networks
            </span>
            <span
              className={
                stateTypeRequest === "networks"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              ?
            </span>
          </div>
        </div>
      </div>
      <div className="search-page-results-bar">
        <div className="search-page-tip">
          <ErrorIcon />
          <span className="search-page-tip-text">
            Tip: You can use the 'y:' filter to narrow your results by year.
            Example: 'star wars y:1977'.
          </span>
        </div>
      </div>
    </div>
  );
}
