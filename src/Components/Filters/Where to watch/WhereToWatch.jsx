import React from "react";
import "./WhereToWatch.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HelpIcon from "@mui/icons-material/Help";

export default function WhereToWatch() {
  const [filterState, setFilterState] = React.useState(false);
  const [filterSubState, setFilterSubState] = React.useState(false);
  const [filterSubStateValue, setFilterSubStateValue] =
    React.useState("Ukraine");

  const list = [
    "Ukraine",
    "Germany",
    "France",
    "United Kingdom",
    "Italy",
    "Spain",
    "Poland",
    "Romania",
    "Netherlands",
    "Belgium",
    "Greece",
    "Portugal",
    "Sweden",
    "Austria",
    "Switzerland",
  ];

  const listOfStreamingServices = ["1", "2", "3", "4", "5", "6", "7", "8"];

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
                <h2>Where to watch</h2>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </div>

          <div className="filter-active">
            <div className="filter-title-items">
              <h3>My services</h3>
              <div className="filter-title-icon">
                <HelpIcon />
              </div>
            </div>
            <div className="filter-checkbox-wrapper">
              <input className="filter-checkbox" type="checkbox" content="#" />
              <span className="filter-checkbox-text">
                Restrict searches to my subscribed services?
              </span>
            </div>
          </div>
          <div className="filter">
            <div className="filter-title">Country</div>
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
          {/* <div className="filter"> */}
          <div className="filter-streaming-services-wrapper">
            {listOfStreamingServices.map((item) => (
              <div className="filter-streaming-service-item" key={item}>
                <div className="filter-streaming-service">{item}</div>
              </div>
            ))}
          </div>
          {/* </div> */}
        </div>
      ) : (
        <div className="filter-panel-closed">
          <div className="filter-btn">
            <div
              onClick={(e) => setFilterState((prev) => !prev)}
              className="filter"
            >
              <div className="filter-name">
                <h2>Where to watch</h2>
                <KeyboardArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
