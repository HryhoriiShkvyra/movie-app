import React from "react";
import "./CardPageAdditionalInfo.css";
import {
  ChangeHistoryRounded,
  FacebookRounded,
  WebAssetRounded,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

export default function CardPageAdditionalInfo({ requestType }) {
  const { id } = useParams();
  // const { requestType } = useParams();

  const handleId = (id) => {
    let idWithLetters = id;
    const onlyId = idWithLetters.replace(/\D/g, "");

    return onlyId;
  };

  React.useEffect(() => {
    console.log(handleId(id));
    console.log(main_url);
  }, []);

  const [cardData, setCardData] = React.useState([]);
  const [matrixCollection, setMatrixCollection] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [networksArray, setNetworksArray] = React.useState();
  const [keywordsArray, setKeywordsArray] = React.useState();
  const [featuredCast, setFeaturedCast] = React.useState();
  const [fightClub, setFightClub] = React.useState();

  const [sortBtn, setSortBtn] = React.useState(false);
  const [sortSubBtn, setSortSubBtn] = React.useState(false);

  const fetch = require("node-fetch");

  const main_url = `https://api.themoviedb.org/3/${requestType}/${handleId(
    id
  )}?language=en-US`;
  const keywords_url = `https://api.themoviedb.org/3/${requestType}/${handleId(
    id
  )}/keywords`;
  const collection_url = `https://api.themoviedb.org/3/${requestType}/${handleId(
    id
  )}?language=en-US`;
  const fightClub_url =
    "https://api.themoviedb.org/3/movie/603/credits?language=en-US";

  const url = "https://api.themoviedb.org/3/movie/550?language=en-US";
  const the_matrix_url =
    "https://api.themoviedb.org/3/movie/603?language=en-US";
  const the_matrix_reload_url =
    "https://api.themoviedb.org/3/movie/604?language=en-US";
  const the_matrix_revolutions_url =
    "https://api.themoviedb.org/3/movie/605?language=en-US";
  const the_matrix_resurrection_url =
    "https://api.themoviedb.org/3/movie/624860?language=en-US";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0",
    },
  };

  const FetchData = async () => {
    setIsLoading(true);

    try {
      if (requestType === "movie") {
        const main_promise = fetch(main_url, options).then((response) =>
          response.json()
        );
        const keywords_promise = fetch(keywords_url, options).then((response) =>
          response.json()
        );

        const request = await Promise.all([main_promise, keywords_promise]);
        const data = request;

        console.log(data);
        setCardData(data[0]);
        setKeywordsArray(data[1].keywords);
      }
      if (requestType === "collection") {
        const collections_promise = fetch(collection_url, options).then(
          (response) => response.json()
        );
        const featuredCast_promise = fetch(main_url, options).then((response) =>
          response.json()
        );

        const fightClub_promise = fetch(fightClub_url, options).then(
          (response) => response.json()
        );

        const url_promise = fetch(url, options).then((response) =>
          response.json()
        );

        const the_matrix_promise = fetch([the_matrix_url], options).then(
          (response) => response.json()
        );

        const the_matrix_reload_promise = fetch(
          [the_matrix_reload_url],
          options
        ).then((response) => response.json());

        const the_matrix_revolution_promise = fetch(
          [the_matrix_revolutions_url],
          options
        ).then((response) => response.json());

        const the_matrix_resurrection_promise = fetch(
          [the_matrix_resurrection_url],
          options
        ).then((response) => response.json());

        // const request = Promise.all([collections_promise]);
        const request = await Promise.all([
          collections_promise,
          featuredCast_promise,
          fightClub_promise,
          url_promise,
          the_matrix_promise,
          the_matrix_reload_promise,
          the_matrix_revolution_promise,
          the_matrix_resurrection_promise,
        ]);
        const data = request;

        const matrix_collection = [data[4], data[5], data[6], data[7]];
        setMatrixCollection(matrix_collection);

        console.log(data);

        setCardData(data[3]);
        // setCardData(data[3]);
        setFightClub(data[2].cast);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const NetworksLength = () => {
    // if (networksArray.length > 1) {
    //   return (
    //     <div className="card-additional-info-col">
    //       <h4>networks</h4>
    //       {networksArray.map((item) => (
    //         <img
    //           className="card-additional-info-networks"
    //           key={item.id}
    //           src={process.env.REACT_APP_IMAGE_URL + "w200" + item.logo_path}
    //           alt=""
    //         />
    //       ))}
    //     </div>
    //   );
    // } else {
    return (
      <div className="card-additional-info-col">
        <h4>networks</h4>
        {networksArray.map((item) => (
          <img
            className="card-additional-info-img"
            key={item.id}
            src={process.env.REACT_APP_IMAGE_URL + "w200" + item.logo_path}
            alt=""
          />
        ))}
      </div>
    );
    // }
  };

  const Movie_overview_limit = (overview) => {
    const newOverview = overview.slice(0, 250) + "...";

    if (overview.length > 250) {
      return newOverview;
    } else return overview;
  };

  const CardPageAdditionalInfoType = () => {
    if (requestType === "movie") {
      return <CardPageAdditionalInfoMovie />;
    } else if (requestType === "tv") {
      return <CardPageAdditionalInfoTV />;
    } else if (requestType === "collection") {
      return <CardPageAdditionalInfoCollection />;
    } else return console.log("error");
  };

  React.useEffect(() => {
    console.log(sortBtn);
  }, [sortBtn]);

  const CardPageAdditionalInfoMovie = () => {
    return (
      <>
        <div className="card-additional-info">
          <div className="card-additional-info-cols">
            <div className="card-additional-info-social">
              <FacebookRounded />
              <div className="plank"></div>
              <ChangeHistoryRounded />
              <div className="plank"></div>
              <WebAssetRounded />
            </div>
          </div>
          <div className="card-additional-info-cols">
            <div className="card-additional-info-col">
              <h4>status</h4>
              <div className="card-additional-info-second">
                {cardData.status}
              </div>
            </div>
            <div className="card-additional-info-col">
              <h4>original language</h4>
              <div className="card-additional-info-second">
                {cardData.original_language}
              </div>
            </div>
            <div className="card-additional-info-col">
              <h4>budget</h4>
              <div className="card-additional-info-second">
                ${cardData.budget}.00
              </div>
            </div>
            <div className="card-additional-info-col">
              <h4>revenue</h4>
              <div className="card-additional-info-second">
                ${cardData.revenue}.00
              </div>
            </div>
          </div>
          {keywordsArray === undefined ? (
            <div className="card-additional-info-col-no-words">
              <h4>keywords</h4>
              <div className="card-additional-info-words">
                <span className="card-additional-info-no-word">
                  No keywords have been added
                </span>
              </div>
            </div>
          ) : (
            <div className="card-additional-info-col">
              <h4>keywords</h4>
              <div className="card-additional-info-words">
                {keywordsArray.map((item) => (
                  <div className="card-additional-info-word" key={item.id}>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="content-score-wrapper">
          <h4>content score</h4>
          <div className="content-score">100</div>
          <h6>yes! looking good!</h6>
        </div>

        <div className="leaderboard MTVAdditional">
          <h4>Top Contributors</h4>
          <div className="leaders">
            <div className="leader">
              <div className="leader-img"></div>
              <div className="leader-text">
                <div className="leader-score">100</div>
                <div className="leader-name">leader-nickname</div>
              </div>
            </div>
            <div className="leader">
              <div className="leader-img"></div>
              <div className="leader-text">
                <div className="leader-score">100</div>
                <div className="leader-name">leader-nickname</div>
              </div>
            </div>
            <div className="leader">
              <div className="leader-img"></div>
              <div className="leader-text">
                <div className="leader-score">100</div>
                <div className="leader-name">leader-nickname</div>
              </div>
            </div>
            <div className="leader">
              <div className="leader-img"></div>
              <div className="leader-text">
                <div className="leader-score">100</div>
                <div className="leader-name">leader-nickname</div>
              </div>
            </div>
          </div>
          <div className="edit-history">view edit history</div>
        </div>
      </>
    );
  };

  const CardPageAdditionalInfoTV = () => {
    return (
      <>
        <div className="card-additional-info">
          <div className="card-additional-info-cols">
            <div className="card-additional-info-social">
              <FacebookRounded />
              <div className="plank"></div>
              <ChangeHistoryRounded />
              <div className="plank"></div>
              <WebAssetRounded />
            </div>
          </div>

          <div className="card-additional-info-cols">
            <div className="card-additional-info-col">
              <h4>facts</h4>
              <div className="card-additional-info-second">
                {/* {cardData.status} */}
              </div>
            </div>
            <div className="card-additional-info-col">
              <h4>original name</h4>
              <div className="card-additional-info-second">
                {cardData.original_name}
              </div>
            </div>
            {/* <NetworksLength /> */}
            <div className="card-additional-info-col">
              <h4>type</h4>
              <div className="card-additional-info-second">{cardData.type}</div>
            </div>
            <div className="card-additional-info-col">
              <h4>original language</h4>
              <div className="card-additional-info-second">
                {cardData.original_language}
              </div>
            </div>
          </div>
          {keywordsArray === undefined ? (
            <div className="card-additional-info-col-no-words">
              <h4>keywords</h4>
              <div className="card-additional-info-words">
                <span className="card-additional-info-no-word">
                  No keywords have been added
                </span>
              </div>
            </div>
          ) : (
            <div className="card-additional-info-col">
              <h4>keywords</h4>
              <div className="card-additional-info-words">
                {keywordsArray.map((item) => (
                  <div className="card-additional-info-word" key={item.id}>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="content-score-wrapper">
          <h4>content score</h4>
          <div className="content-score">100</div>
          <h6>yes! looking good!</h6>
        </div>

        <div className="leaderboard MTVAdditional">
          <h4>Top Contributors</h4>
          <div className="leaders">
            <div className="leader">
              <div className="leader-img"></div>
              <div className="leader-text">
                <div className="leader-score">100</div>
                <div className="leader-name">leader-nickname</div>
              </div>
            </div>
            <div className="leader">
              <div className="leader-img"></div>
              <div className="leader-text">
                <div className="leader-score">100</div>
                <div className="leader-name">leader-nickname</div>
              </div>
            </div>
            <div className="leader">
              <div className="leader-img"></div>
              <div className="leader-text">
                <div className="leader-score">100</div>
                <div className="leader-name">leader-nickname</div>
              </div>
            </div>
            <div className="leader">
              <div className="leader-img"></div>
              <div className="leader-text">
                <div className="leader-score">100</div>
                <div className="leader-name">leader-nickname</div>
              </div>
            </div>
          </div>
          <div className="edit-history">view edit history</div>
        </div>
      </>
    );
  };

  const CardPageAdditionalInfoCollection = () => {
    return (
      <div className="card-page-cast-wrapper">
        <div className="card-page-section">
          <h2>Featured Cast</h2>
          <div className="card-page-cast-items">
            {fightClub.map((actor, index) => (
              <div
                key={index + "-" + actor.id + "-" + actor.cast_id}
                className="card-page-cast-item"
              >
                {actor.profile_path ? (
                  <div className="card-page-cast-photo-wrapper">
                    <img
                      className="card-page-cast-photo"
                      src={
                        process.env.REACT_APP_IMAGE_URL +
                        "w200" +
                        `${actor.profile_path}`
                      }
                    />
                  </div>
                ) : (
                  <div className="card-page-cast-no-photo">
                    <PersonRoundedIcon className="" />
                  </div>
                )}
                <div className="card-page-cast-text">
                  <h4>{actor.name}</h4>
                  <span className="card-page-cast-character">
                    {actor.character}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-page-black-blank"></div>

        <div className="card-page-section">
          <h2>Featured Cast</h2>
          <div className="card-page-cast-items">
            {fightClub.map((actor, index) => (
              <div
                key={index + "-" + actor.id + "-" + actor.cast_id}
                className="card-page-cast-item"
              >
                {actor.profile_path ? (
                  <div className="card-page-cast-photo-wrapper">
                    <img
                      className="card-page-cast-photo"
                      src={
                        process.env.REACT_APP_IMAGE_URL +
                        "w200" +
                        `${actor.profile_path}`
                      }
                    />
                  </div>
                ) : (
                  <div className="card-page-cast-no-photo">
                    <PersonRoundedIcon className="" />
                  </div>
                )}
                <div className="card-page-cast-text">
                  <h4>{actor.name}</h4>
                  <span className="card-page-cast-character">
                    {actor.character}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-page-black-blank"></div>

        <div className="card-page-section">
          <div className="card-page-title-wrapper">
            <h2>{matrixCollection.length} movies</h2>
            <div
              onMouseEnter={(e) => setSortBtn(true)}
              onMouseLeave={(e) => setSortBtn(false)}
              className="card-page-film-sort"
            >
              <div className="card-page-sort-title">
                <h2>Sort</h2>
                <ArrowDropDownRoundedIcon />
              </div>
              <div className="card-page-sort-btn">
                <div
                  className={
                    sortBtn
                      ? "card-page-sort-cols-on"
                      : "card-page-sort-cols-off"
                  }
                >
                  <div className="card-page-sort-cols-wrapper">
                    <div
                      onMouseEnter={(e) => setSortSubBtn(true)}
                      onMouseLeave={(e) => setSortSubBtn(false)}
                      className="card-page-sort-col"
                    >
                      <span className="card-page-sort-col-title">
                        Popularity
                        <ArrowRightRoundedIcon />
                      </span>
                      <div className="card-page-sort-sub-cols-wrapper">
                        <div
                          className={
                            sortSubBtn
                              ? "card-page-sort-sub-cols-on"
                              : "card-page-sort-sub-cols-off"
                          }
                        >
                          <div className="card-page-sort-sub-col">
                            Ascending
                          </div>
                          <div className="card-page-sort-sub-col">
                            Descending
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      onMouseEnter={(e) => setSortSubBtn(true)}
                      onMouseLeave={(e) => setSortSubBtn(false)}
                      className="card-page-sort-col"
                    >
                      <span className="card-page-sort-col-title">Rating</span>
                      <ArrowRightRoundedIcon />
                    </div>
                    <div
                      onMouseEnter={(e) => setSortSubBtn(true)}
                      onMouseLeave={(e) => setSortSubBtn(false)}
                      className="card-page-sort-col"
                    >
                      <span className="card-page-sort-col-title">
                        Released Date
                      </span>
                      <ArrowRightRoundedIcon />
                    </div>
                  </div>
                  {/* <div className="card-page-sort-sub-cols-wrapper">
                    <div
                      className={
                        sortSubBtn
                          ? "card-page-sort-sub-cols-on"
                          : "card-page-sort-sub-cols-off"
                      }
                    >
                      <div className="card-page-sort-sub-col">Ascending</div>
                      <div className="card-page-sort-sub-col">Descending</div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* <div
                onMouseLeave={(e) => setSortBtn(false)}
                className="card-page-sort-cols"
              >
                <div
                  onMouseEnter={(e) => setSortBtn(true)}
                  className="card-page-sort-cols-title"
                >
                  Sort
                  <ArrowDropDownRoundedIcon />
                </div>
                <div
                  onMouseEnter={(e) => setSortSubBtn(true)}
                  onMouseLeave={(e) => setSortSubBtn(false)}
                  className={
                    sortBtn
                      ? "card-page-sort-cols-show"
                      : "card-page-sort-cols-hidden"
                  }
                >
                  <ol>
                    <li className="card-page-sort-col-title">
                      Popularity <ArrowRightRoundedIcon />
                    </li>
                  </ol>
                  
                </div>
                <div
                  className={
                    sortSubBtn
                      ? "card-page-sort-sub-cols-show"
                      : "card-page-sort-sub-cols-hidden"
                  }
                >
                  <ol
                  className={
                    sortSubBtn
                      ? "card-page-sort-sub-cols-show"
                      : "card-page-sort-sub-cols-hidden"
                  }
                  >
                    <li>Ascending</li>
                    <li>Descending</li>
                  </ol>
                </div>
              </div> */}
            </div>
          </div>
          <div className="card-page-films">
            {matrixCollection.map((movie, index) => (
              <div key={`${movie.id}-${index}`} className="card-page-film">
                <div className="card-page-film-poster-wrapper">
                  <img
                    className="card-page-film-poster"
                    src={
                      process.env.REACT_APP_IMAGE_URL +
                      "w200" +
                      `${movie.poster_path}`
                    }
                  />
                </div>
                <div className="card-page-film-text">
                  <div className="card-page-film-title">
                    <h2>{movie.original_title}</h2>
                    <p>{movie.release_date}</p>
                  </div>
                  <div className="card-page-film-about">
                    {/* <h3>{movie.overview}</h3> */}
                    {Movie_overview_limit(movie.overview)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  React.useEffect(() => {
    FetchData();
  }, []);

  return (
    <>{isLoading === true ? <Loading /> : <CardPageAdditionalInfoType />}</>
  );
}
