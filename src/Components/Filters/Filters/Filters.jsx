import React from "react";
import "./Filters.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HelpIcon from "@mui/icons-material/Help";

export default function Filters() {
  const [filterState, setFilterState] = React.useState(false);
  const [filterSubState, setFilterSubState] = React.useState(false);
  const [filterSubStateValue, setFilterSubStateValue] = React.useState(
    "Popularity Descending"
  );

  const list = [
    "Popularity Descending",
    "Popularity Ascending",
    "Rating Descending",
    "Rating Ascending",
    "Release Date Descending",
    "Release Date Ascending",
    "Title (A-Z)",
    "Title (Z-A)",
  ];

  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western",
  ];

  const handleClickListBtn = (i) => {
    setFilterSubStateValue(i);
    setFilterSubState((prev) => !prev);
  };

  const HandleClickFilterState = () => {
    setFilterState((prev) => !prev);
    setFilterSubState(false);
  };

  return (
    <div className="filter-panel">
      {filterState ? (
        <div className="filter-panel-open">
          <div className="filter-btn">
            <div
              onClick={(e) => HandleClickFilterState()}
              className={filterState ? "filter-active" : "filter"}
            >
              <div className="filter-name">
                <h2>Filters</h2>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>

          <div className="filter">
            <div className="filter-title">
              <div className="filter-title-items">
                <h3>Show me</h3>
                <div className="filter-title-icon">
                  <HelpIcon />
                </div>
              </div>
            </div>
            <div className="filter-content">
              <div className="filter-radio-btns">
                <div className="filter-radio-btn">
                  <input
                    className="filter-radio"
                    type="radio"
                    name="filter-radio"
                    id=""
                  />
                  <h3 className="filter-radio-text">everything</h3>
                </div>
                <div className="filter-radio-btn">
                  <input
                    className="filter-radio"
                    type="radio"
                    name="filter-radio"
                    id=""
                  />
                  <h3 className="filter-radio-text">movies i haven't seen</h3>
                </div>
                <div className="filter-radio-btn">
                  <input
                    className="filter-radio"
                    type="radio"
                    name="filter-radio"
                    id=""
                  />
                  <h3 className="filter-radio-text">movies i have seen</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="filter">
            <div className="filter-title">
              <h3>Availabilities</h3>
            </div>
            <div className="filter-checkbox-wrapper">
              <input className="filter-checkbox" type="checkbox" content="#" />
              <span className="filter-checkbox-text">
                Search all availabilities?
              </span>
            </div>
          </div>

          <div className="filter">
            <div className="filter-title">
              <h3>Release Dates</h3>
            </div>
            <div className="filter-checkbox-wrapper">
              <input className="filter-checkbox" type="checkbox" content="#" />
              <span className="filter-checkbox-text">Search all releases?</span>
            </div>
            <div className="filter-dates-wrapper">
              <div className="filter-dates-item">
                <div className="filter-dates-text">from</div>
                <div className="filter-dates-calendar"></div>
              </div>
              <div className="filter-dates-item">
                <div className="filter-dates-text">to</div>
                <div className="filter-dates-calendar"></div>
              </div>
            </div>
          </div>

          <div className="filter">
            <div className="filter-title">
              <h3>Genres</h3>
            </div>
            <div className="filter-genres">
              {genres.map((item) => (
                <div className="filter-genre" key={item}>
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="filter">
            <div className="filter-title">
              <h3>Certifications</h3>
            </div>
          </div>

          <div className="filter">
            <div className="filter-title">
              <div className="filter-title-items">
                <h3>Show me</h3>
                <div className="filter-title-icon">
                  <HelpIcon />
                </div>
              </div>
            </div>
            <div
              onClick={(e) => setFilterSubState((prev) => !prev)}
              className="filter-btn-wrapper"
            >
              <span className="filter-sub-state-value">
                {filterSubStateValue}
              </span>
              <ArrowDropDownIcon />
            </div>
            <div
              className={
                filterSubState ? "filter-list-open" : "filter-list-closed"
              }
            >
              <div className="filter-list-wrapper">
                <div className="filter-list">
                  {list.map((i) => (
                    <div
                      onClick={(e) => handleClickListBtn(i)}
                      className={filterSubStateValue === i ? "" : "list-btn"}
                      key={i}
                    >
                      <div className="list-btn-flag"></div>
                      <h3
                        className={
                          filterSubStateValue === i
                            ? "filter-sub-state-value-active"
                            : "filter-sub-state-value"
                        }
                      >
                        <div className="filter-list-flag"></div>
                        {i}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="filter">
            <div className="filter-title">Sort Results By</div>
            <div
              onClick={(e) => setFilterSubState((prev) => !prev)}
              className="filter-btn-wrapper"
            >
              <span className="filter-sub-state-value">
                {filterSubStateValue}
              </span>
              <ArrowDropDownIcon />
            </div>
            <div
              className={
                filterSubState ? "filter-list-open" : "filter-list-closed"
              }
            >
              <div className="filter-list-wrapper">
                <div className="filter-list">
                  {list.map((i) => (
                    <div
                      onClick={(e) => handleClickListBtn(i)}
                      className={filterSubStateValue === i ? "" : "list-btn"}
                      key={i}
                    >
                      <div className="list-btn-flag"></div>
                      <h3
                        className={
                          filterSubStateValue === i
                            ? "filter-sub-state-value-active"
                            : "filter-sub-state-value"
                        }
                      >
                        {i}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      ) : (
        <div className="filter-panel-closed">
          <div className="filter-btn">
            <div
              onClick={(e) => setFilterState((prev) => !prev)}
              className="filter"
            >
              <div className="filter-name">
                <h2>Filters</h2>
                <KeyboardArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
