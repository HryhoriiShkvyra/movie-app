import React from "react";
import "./Sort.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Sort() {
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
                <h2>Sort</h2>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>

          <div className="filter">
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
          </div>
        </div>
      ) : (
        <div className="filter-panel-closed">
          <div className="filter-btn">
            <div
              onClick={(e) => setFilterState((prev) => !prev)}
              className="filter"
            >
              <div className="filter-name">
                <h2>Sort</h2>
                <KeyboardArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
