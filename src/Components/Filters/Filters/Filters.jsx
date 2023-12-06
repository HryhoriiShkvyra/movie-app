import React from "react";
import "./Filters.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HelpIcon from "@mui/icons-material/Help";
import VCalendar from "../../Calendar/Calendar";

export default function Filters() {
  const [filterState, setFilterState] = React.useState(true);
  const [filterSubState, setFilterSubState] = React.useState(false);
  const [filterLanguage, setFilterLanguage] = React.useState("None Selected");
  const [filterUserScore, setFilterUserScore] = React.useState("6");
  const [filterUserVote, setFilterUserVote] = React.useState("200");
  const [filterRuntime, setFilterRuntime] = React.useState("120");

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

  const languages = [
    "None Selected",
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Dutch",
    "Swedish",
    "Norwegian",
    "Danish",
    "Finnish",
    "Polish",
    "Greek",
    "Czech",
    "Hungarian",
    "Romanian",
    "Bulgarian",
    "Slovak",
    "Ukrainian",
  ];

  const rangeProperties = [
    {
      filterTitle: "User Score",
      basicValue: 6,
      basicNumbers: [0, 5, 10],
      basicLines: ["_", "-", "-", "-", "-", "_", "-", "-", "-", "-", "_"],
    },
    {
      filterTitle: "Minimum User Votes",
      basicValue: 120,
      basicNumbers: [0, 100, 200, 300, 400, 500],
      basicLines: ["_", "-", "_", "-", "_", "-", "_", "-", "_", "-", "_"],
    },
    {
      filterTitle: "RunTime",
      basicValue: 400,
      basicNumbers: [0, 120, 240, 360],
      basicLines: ["_", "-", "-", "-", "-", "_", "-", "-", "-", "-", "_"],
    },
  ];

  const HandleClickFilterState = () => {
    setFilterState((prev) => !prev);
    setFilterSubState(false);
  };

  const HandleClickLanguage = (i) => {
    setFilterLanguage(i);
    setFilterSubState((prev) => !prev);
  };

  const HandleChangeUserScore = (e) => {
    setFilterUserScore(e);
  };

  const HandleChangeUserVote = (e) => {
    setFilterUserVote(e);
  };

  const HandleRuntime = (e) => {
    setFilterRuntime(e);
  };

  return (
    <div className="filter-panel">
      <VCalendar />
      {/* {filterState ? (
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
                    checked
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
              <input
                className="filter-checkbox"
                type="checkbox"
                content="#"
                checked
              />
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
              <input
                className="filter-checkbox"
                type="checkbox"
                content="#"
                checked
              />
              <span className="filter-checkbox-text">Search all releases?</span>
            </div>
            <div className="filter-dates-wrapper">
              <div className="filter-dates-item">
                <div className="filter-dates-text">from</div>
                <div className="filter-dates-calendar">
                </div>
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
              <span className="filter-sub-state-value">{filterLanguage}</span>
              <ArrowDropDownIcon />
            </div>
            <div
              className={
                filterSubState ? "filter-list-open" : "filter-list-closed"
              }
            >
              <div className="filter-list-wrapper">
                <div className="filter-list">
                  {languages.map((i) => (
                    <div
                      onClick={(e) => HandleClickLanguage(i)}
                      className={filterLanguage === i ? "" : "list-btn"}
                      key={i}
                    >
                      <div className="list-btn-flag"></div>
                      <h3
                        className={
                          filterLanguage === i
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

          <div className="filter">
            <div className="filter-title">
              <h3>User Score</h3>
            </div>
            <div className="filter-range-wrapper">
              <div className="filter-range-lines">
                <h3 className="filter-range-line-big">_</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line-big">_</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line-big">_</h3>
              </div>
              <input
                onChange={(e) => HandleChangeUserScore(e.target.value)}
                type="range"
                min="0"
                max="10"
                value={filterUserScore}
                name=""
                id=""
              />
              <div className="filter-range-scale">
                <h3>0</h3>
                <h3>5</h3>
                <h3>10</h3>
              </div>
            </div>
          </div>

          <div className="filter">
            <div className="filter-title">
              <h3>minimum user vote</h3>
            </div>
            <div className="filter-range-wrapper">
              <div className="filter-range-lines">
                <h3 className="filter-range-line-big">_</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line-big">_</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line-big">_</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line-big">_</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line-big">_</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line-big">_</h3>
              </div>
              <input
                onChange={(e) => HandleChangeUserVote(e.target.value)}
                type="range"
                min="0"
                max="500"
                value={filterUserVote}
                name=""
                id=""
              />
              <div className="filter-range-scale">
                <h3>0</h3>
                <h3>100</h3>
                <h3>200</h3>
                <h3>300</h3>
                <h3>400</h3>
                <h3>500</h3>
              </div>
            </div>
          </div>

          <div className="filter">
            <div className="filter-title">
              <h3>minimum user vote</h3>
            </div>
            <div className="filter-range-wrapper">
              <div className="filter-range-lines">
                <h3 className="filter-range-line-big">_</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line-big">_</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line-big">_</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line">-</h3>
                <h3 className="filter-range-line-big">_</h3>
              </div>
              <input
                onChange={(e) => HandleRuntime(e.target.value)}
                type="range"
                min="0"
                max="500"
                value={filterRuntime}
                name=""
                id=""
              />
              <div className="filter-range-scale">
                <h3>0</h3>
                <h3>120</h3>
                <h3>240</h3>
                <h3>360</h3>
              </div>
            </div>
          </div> */}

      {/* ==================================== */}
      {/* <>
            {rangeProperties.map((item) => (
              <div className="filter" key={item.filterTitle}>
                <div className="filter-title">
                  <h3>{item.filterTitle}</h3>
                </div>
                <div className="filter-range-wrapper">
                  <input
                    onChange={(e) => HandleChangeRange(e.target.value)}
                    type="range"
                    min={item.basicNumbers[1]}
                    max="500"
                    value={item.basicValue}
                    name=""
                    id=""
                  />
                </div>
                <div className="filter-range-scale"></div>
              </div>
            ))}
          </> */}
      {/* =========================================== */}

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
      {/* </div>
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
      )} */}
    </div>
  );
}
