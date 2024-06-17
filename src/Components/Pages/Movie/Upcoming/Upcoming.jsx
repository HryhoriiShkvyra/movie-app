import React from "react";
import "./Upcoming.css";
import MovieWrapper from "../../../MovieWrapper/MovieWrapper";

export default function Upcoming() {
  const pageState = "Upcoming Movies";

  return (
    <div className="movie">
      <MovieWrapper pageState={pageState} />
      {/* <MTVPage /> */}
    </div>
  );
}
