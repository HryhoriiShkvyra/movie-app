import React from "react";
import "./Header.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-left">
                        <Link className="header-col" to="/">MovieSiteLogo</Link>
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
                        <Link className="header-col"><SearchIcon/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;