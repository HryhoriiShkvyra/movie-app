import React from "react";
import "./CardPage.css";
import Card from "../Card/Card";
import CardCast from "../CardCast/CardCast";
import CardAdditionalInfo from "../CardAdditionalInfo/CardAdditionalInfo";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router-dom";

export default function CardPage() {
  const { requestType } = useParams();
  // console.log(requestType);

  const currentUrl = window.location.href;
  // console.log(currentUrl);

  return (
    <div className="card-page">
      <Navbar />
      <Card requestType={requestType} />
      <div className="container">
        <div className="about-card">
          <div className="about-main">
            <CardCast requestType={requestType} />
          </div>
          <div className="about-else">
            <CardAdditionalInfo requestType={requestType} />
          </div>
        </div>
      </div>
    </div>
  );
}
