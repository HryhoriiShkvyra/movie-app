import React from "react";
import "./TopRated.css";
import MovieWrapper from "../../../MovieWrapper/MovieWrapper";

export default function TopRated() {
  const pageState = "Top Rated Movies";

  return (
    <div className="movie">
      <MovieWrapper pageState={pageState} />
      {/* <MTVPage /> */}
    </div>
  );
}
