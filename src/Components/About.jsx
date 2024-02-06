import React from "react";
import Project from "./Project";
import Images from "../utils/constants";

const About = () => {
  return (
    <div
      style={{
        maxWidth: "700px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "500px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          marginTop: "30px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "200px",
            margin: "100px",
            marginTop: "520px",
            marginLeft: "auto",
            zIndex: "2",
            position: "relative",
          }}
        >
          Hello
        </h1>
        <img src={Images.Profile2} alt="profile" className="pimg" />
      </div>
      <div>
        <p
          style={{
            marginTop: "-100px",
            marginBottom: "0",
            fontSize: "25px",
            lineHeight: "40px",
            color: "white",
            zIndex: "3",
            textAlign: "justify",
            position: "relative",
          }}
        >
          My name is Semih, and I'm a digital designer from the Netherlands. I
          am currently at IKEA working in the design system team as a Senior
          Designer. <br />
          <br /> Over the years, I've transitioned from being a generalist as a
          product designer to being a specialist as a design system designer. By
          designing accessible design systems, I help product designers create
          inclusive and WCAG compliant experiences.
          <br />
          <br /> In my spare time, I write about design and help other designers
          improve their skills by sharing UI & UX related insights. Besides
          that, I enjoy some deep sci-fi movies (Interstellar is my all-time
          favorite), good music, and some quality time with my family.
        </p>
      </div>
    </div>
  );
};

export default About;
