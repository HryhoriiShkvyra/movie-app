import React from "react";
import "./MTVPage.css";
import MTVCard from "../MTVCard/MTVCard";
// import CardCast from "../CardCast/CardCast";
import MTVAdditionalInfo from "../MTVAdditionalInfo/MTVAdditionalInfo";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router-dom";
import ScrollBar from "../../ScrollBar/ScrollBar";

export default function MTVPage({ MTVSearch }) {
  const { requestType } = useParams();
  const { id } = useParams();

  function cleanId(str, symbol) {
    const index = str.indexOf(symbol);
    if (index !== -1) {
      return str.substring(0, index);
    }
    return str;
  }

  const cleanedId = cleanId(id, "-");

  return (
    <div className="card-page">
      <Navbar />
      <MTVCard requestType={requestType} />
      <div className="container">
        <div className="about-card">
          <div className="about-main">
            <ScrollBar cleanedId={cleanedId} />
            {/* <CardCast requestType={requestType} /> */}
          </div>
          <div className="about-else">
            <MTVAdditionalInfo requestType={requestType} id={cleanedId} />
          </div>
        </div>
      </div>
    </div>
  );
}
