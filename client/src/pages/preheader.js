import React from "react";
import image from "C:/Users/Armann/Desktop/major_project/client/src/Assets/preheader.png";
import LogoImage from "../Assets/ECOAGRIGUIDELOGO1.png";
import { Link } from "react-router-dom";
function preheader() {
  return (
    <div>
      <div className="row" class="position-relative">
        <Link to="/">
          <img
            src={LogoImage}
            class="position-absolute rounded-circle"
            style={{
              left: "15px",
              top: "15px",
              border: "solid 3px black",
              outline: "solid 4px",
              outlineColor: "white",
            }}
            width="125px"
          />
        </Link>
        <img src={image} style={{ opacity: 1, width: "100vw" }} height="150" />
      </div>
    </div>
  );
}
export default preheader;
