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
