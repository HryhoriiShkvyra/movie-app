import React from "react";
import "./CardPage.css";
import CardPageCard from "../CardPageCard/CardPageCard";
// import CardCast from "../CardCast/CardCast";
import CardPageAdditionalInfo from "../CardPageAdditionalInfo/CardPageAdditionalInfo";
import Navbar from "../../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import ScrollBar from "../../ScrollBar/ScrollBar";
import CardCast from "../CardCast/CardCast";

export default function CardPage() {
  const { requestType } = useParams();
  const { id } = useParams();
  // const handleId = (id) => {
  //   let idWithLetters = id;
  //   const onlyId = idWithLetters.replace(/\D/g, "");
  //   return onlyId;
  // };

  const HandleOnlyID = id.split("-")[0];

  React.useEffect(() => {
    // handleId(id);
    // console.log(id);
  }, [id]);

  const pageType = "mtv-actors";

  // function cleanId(str, symbol) {
  //   const index = str.indexOf(symbol);
  //   if (index !== -1) {
  //     return str.substring(0, index);
  //   }
  //   return str;
  // }

  // const cleanedId = cleanId(id, "-");

  return (
    <div className="card-page">
      <Navbar />
      <CardPageCard requestType={requestType} id={HandleOnlyID} />
      <div className="container">
        <div className="about-card">
          <div className="about-main">
            <CardCast requestType={requestType} />
          </div>
          <div className="about-else">
            <CardPageAdditionalInfo requestType={requestType} />
          </div>
        </div>
      </div>
    </div>
  );
}
