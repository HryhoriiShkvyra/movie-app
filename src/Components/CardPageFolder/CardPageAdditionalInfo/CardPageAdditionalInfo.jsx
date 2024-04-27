import React from "react";
import "./CardPageAdditionalInfo.css";
import {
  ChangeHistoryRounded,
  FacebookRounded,
  WebAssetRounded,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";

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
  const [isLoading, setIsLoading] = React.useState(false);
  const [networksArray, setNetworksArray] = React.useState();
  const [keywordsArray, setKeywordsArray] = React.useState();

  const fetch = require("node-fetch");

  const main_url = `https://api.themoviedb.org/3/${requestType}/${handleId(
    id
  )}?language=en-US`;
  const keywords_url = `https://api.themoviedb.org/3/${requestType}/${handleId(
    id
  )}/keywords`;
  const collection_url = `https://api.themoviedb.org/3/${requestType}/${handleId(
    id
  )}/keywords`;
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
      let promises = [];

      if (requestType === "movie") {
        promises = [fetch(main_url, options)];
      } else if (requestType === "tv") {
        promises = [fetch(keywords_url, options)];
      } else if (requestType === "collection") {
        promises = [fetch(collection_url, options)];
      }

      const results = await Promise.all(promises);

      const data = await handleFetchResults(results);

      if (requestType === "movie") {
        console.log("requestType ===> " + requestType);
        console.log(data);

        // setCardValue(data[0]);
        // setKeywordsArray(data[1].keywords);
      } else if (requestType === "tv") {
        // setCardValue(data);
        // setNetworksArray(data.networks);
        console.log("requestType ===> " + requestType);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFetchResults = async (results) => {
    const dataArr = await Promise.all(
      results.map(async (result) => {
        if (!result.ok) {
          throw new Error("Fetch failed");
        }
        return await result.json();
      })
    );

    return dataArr.map((data) => {
      if (requestType === "movie") {
        return data.results;
      }
      if (requestType === "tv") {
        return data.results;
      }
      if (requestType === "collection") {
        return data.results;
      }
    });
  };

  // const handleFetchResults = async (results) => {
  //   return Promise.all(
  //     results
  //       .map(async (result) => {
  //         if (!result.ok) {
  //           throw new Error("Fetch failed");
  //         }

  //         return result.json();
  //       })
  //       .then((dataArr) => {
  //         return dataArr.map((data) => {
  //           if (requestType === "movie") {
  //             return data.results;
  //           }
  //           if (requestType === "tv") {
  //             return data.results;
  //           }
  //           if (requestType === "collection") {
  //             return data.results;
  //           }
  //         });
  //       })
  //   );
  // };

  // const dataArr = await Promise.all(
  //   results.map(async (result) => {
  //     if (!result.ok) {
  //       throw new Error("Fetch failed");
  //     }
  //     return result.json();
  //   })
  // );
  // return dataArr.map((data) => {
  //   if (requestType === "movie") {
  //     return data.results;
  //   }
  //   if (requestType === "tv") {
  //     return data.results;
  //   }
  // });
  // };

  // const handleFetchResults = async (results) => {
  //   return Promise.all(
  //     results.map(async (results) => {
  //       if (!results.ok) {
  //         throw new Error("Fetch failed");
  //       }
  //     })
  //   ).then((dataArr) => {
  //     return dataArr.map((data) => {
  //       if (requestType === "movie") {
  //         return data.results;
  //       }
  //       if (requestType === "tv") {
  //         return data.results;
  //       }
  //     });
  //   });
  // };

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
    return <div>collection</div>;
  };

  React.useEffect(() => {
    FetchData();
  }, []);

  return (
    <>{isLoading === true ? <Loading /> : <CardPageAdditionalInfoType />}</>
  );
}
