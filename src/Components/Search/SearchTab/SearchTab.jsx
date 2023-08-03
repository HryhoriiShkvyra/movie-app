import React from "react";

export default function SearchTab({ dataArray, searchBtn, setSearchBtn }) {
  return (
    <div className="search-tab">
      <div className="search-page-results">
        <div className="search-page-results-title">Search Results</div>
        <div className="search-page-results-cols">
          <div
            onClick={(e) => setSearchBtn("tv")}
            className={
              searchBtn === "tv"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchBtn === "tv"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              TV Shows
            </span>
            <span
              className={
                searchBtn === "tv"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[1]}
            </span>
          </div>
          <div
            onClick={(e) => setSearchBtn("movie")}
            className={
              searchBtn === "movie"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchBtn === "movie"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Movies
            </span>
            <span
              className={
                searchBtn === "movie"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[0]}
            </span>
          </div>
          <div
            onClick={(e) => setSearchBtn("collection")}
            className={
              searchBtn === "collection"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchBtn === "collection"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Collections
            </span>
            <span
              className={
                searchBtn === "collection"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[2]}
            </span>
          </div>
          <div
            onClick={(e) => setSearchBtn("companies")}
            className={
              searchBtn === "companies"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchBtn === "companies"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Companies
            </span>
            <span
              className={
                searchBtn === "companies"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[3]}
            </span>
          </div>
          <div
            onClick={(e) => setSearchBtn("people")}
            className={
              searchBtn === "people"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchBtn === "people"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              People
            </span>
            <span
              className={
                searchBtn === "people"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[6]}
            </span>
          </div>
          <div
            onClick={(e) => setSearchBtn("keywords")}
            className={
              searchBtn === "keywords"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchBtn === "keywords"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Keywords
            </span>
            <span
              className={
                searchBtn === "keywords"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              {dataArray[4]}
            </span>
          </div>
          <div
            onClick={(e) => setSearchBtn("networks")}
            className={
              searchBtn === "networks"
                ? "search-page-results-col-active"
                : "search-page-results-col"
            }
          >
            <span
              className={
                searchBtn === "networks"
                  ? "search-page-results-col-title-active"
                  : "search-page-results-col-title"
              }
            >
              Networks
            </span>
            <span
              className={
                searchBtn === "networks"
                  ? "search-page-results-col-result-active"
                  : "search-page-results-col-result"
              }
            >
              ?
            </span>
          </div>
        </div>
      </div>
      {/* {movieArray.map((item) => (
          <div key={item.id}>{item.id}</div>
        ))} */}
    </div>
  );
}
