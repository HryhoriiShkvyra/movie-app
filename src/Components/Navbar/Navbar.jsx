import React from "react";
import "./Navbar.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Navbar() {
  return (
    <div className="nav-bar">
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
  );
}
