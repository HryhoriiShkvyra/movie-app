import React from "react";
import "./NowPlaying.css";
import CardPage from "../../../CardPageFolder/CardPage/CardPage";
import Sort from "../../../Filters/Sort/Sort";
import WhereToWatch from "../../../Filters/Where to watch/WhereToWatch";
import Filters from "../../../Filters/Filters/Filters";
import Card from "../../../Card/Card";
import MovieWrapper from "../../../MovieWrapper/MovieWrapper";
import { useLocation } from "react-router-dom";

export default function NowPlaying() {
  const pageState = "Now Playing";

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
  const [movieState, setMovieState] = React.useState();
  const [handleGenres, setHandleGenres] = React.useState();

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

  console.log(pageState);

  return (
    <div className="movie">
      <MovieWrapper pageState={pageState} />
      {/* <MTVPage /> */}
    </div>
  );
}
