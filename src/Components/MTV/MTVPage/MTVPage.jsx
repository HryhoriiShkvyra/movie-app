import React from "react";
import "./MTVPage.css";
import MTVCard from "../MTVCard/MTVCard";
// import CardCast from "../CardCast/CardCast";
import MTVAdditionalInfo from "../MTVAdditionalInfo/MTVAdditionalInfo";
import Navbar from "../../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import ScrollBar from "../../ScrollBar/ScrollBar";

export default function MTVPage() {
  const { requestType } = useParams();
  const { id } = useParams();

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
      <MTVCard requestType={requestType} />
      <div className="container">
        <div className="about-card">
          <div className="about-main">
            <ScrollBar id={id} pageType={pageType} movieOrTv={requestType} />
            {/* <CardCast requestType={requestType} /> */}
          </div>
          <div className="about-else">
            <MTVAdditionalInfo requestType={requestType} />
          </div>
        </div>
        {/* <Link
          to={`/search/${searchValue}/${id}/cast`}
          className="full-cast-and-crew-link"
        >
          full cast & crew
        </Link> */}
      </div>
    </div>
  );
}
