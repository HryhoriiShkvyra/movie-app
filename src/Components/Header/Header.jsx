import React from "react";
import "./Header.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom";

const Header = () => {

    const [isLang, setIsLang] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("")
    
  

    function handleInputDown (event) {
        if (event.key === "Enter") {
            fetch(process.env.REACT_APP_BASE_URL + `movie/157336?api_key=` + process.env.REACT_APP_TOKEN_v3)
            .then(response => (response.json()))
            .then(data => console.log(data))
        }
    }

    return(
        <>
            <div className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-left">
                            <Link className="logo" to="/">
                                <div className="logo-wrapper">
                                    <div className="logo-text">TMDB</div>
                                    <div className="logo-rectangle"></div>
                                </div>
                            </Link>
                            <Link className="header-col" to="/movie">Movie</Link>
                            <Link className="header-col" to="/shows">TV Shows</Link>
                            <Link className="header-col" to="/people">People</Link>
                            <Link className="header-col" to="/more">More</Link>
                        </div>
                        <div className="header-right">
                            <Link className="header-col"><AddIcon/></Link>
                            <div className="header-col-lang">En</div>
                            <Link className="header-col">Login</Link>
                            <Link className="header-col">Join Site</Link>
                            <div>
                                {isLang === false ?
                                    <div 
                                        onClick={event => setIsLang(true)}
                                        className="header-col" >
                                        <SearchIcon/>
                                    </div>
                                    : 
                                    <div 
                                        onClick={event => setIsLang(false)}
                                        className="header-col" >
                                        <CloseIcon/>
                                    </div>
                                } 
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            {
                isLang === false ? 
                null
                :
                <div className="search-bar-wrapper">
                    <input 
                        onChange={(event) => setInputValue(event.target.value)}
                        onKeyDown={handleInputDown}
                        className="search-bar" 
                        placeholder="enter value"
                    />
                </div>
            }
        </>
    );
};

export default Header;