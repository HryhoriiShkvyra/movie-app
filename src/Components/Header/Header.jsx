import React from "react";
import "./Header.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLang, setIsLang] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [isHovered, setIsHovered] = React.useState("dasd");

  function handleInputDown(event) {
    if (event.key === "Enter") {
      fetch(
        process.env.REACT_APP_BASE_URL +
          `movie/157336?api_key=` +
          process.env.REACT_APP_TOKEN_v3
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }

  React.useEffect(() => {
    console.log(isHovered);
  }, [isHovered]);

  const btns = ["Movie", "TV Shows", "People", "More"];
  const x = [
    {
      btnTitle: "Movie",
      titleAndLink: [
        {
          title: "Popular",
          link: "/movie",
        },
        {
          title: "Now Playing",
          link: "/movie/now-paying",
        },
        {
          title: "Upcoming",
          link: "/movie/upcoming",
        },
        {
          title: "Top Rated",
          link: "/movie/top-rated",
        },
      ],
    },
    {
      btnTitle: "TV Shows",
      titleAndLink: [
        {
          title: "Popular",
          link: "/tv",
        },
        {
          title: "Airing Today",
          link: "/tv/airing-today",
        },
        {
          title: "On TV",
          link: "tv/on-the-air",
        },
        {
          title: "Top Rated",
          link: "tv/top-rated",
        },
      ],
    },
    {
      btnTitle: "People",
      titleAndLink: [
        {
          title: "Popular",
          link: "/Popular People",
        },
      ],
    },
    {
      btnTitle: "More",
      titleAndLink: [
        {
          title: "Discussions",
          link: "/discuss",
        },
        {
          title: "Leaderboard",
          link: "/leaderboard",
        },
        {
          title: "Support",
          link: "/talk",
        },
        {
          title: "API",
          link: "/docs",
        },
      ],
    },
  ];

  // console.log(x);

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-left">
              <Link className="logo" to="/">
                <div className="logo-wrapper">
                  <div className="logo-text">TMDB</div>
                  <div className="logo-rectangle"></div>
                </div>
              </Link>
              {x.map((item) => (
                <div key={item.btnTitle}>
                  <div
                    onMouseEnter={(e) => setIsHovered(item.btnTitle)}
                    className="header col"
                  >
                    {item.btnTitle}
                  </div>
                  <div
                    className={
                      isHovered === item.btnTitle
                        ? "header nav links "
                        : "header nav links hidden"
                    }
                  >
                    {item.titleAndLink.map((item) => (
                      <div key={item.title}>
                        <Link className="header nav link" to={item.link}>
                          {item.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="header-right">
              <Link className="header-col">
                <AddIcon />
              </Link>
              <div className="header-col-lang">En</div>
              <Link className="header-col">Login</Link>
              <Link className="header-col">Join Site</Link>
              <div>
                {isLang === false ? (
                  <div
                    onClick={(event) => setIsLang(true)}
                    className="header-col"
                  >
                    <SearchIcon />
                  </div>
                ) : (
                  <div
                    onClick={(event) => setIsLang(false)}
                    className="header-col"
                  >
                    <CloseIcon />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLang === false ? null : (
        <div className="search-bar-wrapper">
          <input
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={handleInputDown}
            className="search-bar"
            placeholder="enter value"
          />
        </div>
      )}
    </>
  );
};

export default Header;
