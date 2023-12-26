import React from "react";
import "./Filters.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HelpIcon from "@mui/icons-material/Help";
import VCalendar from "../../Calendar/Calendar";
import Loading from "../../Loading/Loading";
import Calendar from "react-calendar";

export default function Filters({ pageValue, handleGenres, setHandleGenres }) {
  const [filterState, setFilterState] = React.useState(true);
  const [filterSubState, setFilterSubState] = React.useState(false);
  const [filterLanguage, setFilterLanguage] = React.useState("None Selected");
  const [filterUserScore, setFilterUserScore] = React.useState("6");
  const [filterUserVote, setFilterUserVote] = React.useState("200");
  const [filterRuntime, setFilterRuntime] = React.useState("120");
  const [filterShowMe, setFilterShowMe] = React.useState("everything");
  const [filterAvailability, setFilterAvailability] = React.useState(true);
  const [filterReleaseDate, setFilterReleaseDate] = React.useState(true);
  const [filterReleaseDateStateArray, setFilterReleaseDateStateArray] =
    React.useState([
      { title: "TheatricalLimited", state: false },
      { title: "Theatrical", state: false },
      { title: "Premiere", state: false },
      { title: "Digital", state: false },
      { title: "Physical", state: false },
      { title: "TV", state: false },
    ]);

  const [
    filterReleaseDateStateArraySearch,
    setFilterReleaseDateStateArraySearch,
  ] = React.useState([
    { title: "Search all releases?", state: false },
    { title: "Search all countries?", state: false },
  ]);

  React.useEffect(() => {
    console.log(pageValue);
  }, [pageValue]);

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

  const handleClickFilterState = () => {
    setFilterState((prev) => !prev);
    setFilterSubState(false);
  };

  const handleClickLanguage = (i) => {
    setFilterLanguage(i);
    setFilterSubState((prev) => !prev);
  };

  const handleChangeUserScore = (e) => {
    setFilterUserScore(e);
  };

  const handleChangeUserVote = (e) => {
    setFilterUserVote(e);
  };

  const handleRuntime = (e) => {
    setFilterRuntime(e);
  };

  const handleShowMeRadio = (e) => {
    setFilterShowMe(e);
  };

  const handleAvailability = () => {
    setFilterAvailability((prev) => !prev);
  };

  const handleReleaseDate = () => {
    setFilterReleaseDate((prev) => !prev);
  };

  const handleGenreToTop = (item) => {
    setHandleGenres(item);
  };

  const handleClickReleaseDate = (e) => {
    setFilterReleaseDateStateArray((prev) =>
      prev.map((item) => {
        if (item.title === e.title) {
          return { ...item, state: !item.state };
        } else {
          return item;
        }
      })
    );
    console.log(e.title, e.state);
  };

  const handleClickReleaseDateSearch = (e) => {
    setFilterReleaseDateStateArraySearch((prev) =>
      prev.map((item) => {
        if (item.title === e.title) {
          return { ...item, state: !item.state };
        } else {
          return item;
        }
      })
    );
    console.log(e.title, e.state);
  };

  const FilterReleaseDate = () => {
    if (pageValue === "Popular") {
      return (
        <div className="filter">
          <div className="filter-title">
            <h3>Release Dates</h3>
          </div>
          <div className="filter-checkbox-wrapper">
            <div className="filter-checkbox">
              <input
                className="filter-checkbox-input"
                type="checkbox"
                content="#"
                checked={filterReleaseDate}
                onChange={(e) => handleReleaseDate()}
              />
              <span className="filter-checkbox-text">Search all releases?</span>
            </div>
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
      );
    } else if (pageValue === "Now Playing") {
      return (
        <div className="filter">
          <div className="filter-title">
            <h3>Release Dates</h3>
          </div>
          <div className="filter-checkbox-wrapper-search">
            {filterReleaseDateStateArraySearch.map((item) => (
              <div className="filter-checkbox" key={item.title}>
                <input
                  className="filter-checkbox-input"
                  type="checkbox"
                  content="#"
                  checked={item.state}
                  onChange={(e) => handleClickReleaseDateSearch(item)}
                />
                <span className="filter-checkbox-text">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="filter-checkbox-wrapper">
            {filterReleaseDateStateArray.map((item) => (
              <div className="filter-checkbox" key={item.title}>
                <input
                  className="filter-checkbox-input"
                  type="checkbox"
                  content="#"
                  checked={item.state}
                  onChange={(e) => handleClickReleaseDate(item)}
                />
                <span className="filter-checkbox-text">{item.title}</span>
              </div>
            ))}
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
      );
    } else if (pageValue === "Upcoming") {
      return (
        <div className="filter">
          <div className="filter-title">
            <h3>Release Dates</h3>
          </div>
          <div className="filter-checkbox-wrapper-search">
            {filterReleaseDateStateArraySearch.map((item) => (
              <div className="filter-checkbox" key={item.title}>
                <input
                  className="filter-checkbox-input"
                  type="checkbox"
                  content="#"
                  checked={item.state}
                  onChange={(e) => handleClickReleaseDateSearch(item)}
                />
                <span className="filter-checkbox-text">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="filter-checkbox-wrapper">
            {filterReleaseDateStateArray.map((item) => (
              <div className="filter-checkbox" key={item.title}>
                <input
                  className="filter-checkbox-input"
                  type="checkbox"
                  content="#"
                  checked={item.state}
                  onChange={(e) => handleClickReleaseDate(item)}
                />
                <span className="filter-checkbox-text">{item.title}</span>
              </div>
            ))}
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
      );
    } else if (pageValue === "Top Rated") {
      return (
        <div className="filter">
          <div className="filter-title">
            <h3>Release Dates</h3>
          </div>
          <div className="filter-checkbox-wrapper">
            <div className="filter-checkbox">
              <input
                className="filter-checkbox-input"
                type="checkbox"
                content="#"
                checked={filterReleaseDate}
                onChange={(e) => handleReleaseDate()}
              />
              <span className="filter-checkbox-text">Search all releases?</span>
            </div>
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
      );
    }
  };

  const FilterLogic = () => {
    return (
      <div className="filter-panel-open">
        <div className="filter-btn">
          <div
            onClick={(e) => handleClickFilterState()}
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
            <form className="filter-radio-btns">
              <div className="filter-radio-btn">
                <input
                  className="filter-radio"
                  type="radio"
                  name="filter-radio"
                  id=""
                  value="everything"
                  onChange={(e) => handleShowMeRadio(e.target.value)}
                  defaultChecked
                />
                <label className="filter-radio-text">everything</label>
              </div>
              <div className="filter-radio-btn">
                <input
                  className="filter-radio"
                  type="radio"
                  name="filter-radio"
                  id=""
                  value="movies-i-haven't-seen"
                  onChange={(e) => handleShowMeRadio(e.target.value)}
                />
                <label className="filter-radio-text">
                  movies i haven't seen
                </label>
              </div>
              <div className="filter-radio-btn">
                <input
                  className="filter-radio"
                  type="radio"
                  name="filter-radio"
                  id=""
                  value="movies-i-have-seen"
                  onChange={(e) => handleShowMeRadio(e.target.value)}
                />
                <label className="filter-radio-text">movies i have seen</label>
              </div>
            </form>
          </div>
        </div>

        <div className="filter">
          <div className="filter-title">
            <h3>Availabilities</h3>
          </div>
          <div className="filter-checkbox-wrapper">
            <div className="filter-checkbox">
              <input
                className="filter-checkbox"
                type="checkbox"
                content="#"
                checked={filterAvailability}
                onChange={(e) => handleAvailability()}
              />
              <span className="filter-checkbox-text">
                Search all availabilities?
              </span>
            </div>
          </div>
        </div>

        <FilterReleaseDate />

        <div className="filter">
          <div className="filter-title">
            <h3>Genres</h3>
          </div>
          <div className="filter-genres">
            {genres.map((item) => (
              <div
                onClick={() => handleGenreToTop(item)}
                className="filter-genre"
                key={item}
              >
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
                    onClick={(e) => handleClickLanguage(i)}
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
              onChange={(e) => handleChangeUserScore(e.target.value)}
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
              onChange={(e) => handleChangeUserVote(e.target.value)}
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
              onChange={(e) => handleRuntime(e.target.value)}
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
        </div>
      </div>
    );
  };

  // const handleClick = (e) => {
  //   setFilterReleaseDateStateArray((prevState) =>
  //     prevState.map((item) =>
  //       item ===  ? { ...item, item: !theatrical } : item
  //     )
  //   );
  // };

  React.useEffect(() => {}, [filterReleaseDateStateArray]);

  return (
    <div className="filter-panel">
      {Loading ? <FilterLogic /> : <Loading />}
    </div>
  );
}
