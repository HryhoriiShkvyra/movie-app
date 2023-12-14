import React from "react";
import "./MovieWrapper.css";
import Sort from "../Filters/Sort/Sort";
import WhereToWatch from "../Filters/Where to watch/WhereToWatch";
import Filters from "../Filters/Filters/Filters";
import Card from "../Card/Card";

export default function MovieWrapper(pageState) {
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

  const pageValue = pageState.pageState.pageState;

  console.log(pageValue);

  const MovieWrapperLogic = () => {
    if (pageValue === "Popular") {
      return (
        <div>
          <div className="container">
            <div className="content">
              <div>
                <div className="title">
                  <h2>{pageValue} Movies</h2>
                </div>
                <div className="content"></div>
                <div className="filters">
                  <Sort />
                  <WhereToWatch />
                  <Filters pageValue={pageValue} />
                </div>
              </div>

              <div className="items">
                <Card />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (pageValue === "Now Playing") {
      return (
        <div>
          <div>
            <div className="container">
              <div className="content">
                <div>
                  <div className="title">
                    <h2>{pageValue} Movies</h2>
                  </div>
                  <div className="content"></div>
                  <div className="filters">
                    <Sort />
                    <WhereToWatch />
                    <Filters pageValue={pageValue} />
                  </div>
                </div>

                <div className="items">
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (pageValue === "Upcoming") {
      return (
        <div>
          <div>
            <div>
              <div className="container">
                <div className="content">
                  <div>
                    <div className="title">
                      <h2>{pageValue} Movies</h2>
                    </div>
                    <div className="content"></div>
                    <div className="filters">
                      <Sort />
                      <WhereToWatch />
                      <Filters pageValue={pageValue} />
                    </div>
                  </div>

                  <div className="items">
                    <Card />
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
        </div>
      );
    } else if (pageValue === "Top Rated") {
      return (
        <div>
          <div>
            <div>
              <div className="container">
                <div className="content">
                  <div>
                    <div className="title">
                      <h2>{pageValue} Movies</h2>
                    </div>
                    <div className="content"></div>
                    <div className="filters">
                      <Sort />
                      <WhereToWatch />
                      <Filters pageValue={pageValue} />
                    </div>
                  </div>

                  <div className="items">
                    <Card />
                  </div>
                </div>
              </div>
            </div>
          </div>
          );
        </div>
      );
    }

    return (
      <div className="container">
        <div className="content">
          <div>
            <div className="title">
              <h2>Popular Movies</h2>
            </div>
            <div className="content"></div>
            <div className="filters">
              <Sort />
              <WhereToWatch />
              <Filters
                pageValue={pageValue}
                // handleGenres={handleGenres}
                // setHandleGenres={setHandleGenres}
              />
            </div>
          </div>

          <div className="items">
            <Card />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="movie">
      <MovieWrapperLogic />

      {/* {data.map((item) => (
        <div key={item.id}>
          <div onClick={(e) => handleClick()}>{item.id}</div>
          <div className={item.state === false ? "display" : "hidden"}>
            hehe
          </div>
        </div>
      ))} */}
    </div>
  );
}