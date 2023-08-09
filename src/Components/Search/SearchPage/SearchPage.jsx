import React from "react";
import "./SearchPage.css";
import SearchItem from "../SearchItem/SearchItem";
import { useParams } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";
import Loading from "../../Loading/Loading";
import SearchTab from "../SearchTab/SearchTab";
export default function SearchPage() {
  const { searchValue } = useParams();
  const [movieArray, setMovieArray] = React.useState([]);
  const [tvArray, setTvArray] = React.useState([]);
  const [collectionArray, setCollectionArray] = React.useState([]);
  const [companyArray, setCompanyArray] = React.useState([]);
  const [keywordsArray, setKeywordsArray] = React.useState([]);
  const [multiArray, setMultiArray] = React.useState([]);
  const [peopleArray, setPeopleArray] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchType, setSearchType] = React.useState("tv");

  const fetch = require("node-fetch");

  const movie_url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US`;
  const tv_url = `https://api.themoviedb.org/3/search/tv?query=${searchValue}&include_adult=false&language=en-US`;
  const collection_url = `https://api.themoviedb.org/3/search/collection?query=${searchValue}&include_adult=false&language=en-US`;
  const company_url = `https://api.themoviedb.org/3/search/company?query=${searchValue}&page=1`;
  const keywords_url = `https://api.themoviedb.org/3/search/keyword?query=${searchValue}&page=1`;
  const multi_url = `https://api.themoviedb.org/3/search/multi?query=${searchValue}&include_adult=false&language=en-US`;
  const person_url = `https://api.themoviedb.org/3/search/person?query=${searchValue}&include_adult=false&language=en-US`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0",
    },
  };

  const FetchData = async () => {
    const movie_promise = fetch(movie_url, options).then((response) =>
      response.json()
    );
    const tv_promise = fetch(tv_url, options).then((response) =>
      response.json()
    );
    const collection_promise = fetch(collection_url, options).then((response) =>
      response.json()
    );
    const company_promise = fetch(company_url, options).then((response) =>
      response.json()
    );
    const keywords_promise = fetch(keywords_url, options).then((response) =>
      response.json()
    );
    const multi_promise = fetch(multi_url, options).then((response) =>
      response.json()
    );
    const person_promise = fetch(person_url, options).then((response) =>
      response.json()
    );

    const request = await Promise.all([
      movie_promise,
      tv_promise,
      collection_promise,
      company_promise,
      keywords_promise,
      multi_promise,
      person_promise,
    ]);

    const data = request;

    // console.log(data);

    setMovieArray(data[0].results);
    setTvArray(data[1].results);
    setCollectionArray(data[2].results);
    setCompanyArray(data[3].results);
    setKeywordsArray(data[4].results);
    setMultiArray(data[5].results);
    setPeopleArray(data[6].results);
    setIsLoading((prev) => !prev);
  };

  React.useEffect(() => {
    FetchData();
  }, []);

  const SearchLogic = () => {
    if (searchType === "movie") {
      return (
        <div className="search-page-result">
          {movieArray.map((item) => (
            <SearchItem
              key={item.id}
              item={item}
              searchValue={searchValue}
              searchType={searchType}
            />
          ))}
        </div>
      );
    } else if (searchType === "tv") {
      return (
        <div className="search-page-result">
          {tvArray.map((item) => (
            <SearchItem
              key={item.id}
              item={item}
              searchValue={searchValue}
              searchType={searchType}
            />
          ))}
        </div>
      );
    } else if (searchType === "collection") {
      return (
        <div className="search-page-result">
          {collectionArray.map((item) => (
            <SearchItem
              key={item.id}
              item={item}
              searchValue={searchValue}
              searchType={searchType}
            />
          ))}
        </div>
      );
    } else if (searchType === "company") {
      return (
        <div className="search-page-result">
          {companyArray.map((item) => (
            <SearchItem
              key={item.id}
              item={item}
              searchValue={searchValue}
              searchType={searchType}
            />
          ))}
        </div>
      );
    } else if (searchType === "keywords") {
      return (
        <div className="search-page-result">
          {keywordsArray.map((item) => (
            <SearchItem
              key={item.id}
              item={item}
              searchValue={searchValue}
              searchType={searchType}
            />
          ))}
        </div>
      );
    } else if (searchType === "people") {
      return (
        <div className="search-page-result">
          {peopleArray.map((item) => (
            <SearchItem
              key={item.id}
              item={item}
              searchValue={searchValue}
              searchType={searchType}
            />
          ))}
        </div>
      );
    }
  };

  // React.useEffect(() => {
  //   console.log(searchType);
  // }, [searchType]);

  const SearchPage = () => {
    const movieArrayLength = movieArray.length;
    const tvArrayLength = tvArray.length;
    const collectionArrayLength = collectionArray.length;
    const companyArrayLength = companyArray.length;
    const keywordsArrayLength = keywordsArray.length;
    const multiArrayLength = multiArray.length;
    const peopleArrayLength = peopleArray.length;

    console.log(companyArray);

    const dataArray = [
      movieArrayLength,
      tvArrayLength,
      collectionArrayLength,
      companyArrayLength,
      keywordsArrayLength,
      multiArrayLength,
      peopleArrayLength,
    ];

    return (
      <div className="container">
        <div className="search-page-wrapper">
          <SearchTab
            dataArray={dataArray}
            searchType={searchType}
            setSearchType={setSearchType}
          />

          <SearchLogic />
        </div>
      </div>
    );
  };

  return (
    <div className="search-page">
      {isLoading === true ? <SearchPage /> : <Loading />}
      <div className="search-pages">pages</div>
    </div>
  );
}
