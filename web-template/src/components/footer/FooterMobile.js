import React from "react";
import MobileMenu from "../MobileMenu";
import footerLinks from "../../data/footerLinks";
import "../../styles/FooterMobile.css";
import NewsLetter from "./NewsLetter";

function FooterMobile() {
  return (
    <div className="footerMobile">
      <MobileMenu list={footerLinks} />
      <NewsLetter />
    </div>
  );
}

export default FooterMobile;
