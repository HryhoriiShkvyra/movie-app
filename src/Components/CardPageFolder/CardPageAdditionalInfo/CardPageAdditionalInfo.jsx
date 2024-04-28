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

  const [cardValue, setCardValue] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [networksArray, setNetworksArray] = React.useState();
  const [keywordsArray, setKeywordsArray] = React.useState();
  const [featuredCast, setFeaturedCast] = React.useState();
  const [fightClub, setFightClub] = React.useState();

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
        setCardValue(data[0]);
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

        // const request = Promise.all([collections_promise]);
        const request = await Promise.all([
          collections_promise,
          featuredCast_promise,
          fightClub_promise,
          url_promise,
        ]);
        const data = request;

        console.log(data);

        setCardValue(data[3]);
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

  const CardPageAdditionalInfoType = () => {
    if (requestType === "movie") {
      return <CardPageAdditionalInfoMovie />;
    } else if (requestType === "tv") {
      return <CardPageAdditionalInfoTV />;
    } else if (requestType === "collection") {
      return <CardPageAdditionalInfoCollection />;
    } else return console.log("error");
  };

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
                {cardValue.status}
              </div>
            </div>
            <div className="card-additional-info-col">
              <h4>original language</h4>
              <div className="card-additional-info-second">
                {cardValue.original_language}
              </div>
            </div>
            <div className="card-additional-info-col">
              <h4>budget</h4>
              <div className="card-additional-info-second">
                ${cardValue.budget}.00
              </div>
            </div>
            <div className="card-additional-info-col">
              <h4>revenue</h4>
              <div className="card-additional-info-second">
                ${cardValue.revenue}.00
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
                {/* {cardValue.status} */}
              </div>
            </div>
            <div className="card-additional-info-col">
              <h4>original name</h4>
              <div className="card-additional-info-second">
                {cardValue.original_name}
              </div>
            </div>
            {/* <NetworksLength /> */}
            <div className="card-additional-info-col">
              <h4>type</h4>
              <div className="card-additional-info-second">
                {cardValue.type}
              </div>
            </div>
            <div className="card-additional-info-col">
              <h4>original language</h4>
              <div className="card-additional-info-second">
                {cardValue.original_language}
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
          <h2>Featured Cast</h2>
          <div className="card-page-firms">
            <div className="card-page-film">
              <div className="card-page-film-poster-wrapper">
                <img
                  className="card-page-film-poster"
                  src={
                    process.env.REACT_APP_IMAGE_URL +
                    "w200" +
                    `${cardValue.poster_path}`
                  }
                />
              </div>
              <div className="card-page-film-text">
                <div className="card-page-film-title">
                  <h2>{cardValue.original_title}</h2>
                  <p>{cardValue.release_date}</p>
                </div>
                <div className="card-page-film-about">
                  <h3>{cardValue.overview}</h3>
                </div>
              </div>
            </div>
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
