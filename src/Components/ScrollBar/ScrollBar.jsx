import React from "react";
import "./ScrollBar.css";


export default function Trending() {

    const [trendingItems, setTrendingItems] = React.useState([]);
    const [activeBtn, setActiveBtn] = React.useState("day");
    const [isLoading, setIsLoading] = React.useState();

    const fetch = require('node-fetch');

    const url = process.env.REACT_APP_BASE_URL + "trending/all/" + activeBtn + "?language=en-US";
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN_v4
    }
    };

    React.useEffect(() => {
        setIsLoading(true)
        const request =  fetch(url, options)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTrendingItems(data.results)
            setIsLoading(false)
        })
        .catch(err => console.error('error:' + err));
        
   
    }, [activeBtn])

  return (
    <>
    {
        isLoading === true ? 
        <>Loading</>
        :
        <div className="scroll-bar">
        <div className="container">
            <div className="scroll-text">
                <div className="scroll-title">Trending</div>
                <div className="scroll-type">
                    <button onClick={e => setActiveBtn("day")} className={activeBtn === "day" ? "scroll-type-btn-active" : "scroll-type-btn"}>Today</button>
                    <button onClick={e => setActiveBtn("week")} className={activeBtn === "week" ? "scroll-type-btn-active" : "scroll-type-btn"}>This Week</button>
                </div>
            </div>
            <div className="scroll-items-wrapper" >
                <div className="scroll-items">
                    {
                        trendingItems.map(item => (
                            <div className="scroll-item" key={item.id}>
                                <img className="scroll-item-image" src={process.env.REACT_APP_IMAGE_URL + `w200` + item.poster_path} alt="" />
                                <div className="scroll-item-text">
                                    <span className="scroll-item-title">
                                        {item.name? 
                                            item.name
                                            :
                                            item.title
                                        }  
                                    </span>
                                    <span className="scroll-item-date-release">
                                        {item.release_date? 
                                            item.release_date
                                            :
                                            item.first_air_date
                                    }  </span>
                                </div>
                            
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    </div>
    }
    </>
    
  )
}
