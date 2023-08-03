import React from "react";
import "./Item.css";
import { useParams } from "react-router-dom";

export default function Item() {
  const [itemValue, setItemValue] = React.useState();
  const { id } = useParams();

  const fetch = require("node-fetch");

  // const url = 'https://api.themoviedb.org/3/movie/550/credits?language=en-US';

  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0",
    },
  };

  React.useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setItemValue(data);
        console.log(data);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div className="item">
      <div className="container">
        <div className="item-poster">{id}</div>
        <div className="item-text"></div>
      </div>
    </div>
  );
}
