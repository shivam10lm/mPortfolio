import React from "react";

const Footer = () => {
  return (
    <div style={{ borderTop: "1px solid #ddd", marginTop: "100px" }}>
      <div className="footer">
        <div className="footer-left">
          <p className="footer-title">Let's connect digitally</p>
          <p className="copyright">© 2023 Shivam Gupta</p>
        </div>
        <div className="footer-right">
          <a href="/" className="foot">
            Email
          </a>
          <a href="/" className="foot">
            Twitter
          </a>
          <a href="/" className="foot">
            LinkedIn
          </a>
          <a href="/" className="foot">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
