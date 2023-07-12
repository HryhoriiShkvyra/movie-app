import React from "react";
import "./CardPage.css";
import Card from "../Card/Card";
import CardCast from "../CardCast/CardCast";
import CardAdditionalInfo from "../CardAdditionalInfo/CardAdditionalInfo";
import Navbar from "../../Navbar/Navbar";


export default function CardPage() {
  return (
    <div className="card-page">
        <Navbar/>
        
        <Card/>
        <div className="container">
            <div className="about-card">
                <div className="about-main">
                    <CardCast/>
                </div>
                <div className="about-else">
                    <CardAdditionalInfo/>
                </div>
            </div>
        </div>
       



    </div>
  )
}
