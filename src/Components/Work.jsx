import React from "react";
import Project from "./Project";
import Images from "../utils/constants";
import Footer from "./Footer";

const Work = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
          marginTop: "200px",
        }}
      >
        <h1>Project Gallery</h1>
      </div>
      <div>
        <Project
          head1="Race to"
          head2="Victory"
          head3="Car Racing Game"
          imageSource={Images.App2}
          bgcolor={"#FFF5D3"}
          clr={"#2d2d0d"}
        />

        <Project
          head1="Your Tube, Your World "
          head2="Explore and Share"
          head3="YouTube Clone"
          imageSource={Images.App1}
          bgcolor={"#FFDBE1"}
          clr={"#770012"}
        />

        <Project
          head1="Forecast"
          head2="Your Day"
          head3="Weather Application"
          imageSource={Images.App3}
          bgcolor={"#DBF8F4"}
          clr={"#1c5049"}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Work;
