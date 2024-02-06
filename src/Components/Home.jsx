import React from "react";
import Project from "./Project";
import Images from "../utils/constants";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div
        style={{
          height: "400px",
          marginTop: "200px",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <h1>Designing the Web, Pixel by Pixel</h1>
      </div>
      <Project
        head1="Nice to"
        head2="meet you"
        head3="About me"
        imageSource={Images.Profile}
        bgcolor={"#d2e0e9"}
        clr={"#000000"}
      />
      <div
        style={{
          maxWidth: "none",
          textAlign: "center",
          paddingTop: "250px",
          paddingBottom: "250px",
        }}
      >
        <h3
          style={{
            maxWidth: "930px",
            marginBottom: 0,
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "40px",
            lineHeight: "55px",
          }}
        >
          By designing accessible design systems, I help product designers to
          create inclusive experiences.
        </h3>
      </div>
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

      <Footer />
    </div>
  );
};

export default Home;
