import React from "react";
import "./TVOnTV.css";
import CardPage from "../../../CardPageFolder/CardPage/CardPage";
import Sort from "../../../Filters/Sort/Sort";
import WhereToWatch from "../../../Filters/Where to watch/WhereToWatch";
import Filters from "../../../Filters/Filters/Filters";
import Card from "../../../Card/Card";
import MovieWrapper from "../../../MovieWrapper/MovieWrapper";
import { useLocation } from "react-router-dom";

export default function TVOnTV() {
  const currentLocation = window.location.href;

  return (
    <div className="movie">
      OnTV
      <MovieWrapper currentLocation={currentLocation} />
      {/* <MTVPage /> */}
    </div>
  );
}
