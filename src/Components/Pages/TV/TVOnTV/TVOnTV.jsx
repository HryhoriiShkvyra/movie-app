import React from "react";
import "./TVOnTV.css";
import MovieWrapper from "../../../MovieWrapper/MovieWrapper";

export default function TVOnTV() {
  const pageState = "Currently Airing TV Shows";

  return (
    <div className="movie">
      <MovieWrapper pageState={pageState} />
      {/* <MTVPage /> */}
    </div>
  );
}
