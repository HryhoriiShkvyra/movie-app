import React from "react";
import "./LatestTrailers.css";
import PendingIcon from "@mui/icons-material/Pending";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import IMG0 from "../../Images/posters/breaking-bad_poster.jpg";
import IMG1 from "../../Images/posters/better-call-saul_poster.jpeg";
import IMG2 from "../../Images/posters/the-sopranos_poster.jpg";

export default function LatestTrailers() {
  const data = [
    {
      title: "Breaking Bad",
      subTitle: "Breaking Bad - the Second season",
      img: IMG0,
    },
    {
      title: "Better Call Saul",
      subTitle: "Better Call Saul - the First season",
      img: IMG1,
    },
    {
      title: "The Sopranos",
      subTitle: "The Sopranos - the Season",
      img: IMG2,
    },
    {
      title: "Breaking Bad Bad",
      subTitle: "Breaking Bad - the Second season",
      img: IMG0,
    },
    {
      title: "Better Call Saul Saul",
      subTitle: "Better Call Saul - the First season",
      img: IMG1,
    },
    {
      title: "The Sopranos pinos",
      subTitle: "The Sopranos - the Season",
      img: IMG2,
    },
  ];

  return (
    <div className="container">
      <div className="latest-trailers">
        <div className="latest-trailers-nav">
          <h2 style={{ color: "#fff" }}>latest trailers</h2>
          <div className="latest-trailers-btns">
            <button className="latest-trailers-btn-active">
              <h3>Popular</h3>
            </button>
            <button className="latest-trailers-btn">
              <h3>Streaming</h3>
            </button>
            <button className="latest-trailers-btn">
              <h3>On Tv</h3>
            </button>
            <button className="latest-trailers-btn">
              <h3>For Rent</h3>
            </button>
            <button className="latest-trailers-btn">
              <h3>In Theaters</h3>
            </button>
          </div>
        </div>
        <div className="latest-trailers-cards">
          {data.map((item) => (
            <div className="latest-trailers-card" key={item.title}>
              <div className="latest-trailers-card-image-wrapper" src="" alt="">
                {/* <div className="latest-trailers-card-image" /> */}
                <img
                  className="latest-trailers-card-image"
                  scr={item.img}
                  alt=""
                />
                <PendingIcon className="card-icon" />
                <PlayArrowRoundedIcon className="card-play" />
              </div>
              <div className="latest-trailers-card-about">
                <h2>{item.title}</h2>
                <h3>{item.subTitle}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
