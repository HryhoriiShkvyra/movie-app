import React from "react";
import "./CardPage.css";
import CardPageCard from "../CardPageCard/CardPageCard";
import CardPageAdditionalInfo from "../CardPageAdditionalInfo/CardPageAdditionalInfo";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router-dom";
import CardCast from "../CardCast/CardCast";

export default function CardPage() {
  const { requestType } = useParams();
  const { id } = useParams();
  // const handleId = (id) => {
  //   let idWithLetters = id;
  //   const onlyId = idWithLetters.replace(/\D/g, "");
  //   return onlyId;
  // };

  console.log(requestType);

  const HandleOnlyID = id.split("-")[0];

  // function cleanId(str, symbol) {
  //   const index = str.indexOf(symbol);
  //   if (index !== -1) {
  //     return str.substring(0, index);
  //   }
  //   return str;
  // }

  // const cleanedId = cleanId(id, "-");

  const ScrollbarBehavior = () => {
    if (requestType === "movie") {
      return <CardCast requestType={requestType} />;
    } else if (requestType === "tv") {
      return <CardCast requestType={requestType} />;
    } else if (requestType === "collection") {
      return null;
    }
  };

  return (
    <div className="card-page">
      <Navbar />
      <CardPageCard requestType={requestType} id={HandleOnlyID} />
      <div className="container">
        <div className="about-card">
          <div className="about-main">
            <ScrollbarBehavior />
          </div>
          <div className="about-else">
            <CardPageAdditionalInfo requestType={requestType} />
          </div>
        </div>
      </div>
    </div>
  );
}
