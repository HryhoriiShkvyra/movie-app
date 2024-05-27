import React from "react";
import "./CardPageAdditionalInfo.css";
import {
  ChangeHistoryRounded,
  FacebookRounded,
  WebAssetRounded,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";

import CardPageAdditionalInfoTV from "./CardPageAdditionalInfoTV";
import CardPageAdditionalInfoCollection from "./CardPageAdditionalInfoCollection";
import CardPageAdditionInfoMovie from "./CardPageAdditionInfoMovie";

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
  const [matrix, setMatrix] = React.useState();

  const [sortValueData, setSortValueData] = React.useState();

  const [pressBtnSortBy, setPressBtnSortBy] = React.useState("");

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
  const matrix_url =
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

        const matrix_promise = fetch(matrix_url, options).then((response) =>
          response.json()
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
          matrix_promise,
          url_promise,
          the_matrix_promise,
          the_matrix_reload_promise,
          the_matrix_revolution_promise,
          the_matrix_resurrection_promise,
        ]);
        const data = request;

        const matrix_collection = [data[4], data[5], data[6], data[7]];
        setMatrixCollection(matrix_collection);
        console.log(matrix_collection);

        // const sortedFilms = sortFilms(matrix_collection, sortSelectState);
        // setSortValueData(sortedFilms);
        // console.log(sortedFilms);

        console.log(data);

        setCardData(data[3]);
        // setCardData(data[3]);
        setMatrix(data[2].cast);
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
      return (
        <CardPageAdditionInfoMovie
          cardData={cardData}
          keywordsArray={keywordsArray}
        />
      );
    } else if (requestType === "tv") {
      return (
        <CardPageAdditionalInfoTV
          cardData={cardData}
          keywordsArray={keywordsArray}
        />
      );
    } else if (requestType === "collection") {
      return (
        <CardPageAdditionalInfoCollection
          matrix={matrix}
          matrixCollection={matrixCollection}
        />
      );
    } else return console.log("error");
  };

  // const CardPageAdditionalInfoMovie = () => {
  //   return (
  //     <>
  //       <div className="card-additional-info">
  //         <div className="card-additional-info-cols">
  //           <div className="card-additional-info-social">
  //             <FacebookRounded />
  //             <div className="plank"></div>
  //             <ChangeHistoryRounded />
  //             <div className="plank"></div>
  //             <WebAssetRounded />
  //           </div>
  //         </div>
  //         <div className="card-additional-info-cols">
  //           <div className="card-additional-info-col">
  //             <h4>status</h4>
  //             <div className="card-additional-info-second">
  //               {cardData.status}
  //             </div>
  //           </div>
  //           <div className="card-additional-info-col">
  //             <h4>original language</h4>
  //             <div className="card-additional-info-second">
  //               {cardData.original_language}
  //             </div>
  //           </div>
  //           <div className="card-additional-info-col">
  //             <h4>budget</h4>
  //             <div className="card-additional-info-second">
  //               ${cardData.budget}.00
  //             </div>
  //           </div>
  //           <div className="card-additional-info-col">
  //             <h4>revenue</h4>
  //             <div className="card-additional-info-second">
  //               ${cardData.revenue}.00
  //             </div>
  //           </div>
  //         </div>
  //         {keywordsArray === undefined ? (
  //           <div className="card-additional-info-col-no-words">
  //             <h4>keywords</h4>
  //             <div className="card-additional-info-words">
  //               <span className="card-additional-info-no-word">
  //                 No keywords have been added
  //               </span>
  //             </div>
  //           </div>
  //         ) : (
  //           <div className="card-additional-info-col">
  //             <h4>keywords</h4>
  //             <div className="card-additional-info-words">
  //               {keywordsArray.map((item) => (
  //                 <div className="card-additional-info-word" key={item.id}>
  //                   {item.name}
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         )}
  //       </div>

  //       <div className="content-score-wrapper">
  //         <h4>content score</h4>
  //         <div className="content-score">100</div>
  //         <h6>yes! looking good!</h6>
  //       </div>

  //       <div className="leaderboard MTVAdditional">
  //         <h4>Top Contributors</h4>
  //         <div className="leaders">
  //           <div className="leader">
  //             <div className="leader-img"></div>
  //             <div className="leader-text">
  //               <div className="leader-score">100</div>
  //               <div className="leader-name">leader-nickname</div>
  //             </div>
  //           </div>
  //           <div className="leader">
  //             <div className="leader-img"></div>
  //             <div className="leader-text">
  //               <div className="leader-score">100</div>
  //               <div className="leader-name">leader-nickname</div>
  //             </div>
  //           </div>
  //           <div className="leader">
  //             <div className="leader-img"></div>
  //             <div className="leader-text">
  //               <div className="leader-score">100</div>
  //               <div className="leader-name">leader-nickname</div>
  //             </div>
  //           </div>
  //           <div className="leader">
  //             <div className="leader-img"></div>
  //             <div className="leader-text">
  //               <div className="leader-score">100</div>
  //               <div className="leader-name">leader-nickname</div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="edit-history">view edit history</div>
  //       </div>
  //     </>
  //   );
  // };

  // function sortSelectState() {
  //   if (sortValue === "PopularAscending") {
  //     return sortArrayByPopularAscending;
  //   } else if (sortValue === "PopularDescending") {
  //     return sortArrayByPopularDescending;
  //   } else console.log("sort do not have any state yet || error");
  // }

  function sortArrayByPopularAscending(a, b) {
    return a.popular - b.popular;
  }

  function sortArrayByPopularDescending(a, b) {
    return b.popular - a.popular;
  }

  function sortFilms(films, sortFunction) {
    // Check if films is not undefined
    if (films === undefined) {
      console.error("films is undefined");
      return [];
    }

    // Check if films is an array
    if (Array.isArray(films)) {
      // Create a copy of the original array to avoid modifying the original data
      const sortedFilms = [...films];
      return sortedFilms.sort(sortFunction);
    }

    // Check if films is an object and has the iterable protocol
    if (
      typeof films === "object" &&
      films !== null &&
      typeof films[Symbol.iterator] === "function"
    ) {
      // Convert the iterable object to an array
      const filmsArray = Array.from(films);
      const sortedFilms = filmsArray.sort(sortFunction);
      return sortedFilms;
    }

    // Handle the case when films is not iterable
    console.error("films is not iterable");
    return films;
    // const sortedFilms = [...films];
    // return sortedFilms.sort(sortFunction);
  }

  const sortSelectState = sortArrayByPopularAscending;
  const SortedFilms = sortFilms(matrixCollection, sortSelectState);

  // function sortFilms(films, sortFunction) {
  //   return films.sort(sortFunction);
  // }

  // const SortedFilms = sortFilms(matrixCollection, sortSelectState);
  // console.log(SortedFilms);

  React.useEffect(() => {
    console.log(sortValueData);
  }, [sortValueData]);

  // function sortMethod(pressBtnSortBy) {
  //   if (pressBtnSortBy === "popularAscending") {
  //     return sort((a, b) => a.popularity - b.popularity);
  //   } else if (pressBtnSortBy === "popularDescending") {
  //     return sort((a, b) => b.popularity - a.popularity);
  //   }
  // }

  // function sortBtnStateNexG () {
  //   if (pressSortByPopular === "popular") {
  //     return(
  //       setPressSortByPopular(true),
  //       setPressSortByRating(false),
  //       setPressSortByReleaseDate(false)
  //     )
  //   } else console.log("error in state");

  //   if (pressSortByPopular === "rating") {
  //     return(
  //       setPressSortByPopular(false),
  //       setPressSortByRating(true),
  //       setPressSortByReleaseDate(false)
  //     )
  //   } else console.log("error in state");

  //   if (pressSortByPopular === "rating") {
  //     return(
  //       setPressSortByPopular(false),
  //       setPressSortByRating(false),
  //       setPressSortByReleaseDate(true)
  //     )
  //   } else console.log("error in state")
  // }

  // React.useState(() => {
  //   console.log(" is true")
  // }, [])

  // function sortBtnState() {
  //   if (pressSortByPopular === true) {
  //     return setPressSortByRating(false), setPressSortByReleaseDate(false);
  //   }

  //   if (pressSortByRating === true) {
  //     return setPressSortByPopular(false), setPressSortByReleaseDate(false);
  //   }

  //   if (pressSortByReleaseDate === true) {
  //     return setPressSortByPopular(false), setPressSortByRating(false);
  //   }
  // }

  React.useEffect(() => {
    FetchData();
  }, []);

  return (
    <>{isLoading === true ? <Loading /> : <CardPageAdditionalInfoType />}</>
  );
}
