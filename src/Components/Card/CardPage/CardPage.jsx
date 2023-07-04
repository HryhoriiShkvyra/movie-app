import React from "react";
import "./CardPage.css";
import Card from "../Card/Card";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CardCast from "../CardCast/CardCast";


export default function CardPage() {
  return (
    <div className="card-page">
        <div className="nav-bar">
            <div className="nav-col-active">
                <div className="nav-link">Overview</div>
                <ChevronRightIcon className="nav-icon"/>
            </div>
            <div className="nav-col">
                <div className="nav-link">Media</div>
                <ChevronRightIcon className="nav-icon"/>
            </div>
            <div className="nav-col">
                <div className="nav-link">Fandom</div>
                <ChevronRightIcon className="nav-icon"/>
            </div>
            <div className="nav-col">
                <div className="nav-link">Share</div>
                <ChevronRightIcon className="nav-icon"/>
            </div>
        </div>
        
        <Card/>
        <CardCast/>
    </div>
  )
}
