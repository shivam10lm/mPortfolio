import React from "react";

const Project = ({ head1, head2, head3, imageSource, bgcolor, clr }) => {
  return (
    <div>
      <div
        className="sec-about"
        style={{
          marginTop: "120px",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <a
          href="/"
          className="about-me"
          style={{
            backgroundImage: `url(${imageSource})`,
            backgroundColor: `${bgcolor}`,
          }}
        >
          <h2 style={{ color: `${clr}` }}>
            {head1} <br />
            {head2}
          </h2>
          <h3 style={{ color: `${clr}` }}>{head3}</h3>
        </a>
      </div>
    </div>
  );
};

export default Project;
