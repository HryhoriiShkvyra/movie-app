import React from "react";
import "./TV.css";
import MTVPage from "../../MTV/MTVPage/MTVPage";

export default function TV() {
  return (
    <div className="shows">
      <div className="container">
        <div className="shows-wrapper">
          <MTVPage />
        </div>
      </div>
    </div>
  );
}
