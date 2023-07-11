import React from "react";
import "./CardAdditionalInfo.css";
import { ChangeHistoryRounded, FacebookRounded, WebAssetRounded } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";


export default function CardAdditionalInfo() {
  const {id} = useParams();

  const [cardValue, setCardValue] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [keywords, setKeywords] = React.useState()

  const fetch = require('node-fetch');

  const url_1 = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const url_2 = `https://api.themoviedb.org/3/movie/${id}/keywords`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0'
    }
  };
  

  React.useEffect(() => {
    function request_1 () {
      fetch(url_1, options)
      .then(res => res.json())
      .then(data => setCardValue(data))
      .catch(err => console.error("error" + err));
    }
    
    function request_2 () {
      fetch(url_2, options) 
      .then(res => res.json())
      .then(data => {
        setKeywords(data.keywords)
        setIsLoading(prev => (!prev))
      })
      .catch(err => console.error("error" + err))
    }

    request_1();
    request_2();
  }, [])

 
  return (
    <>
      { 
        isLoading === true ?
          <div className="card-additional-info">
            <div className="card-additional-info-cols">
              <div className="card-additional-info-social">
                <FacebookRounded/>
                <div className="plank"></div>
                <ChangeHistoryRounded/>
                <div className="plank"></div>
                <WebAssetRounded/>
              </div>
            </div>
            <div className="card-additional-info-cols">
              <div className="card-additional-info-col">
                <h4>status</h4>
                <div className="card-additional-info-second">{cardValue.status}</div>
              </div>
              <div className="card-additional-info-col">
                <h4>original language</h4>
                <div className="card-additional-info-second">{cardValue.original_language}</div>
              </div>
              <div className="card-additional-info-col">
                <h4>budget</h4>
                <div className="card-additional-info-second">${cardValue.budget}.00</div>
              </div>
              <div className="card-additional-info-col">
                <h4>revenue</h4>
                <div className="card-additional-info-second">${cardValue.revenue}.00</div>
              </div>
            
            </div>
            <div className="card-additional-info-col">
              <h4>keywords</h4>
              <div className="card-additional-info-words">
                {keywords.map(item => (
                  <div className="card-additional-info-word" key={item.id}>{item.name}</div>
                ))}
              </div>
            </div>
        </div>
        :
        <Loading/>
      }


      <div className="content-score-wrapper">
        <h4>content score</h4>
        <div className="content-score">100</div>
        <h6>yes! looking good!</h6>
      </div>

      <div className="leaderboard">
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
  ) 
}
