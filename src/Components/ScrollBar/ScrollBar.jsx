import React from "react";
import "./ScrollBar.css";
import Loading from "../Loading/Loading";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import { useNavigate } from "react-router-dom";
import Movie from "../Pages/Movie/Movie";

export default function ScrollBar({ type, id }) {
  const [trendingItems, setTrendingItems] = React.useState([]);
  const [activeBtn, setActiveBtn] = React.useState("day");
  const [isLoading, setIsLoading] = React.useState(null);
  const [personFilmArray, setPersonFilmArray] = React.useState([]);
  const [itemId, setItemId] = React.useState();

  const navigate = useNavigate();

  const fetch = require("node-fetch");

  const Index_url =
    process.env.REACT_APP_BASE_URL +
    "trending/all/" +
    activeBtn +
    "?language=en-US";
  const Person_url =
    process.env.REACT_APP_BASE_URL + `person/${id}/movie_credits`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TOKEN_v4,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const promise_0 = fetch(Index_url, options).then((response) =>
        response.json()
      );
      const promise_1 = fetch(Person_url, options).then((response) =>
        response.json()
      );

      const results = await Promise.all([promise_0, promise_1]);
      const data = results;
      setTrendingItems(data[0].results);
      setPersonFilmArray(data[1].cast);
      setIsLoading((prev) => !prev);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  // const getId = () => {
  // }

  const handleItemId = (e) => {
    const itemId = e.target.getAttribute("value");
    // return navigate(<Movie itemId={itemId} />);
    return navigate("/search");
  };

  const ScrollBarWrapper = () => {
    if (type === "index-page") {
      return (
        <div className="container">
          <div className="scroll-text">
            <div className="scroll-title">Trending</div>
            <div className="scroll-type">
              <button
                onClick={(e) => setActiveBtn("day")}
                className={
                  activeBtn === "day"
                    ? "scroll-type-btn-active"
                    : "scroll-type-btn"
                }
              >
                Today
              </button>
              <button
                onClick={(e) => setActiveBtn("week")}
                className={
                  activeBtn === "week"
                    ? "scroll-type-btn-active"
                    : "scroll-type-btn"
                }
              >
                This Week
              </button>
            </div>
          </div>
          <div className="scroll-items-wrapper">
            <div className="scroll-items">
              {trendingItems.map((item) => (
                <div className="scroll-item" key={item.id}>
                  <img
                    className="scroll-item-image"
                    src={
                      process.env.REACT_APP_IMAGE_URL +
                      `w200` +
                      item.poster_path
                    }
                    alt=""
                    value={item.id}
                    onClick={handleItemId}
                  />
                  <div className="scroll-item-text">
                    <span className="scroll-item-title">
                      {item.name ? item.name : item.title}
                    </span>
                    <span className="scroll-item-date-release">
                      {item.release_date
                        ? item.release_date
                        : item.first_air_date}{" "}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (type === "person") {
      return (
        <div className="scroll-bar">
          <div className="scroll-text">
            <div className="scroll-title">known for</div>
          </div>
          <div className="scroll-items-wrapper-person">
            <div className="scroll-items-person">
              {personFilmArray.map((item) => (
                <div className="scroll-item" key={item.id}>
                  {item.poster_path === null ? (
                    <div className="scroll-item-no-image-person">
                      <ImageRoundedIcon style={{ transform: "Scale(1.8)" }} />
                    </div>
                  ) : (
                    <img
                      className="scroll-item-image-person"
                      src={
                        process.env.REACT_APP_IMAGE_URL +
                        `w200` +
                        item.poster_path
                      }
                      alt=""
                    />
                  )}
                  <div className="scroll-item-text-person">
                    <span className="scroll-item-title-person">
                      {item.name ? item.name : item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className="scroll-bar">
          <ScrollBarWrapper />
        </div>
      )}
    </>
  );
}
