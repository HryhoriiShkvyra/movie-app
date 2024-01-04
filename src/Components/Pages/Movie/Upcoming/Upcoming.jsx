import React from "react";
import "./Upcoming.css";
import CardPage from "../../../CardPageFolder/CardPage/CardPage";
import Sort from "../../../Filters/Sort/Sort";
import WhereToWatch from "../../../Filters/Where to watch/WhereToWatch";
import Filters from "../../../Filters/Filters/Filters";
import Card from "../../../Card/Card";
import MovieWrapper from "../../../MovieWrapper/MovieWrapper";
import { useLocation } from "react-router-dom";

export default function Upcoming() {
  const pageState = "Upcoming Movies";

  return (
    <div className="movie">
      <MovieWrapper pageState={pageState} />
      {/* <MTVPage /> */}
    </div>
  );
}
