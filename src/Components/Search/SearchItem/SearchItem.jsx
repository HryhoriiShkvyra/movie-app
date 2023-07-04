import React from "react";
import "./SearchItem.css";
import LandscapeIcon from '@mui/icons-material/Landscape';
import { useNavigate } from "react-router-dom";


export default function SearchItem({item, id}) {

  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState()
  const navigate = useNavigate()

  const fetch = require('node-fetch');

  const url = 'https://api.themoviedb.org/3/movie/500?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0'
    }
  };
  
  
  React.useEffect(() => {
    setIsLoading(true)
    const request = fetch(url, options)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.error('error:' + err));
    setIsLoading(false)
    
  }, [])

  function redirectToItem () {
    return(
      navigate(`/search/${id}/item/${item.id}`)
    )
  }

  return (
    <div className="searchItem" onClick={redirectToItem}>
      {
        isLoading === true ?
        null
        :
        <>
        {
          item.poster_path === null ?
          <div className="searchItem-null-wrapper">
            <LandscapeIcon className="searchItem-null-icon"/>
          </div>
          :
          <img className="searchItem-poster" src={process.env.REACT_APP_IMAGE_URL + `w200` + item.poster_path} alt=""/>
        }
          <div className="searchItem-text">
            <div className="searchItem-text-main">
              <div className="searchItem-title">{item.title}</div>
              <div className="searchItem-release-date">{item.release_date}</div>
            </div>
            <div className="searchItem-overview">{item.overview}</div>
          </div>
        </>
        
      }
      
    </div>
  )
}
