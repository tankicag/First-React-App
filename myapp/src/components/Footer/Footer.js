import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Footer</h2>
      <p>copyright sourcemx {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
