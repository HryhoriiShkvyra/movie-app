import React from "react";
import "./Navbar.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Navbar({ navbarType }) {
  console.log(navbarType);

  return (
    <div className="nav-bar">
      {navbarType === "keywordPage" ? (
        <div className="navbar-wrapper">
          <div className="nav-col-active">
            <div className="nav-link">Movies</div>
            <ChevronRightIcon className="nav-icon" />
          </div>

          <div className="nav-col">
            <div className="nav-link">Sort</div>
            <ChevronRightIcon className="nav-icon" />
          </div>
        </div>
      ) : (
        <div className="navbar-wrapper">
          <div className="nav-col-active">
            <div className="nav-link">Overview</div>
            <ChevronRightIcon className="nav-icon" />
          </div>
          <div className="nav-col">
            <div className="nav-link">Media</div>
            <ChevronRightIcon className="nav-icon" />
          </div>
          <div className="nav-col">
            <div className="nav-link">Fandom</div>
            <ChevronRightIcon className="nav-icon" />
          </div>
          <div className="nav-col">
            <div className="nav-link">Share</div>
            <ChevronRightIcon className="nav-icon" />
          </div>
        </div>
      )}
    </div>
  );
}
