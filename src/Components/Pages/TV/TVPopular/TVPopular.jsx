import React from "react";
import "./TVPopular.css";
import MovieWrapper from "../../../MovieWrapper/MovieWrapper";

export default function TVPopular() {
  const pageState = "Popular TV Shows";

  return (
    <div className="movie">
      <MovieWrapper pageState={pageState} />
    </div>
  );
}
