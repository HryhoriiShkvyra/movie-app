import React from "react";
import ErrorIcon from "@mui/icons-material/Error";

export default function SearchTab({ dataArray, searchType, setSearchType }) {
  return (
    <div className="search-tab">
      <div className="search-page-results">
        <div className="search-page-results-title">Search Results</div>
        <div className="search-page-results-cols">
          <div
            onClick={(e) => setSearchType("tv")}
            className={
              searchType === "tv"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchType === "tv"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              TV Shows
            </span>
            <span
              className={
                searchType === "tv"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[1]}
            </span>
          </div>
          <div
            onClick={(e) => setSearchType("movie")}
            className={
              searchType === "movie"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchType === "movie"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Movies
            </span>
            <span
              className={
                searchType === "movie"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[0]}
            </span>
          </div>

          <div
            onClick={(e) => setSearchType("people")}
            className={
              searchType === "people"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchType === "people"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              People
            </span>
            <span
              className={
                searchType === "people"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[6]}
            </span>
          </div>
          <div
            onClick={(e) => setSearchType("collection")}
            className={
              searchType === "collection"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchType === "collection"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Collections
            </span>
            <span
              className={
                searchType === "collection"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[2]}
            </span>
          </div>

          <div
            onClick={(e) => setSearchType("keywords")}
            className={
              searchType === "keywords"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchType === "keywords"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Keywords
            </span>
            <span
              className={
                searchType === "keywords"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[4]}
            </span>
          </div>
          <div
            onClick={(e) => setSearchType("company")}
            className={
              searchType === "company"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchType === "company"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Companies
            </span>
            <span
              className={
                searchType === "company"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[3]}
            </span>
          </div>
          <div
            onClick={(e) => setSearchType("networks")}
            className={
              searchType === "networks"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchType === "networks"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Networks
            </span>
            <span
              className={
                searchType === "networks"
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
