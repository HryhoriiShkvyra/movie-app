import React from "react";
import "./SearchPage.css";
import SearchItem from "../SearchItem/SearchItem";
import { useParams } from "react-router-dom";
import ErrorIcon from '@mui/icons-material/Error';
export default function SearchPage() {

    const {id} = useParams();
    console.log(id)
    const [searchBtn, setSearchBtn] = React.useState("movie")
    const [searchArray, setSearchArray] = React.useState([])

    const fetch = require('node-fetch');

    const url = `https://api.themoviedb.org/3/search/movie?query=${id}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0'
      }
    };
    
    React.useEffect(() => {
        fetch(url, options)
        .then(res => res.json())
        .then(data => {
            setSearchArray(data.results)
            console.log(data.results)
        })
        .catch(err => console.error('error:' + err));
    }, [])

  return (
    <div className="search-page">
        <div className="container">
            <div className="search-page-wrapper">
                <div className="search-page-results-bar">
                    <div className="search-page-results">
                        <div className="search-page-results-title">Search Results</div>
                        <div className="search-page-results-cols">
                            <div
                                onClick={e => setSearchBtn("movie")}
                                className={searchBtn === "movie" ? "search-page-results-col-active" : "search-page-results-col"}>
                                <span className={searchBtn === "movie" ? "search-page-results-col-title-active" : "search-page-results-col-title"}>Movies</span>
                                <span className={searchBtn === "movie" ? "search-page-results-col-result-active" : "search-page-results-col-result"}>0</span>
                            </div>
                            <div
                                onClick={e => setSearchBtn("show")}
                                className={searchBtn === "show" ? "search-page-results-col-active" : "search-page-results-col"}>
                                <span className={searchBtn === "show" ? "search-page-results-col-title-active" : "search-page-results-col-title"}>TV Shows</span>
                                <span className={searchBtn === "show" ? "search-page-results-col-result-active" : "search-page-results-col-result"}>0</span>
                            </div>
                            <div
                                onClick={e => setSearchBtn("people")}
                                className={searchBtn === "people" ? "search-page-results-col-active" : "search-page-results-col"}>
                                <span className={searchBtn === "people" ? "search-page-results-col-title-active" : "search-page-results-col-title"}>People</span>
                                <span className={searchBtn === "people" ? "search-page-results-col-result-active" : "search-page-results-col-result"}>0</span>
                            </div>
                            <div
                                onClick={e => setSearchBtn("collections")}
                                className={searchBtn === "collections" ? "search-page-results-col-active" : "search-page-results-col"}>
                                <span className={searchBtn === "collections" ? "search-page-results-col-title-active" : "search-page-results-col-title"}>Collections</span>
                                <span className={searchBtn === "collections" ? "search-page-results-col-result-active" : "search-page-results-col-result"}>0</span>
                            </div>
                            <div
                                onClick={e => setSearchBtn("companies")}
                                className={searchBtn === "companies" ? "search-page-results-col-active" : "search-page-results-col"}>
                                <span className={searchBtn === "companies" ? "search-page-results-col-title-active" : "search-page-results-col-title"}>Companies</span>
                                <span className={searchBtn === "companies" ? "search-page-results-col-result-active" : "search-page-results-col-result"}>0</span>
                            </div>
                            <div
                                onClick={e => setSearchBtn("keywords")}
                                className={searchBtn === "keywords" ? "search-page-results-col-active" : "search-page-results-col"}>
                                <span className={searchBtn === "keywords" ? "search-page-results-col-title-active" : "search-page-results-col-title"}>Keywords</span>
                                <span className={searchBtn === "keywords" ? "search-page-results-col-result-active" : "search-page-results-col-result"}>0</span>
                            </div>
                            <div
                                onClick={e => setSearchBtn("networks")}
                                className={searchBtn === "networks" ? "search-page-results-col-active" : "search-page-results-col"}>
                                <span className={searchBtn === "networks" ? "search-page-results-col-title-active" : "search-page-results-col-title"}>Networks</span>
                                <span className={searchBtn === "networks" ? "search-page-results-col-result-active" : "search-page-results-col-result"}>0</span>
                            </div>
                        </div>
                    </div>
                    <div className="search-page-tip">
                        <ErrorIcon/>
                        {/* <span className="search-page-tip-icon"></span> */}
                        <span className="search-page-tip-text">Tip: You can use the 'y:' filter to narrow your results by year. Example: 'star wars y:1977'.</span>
                    </div>
                </div>
                <div className="search-page-result">
                    {searchArray.map(item => 
                        <SearchItem key={item.id} item={item} id={id}/>
                    )}
                </div>
            </div>
            <div className="search-pages">pages</div>
        </div>
    </div>
  )
}
