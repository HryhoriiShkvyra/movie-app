import React from "react";
import "./TVAiringToday.css";
import MovieWrapper from "../../../MovieWrapper/MovieWrapper";

export default function TVAiringToday() {
  const pageState = "TV Shows Airing Today";

  return (
    <div className="movie">
      <MovieWrapper pageState={pageState} />
      {/* <MTVPage /> */}
    </div>
  );
}
