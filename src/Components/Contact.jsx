import React from "react";
import Footer from "./Footer";
import Form from "./Form";

const Contact = () => {
  return (
    <div style={{}}>
      <div
        className="section-header"
        style={{
          textAlign: "center",
          paddingTop: "200px",
          paddingBottom: "90px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "100px",
          paddingRight: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ letterSpacing: "1px" }}>Get in Touch</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "justify",
          width: "90%",
          paddingBottom: "100px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Form />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
