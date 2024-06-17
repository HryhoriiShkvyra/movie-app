import React from "react";
import "./Popular.css";
import MovieWrapper from "../../../MovieWrapper/MovieWrapper";

export default function Popular() {
  const pageState = "Popular Movies";

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

  // React.useEffect(() => {
  //   console.log(data);
  // }, [data]);

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
      <MovieWrapper pageState={pageState} />
    </div>
  );
}
