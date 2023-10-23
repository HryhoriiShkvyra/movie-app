import React from "react";
import "./LatestTrailers.css";
import PendingIcon from "@mui/icons-material/Pending";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import IMG0 from "../../Images/posters/breaking-bad_poster.jpg";
import IMG1 from "../../Images/posters/better-call-saul_poster.jpeg";
import IMG2 from "../../Images/posters/the-sopranos_poster.jpg";
import IMGX from "../../Images/posters/the-sopranos_poster.jpg";

export default function LatestTrailers() {
  const [backgroundImage, setBackgroundImage] = React.useState("");
  const [activeBtn, setActiveBtn] = React.useState("popular");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

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

  React.useEffect(() => {
    console.log(activeBtn);
  }, [activeBtn]);

  return (
    <div className="container">
      <div
        className="latest-trailers-background-image"
        // style={{ backgroundImage: `url("${backgroundImage}")` }}
        alt=""
      >
        <div className="latest-trailers">
          <div className="latest-trailers-nav">
            <h2>latest trailers</h2>
            <div className="latest-trailers-btns">
              <button
                className={
                  activeBtn === "popular"
                    ? "latest-trailers-btn-active"
                    : "latest-trailers-btn"
                }
                onClick={(e) => setActiveBtn("popular")}
              >
                <a>Popular</a>
              </button>
              <button
                className={
                  activeBtn === "streaming"
                    ? "latest-trailers-btn-active"
                    : "latest-trailers-btn"
                }
                onClick={(e) => setActiveBtn("streaming")}
              >
                <a>Streaming</a>
              </button>
              <button
                className={
                  activeBtn === "on-tv"
                    ? "latest-trailers-btn-active"
                    : "latest-trailers-btn"
                }
                onClick={(e) => setActiveBtn("on-tv")}
              >
                <a>On Tv</a>
              </button>
              <button
                className={
                  activeBtn === "for-rent"
                    ? "latest-trailers-btn-active"
                    : "latest-trailers-btn"
                }
                onClick={(e) => setActiveBtn("for-rent")}
              >
                <a>For Rent</a>
              </button>
              <button
                className={
                  activeBtn === "in-theaters"
                    ? "latest-trailers-btn-active"
                    : "latest-trailers-btn"
                }
                onClick={(e) => setActiveBtn("in-theaters")}
              >
                <a>In Theaters</a>
              </button>
            </div>
          </div>
          <div className="latest-trailers-cards">
            {data.map((item) => (
              <div
                className="latest-trailers-card"
                key={item.title}
                // onMouseEnter={setBackgroundImage(item.img)}
                // onMouseLeave={onMouseLeave()}
              >
                <div
                  className="latest-trailers-card-image-wrapper"
                  src=""
                  alt=""
                >
                  {/* <div className="latest-trailers-card-image" /> */}
                  <img
                    className="latest-trailers-card-image"
                    src={item.img}
                    alt=""
                    // onClick={ClickTest}
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
    </div>
  );
}
