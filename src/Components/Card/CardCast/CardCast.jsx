import React from "react";
import "./CardCast.css";
import Loading from "../../Loading/Loading";
import { Link, useParams } from "react-router-dom";
// import CrewPage from "../../Crew/CastPage/CastPage";



export default function CardCast() {

    const [isLoading, setIsLoading] = React.useState();
    const [castValue, setCastValue] = React.useState([]);

    const {searchValue} = useParams();
    const {id} = useParams();
    console.log(searchValue)
    const fetch = require('node-fetch');

    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTY0Y2JiNDFkYzdjODI4NjJmZTJhMDg3YmU4OWFhOSIsInN1YiI6IjY0NTNjNWRmODdhMjdhMDBlMzhmOWVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7-VNMO3GMdqdtKdSv5NXwZEJL9BIQeAbDKOTLFhtB0'
    }
    };

    React.useEffect (() => {
        function request () {
            fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setCastValue(data.cast)
                setIsLoading(prev => (!prev))
                console.log(data.cast)
            })
            .catch(err => console.error('error:' + err));        
        }
        
        request()
    }, [])
    
  return (
        <div>

            {
                isLoading === true ?

                <div className="cast-wrapper">
                    <span className="cast-top">
                        top billed cast
                    </span>
                    <div className="cast">
                        {
                            castValue.map( item => (
                                <div className="cast-item" key={item.id}>
                                    <img className="cast-photo" src={process.env.REACT_APP_IMAGE_URL + "w200" + item.profile_path} alt=""></img>
                                    <div className="cast-text">
                                        <div className="cast-name">{item.name}</div>
                                        <div className="cast-character">{item.character}</div>
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div>

                
                </div>
                :
                <div className="cast-wrapper">
                    <span className="cast-text">
                        top billed cast
                    </span>
                    <div className="cast">
                            <div className="cast-unfilled-photo"></div>
                            <div className="cast-unfilled-name"></div>
                            <div className="cast-unfilled-character"></div>
                        </div>
                </div>
            }

            <Link to={`/search/${searchValue}/${id}/cast`} className="full-cast-and-crew-link">full cast & crew</Link>
            
        </div>
  )
}
