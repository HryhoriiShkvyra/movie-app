import React from "react";
import "./Movie.css";
import MTVPage from "../../MTV/MTVPage/MTVPage";
import PendingIcon from "@mui/icons-material/Pending";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Sort from "../../Filters/Sort/Sort";
import WhereToWatch from "../../Filters/Where to watch/WhereToWatch";
import Filters from "../../Filters/Filters/Filters";

export default function Movie() {
  const [data, setData] = React.useState([
    {
      title: "Sort",
      filterState: false,
      filterSubState: false,
      btnTitle: "Sort",
      listTitle: "Sort Results By",
      list: [
        "Popularity Descending",
        "Popularity Ascending",
        "Rating Descending",
        "Rating Ascending",
        "Release Date Descending",
        "Release Date Ascending",
        "Title (A-Z)",
        "Title (Z-A)",
      ],
    },
    {
      title: "Where to watch",
      filterState: false,
      filterSubState: false,
      btnTitle: "Where to watch",
      listTitle: "My Services",
      checkbox: "Restrict searches to my subscribed services?",
      list: [
        "Ukraine 1",
        "Ukraine 2",
        "Ukraine 3",
        "Ukraine 4",
        "Ukraine 5",
        "Ukraine 6",
        "Ukraine 7",
        "Ukraine 8",
      ],
    },
  ]);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  console.log(data.map((item) => item.list));

  const handleClickFilterState = (title) => {
    setData(
      data.map((item) =>
        item.title === title
          ? { ...item, filterState: !item.filterState }
          : item
      )
    );
  };

  const handleClickFilterSubState = (listTitle) => {
    setData(
      data.map((item) =>
        item.listTitle === listTitle
          ? { ...item, filterSubState: !item.filterSubState }
          : item
      )
    );
  };

  return (
    <div className="movie">
      {/* {data.map((item) => (
        <button onClick={(e) => toggleItem(item.id)} key={item.id}>
          {item.id}
        </button>
      ))} */}
      <div className="container">
        <div className="content-wrapper">
          <div className="title">
            <h2>Popular Movies</h2>
          </div>
          <div className="content"></div>
          <div className="filters">
            <Sort />
            <WhereToWatch />
            <Filters />
            {/* {data.map((item) => (
              <div className="filter-panel" key={item.id}>
                <div
                  onClick={() => handleClickFilterState(item.title)}
                  className="filter-title"
                >
                  {item.title}
                  <div className="filter-title-arrow">
                    {item.filterState ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowRightIcon />
                    )}
                  </div>
                </div>
                <div
                  className={item.filterState ? "filter-open" : "filter-closed"}
                >
                  <div className="list-title">{item.listTitle}</div>
                  <div className="list">
                    <div
                      onClick={() => handleClickFilterSubState(item.listTitle)}
                      className="list-main-btn"
                    >
                      {item.list[0]}{" "}
                      {item.filterSubState ? (
                        <KeyboardArrowDownIcon />
                      ) : (
                        <KeyboardArrowRightIcon />
                      )}
                    </div>
                    <div
                      className={
                        item.filterSubState
                          ? "list-btns-wrapper-active"
                          : "list-btns-wrapper"
                      }
                    >
                      <div className="list-btns">
                        {item.list.slice(1).map((i) => (
                          <div className="list-btn" key={i}>
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
          </div>

          <div className="items"></div>
        </div>
      </div>

      {/* {data.map((item) => (
        <div key={item.id}>
          <div onClick={(e) => handleClick()}>{item.id}</div>
          <div className={item.state === false ? "display" : "hidden"}>
            hehe
          </div>
        </div>
      ))} */}

      {/* <div className="container">
        <div className="left navigation">
          <div className="navigation-title">Popular Movies</div>
          <div className="navigation-btns">
            <div className="navigation-btn">
              <div
                onClick={(e) => setSortBtn((prev) => !prev)}
                className="navigation-btn-main"
              >
                <div className="navigation-btn-title">Sort</div>
                <div className="navigation-btn-inner">
                  <div className="navigation-btn-count">9</div>
                  <div
                    className={
                      sortBtn
                        ? "navigation-btn-icon"
                        : "navigation-btn-icon-active"
                    }
                  >
                    <ArrowBackIosIcon />
                  </div>
                </div>
              </div>

              <div
                className={
                  sortBtn
                    ? "navigation-btn-not-main-active"
                    : "navigation-btn-not-main"
                }
              >
                <div className="navigation-subTitle">Sort Results By</div>
                <div className="navigation-subBtn-wrapper">
                  <button
                    onClick={(e) => setSortResult((prev) => !prev)}
                    className="navigation-subBtn"
                  >
                    Popularity Descending <ArrowDropDownIcon />
                  </button>
                  <div
                    className={
                      sortResult
                        ? "navigation-list-wrapper"
                        : "navigation-list-wrapper-active"
                    }
                  >
                    <ol className="navigation-list-active">
                      <div className="navigation-list-items">
                        <li className="navigation-list-item">
                          Popularity Descending
                        </li>
                        <li className="navigation-list-item">
                          Popularity Ascending
                        </li>
                        <li className="navigation-list-item">
                          Rating Descending
                        </li>
                        <li className="navigation-list-item">
                          Rating Ascending
                        </li>
                        <li className="navigation-list-item">
                          Release Date Descending
                        </li>
                        <li className="navigation-list-item">
                          Release Date Ascending
                        </li>
                        <li className="navigation-list-item">Title (A-Z)</li>
                        <li className="navigation-list-item">Title (Z-A)"</li>
                      </div>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="navigation-btn">
              <div
                onClick={(e) => setWhereToWatch((prev) => !prev)}
                className="navigation-btn-main"
              >
                <div className="navigation-btn-title">Where to watch</div>
                <div className="navigation-btn-inner">
                  <div className="navigation-btn-count">9</div>
                  <div
                    className={
                      whereToWatch
                        ? "navigation-btn-icon"
                        : "navigation-btn-icon-active"
                    }
                  >
                    <ArrowBackIosIcon />
                  </div>
                </div>
              </div>
              <div
                className={
                  whereToWatch
                    ? "navigation-btn-not-main-active"
                    : "navigation-btn-not-main"
                }
              >
                <div className="navigation-subTitle">My Services</div>
              </div>
              <div className="navigation-checkbox-wrapper">
                <input
                  className="navigation-checkbox-btn"
                  type="checkbox"
                ></input>
                <div className="navigation-checkbox-text">
                  Restrict searches to my subscribed services?
                </div>
              </div>
              <div
                className={
                  whereToWatch
                    ? "navigation-btn-not-main-active"
                    : "navigation-btn-not-main"
                }
              >
                <div className="navigation-subTitle">Country</div>
                <div className="navigation-subBtn-wrapper">
                  <button
                    onClick={(e) => setCountryBtn((prev) => !prev)}
                    className="navigation-subBtn"
                  >
                    Popularity Descending <ArrowDropDownIcon />
                  </button>
                  <div
                    className={
                      countryBtn
                        ? "navigation-list-wrapper"
                        : "navigation-list-wrapper-active"
                    }
                  >
                    <ol className="navigation-list-active">
                      <div className="navigation-list-items">
                        <li className="navigation-list-item">
                          Popularity Descending
                        </li>
                        <li className="navigation-list-item">
                          Popularity Ascending
                        </li>
                        <li className="navigation-list-item">
                          Rating Descending
                        </li>
                        <li className="navigation-list-item">
                          Rating Ascending
                        </li>
                        <li className="navigation-list-item">
                          Release Date Descending
                        </li>
                        <li className="navigation-list-item">
                          Release Date Ascending
                        </li>
                        <li className="navigation-list-item">Title (A-Z)</li>
                        <li className="navigation-list-item">Title (Z-A)"</li>
                      </div>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navigation-search-btn"></div>
        </div>
        <div className="right content">content</div>
      </div> */}
    </div>
  );
}
