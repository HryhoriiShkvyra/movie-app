import React from "react";
import "./Movie.css";
import MTVPage from "../../MTV/MTVPage/MTVPage";

export default function Movie() {
  return (
    <div className="movie">
      <div className="container">
        <div className="movie-wrapper">
          <MTVPage />
        </div>
      </div>
    </div>
  );
}
