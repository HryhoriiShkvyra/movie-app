import React from "react";
import "./Index.css";

export default function Index() {

const [trendingItems, setTrendingItems] = React.useState([])
const [searchValue, setSearchValue] = React.useState([])

const fetch = require('node-fetch');

const url = process.env.REACT_APP_BASE_URL + 'trending/all/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN_v4
  }
};

React.useEffect(() => {
  fetch(url, options)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    setTrendingItems(data.results)
  })
  .catch(err => console.error('error:' + err));

}, [])


function handleInputDown (event) {
  if (event.key === "Enter") {
    // console.log(event.target.value)
      fetch("https://api.themoviedb.org/3/search/movie?query=" + searchValue + "&api_key=f164cbb41dc7c82862fe2a087be89aa9")
      .then(response => (response.json()))
      .then(data => console.log(data))
  }
}

  return (
    <div className="index">
        <div className="container">
            <div className="index-wrapper">
                <div className="searching-bar-wrapper">
                  <span className="searching-bar-title">Welcome.</span>
                  <span className="searching-bar-sub-title">
                    Millions of movies, TV shows and people to discover. Explore now.
                  </span>
                  <div className="searching-bar">
                    <input 
                      onChange={event => setSearchValue(event.target.value)}
                      onKeyDown={handleInputDown} 
                      className="searching" 
                      placeholder="Search for a movie, tv show, person ..."/>
                    <button className="searching-btn">Search</button>
                  </div>
                </div>
                <div className="trending bar">

                </div>
                <div className="latest-trailers"></div>
            </div> 
        </div>
    </div>
  );
};
