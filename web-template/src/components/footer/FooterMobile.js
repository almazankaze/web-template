import React from "react";
import MobileMenu from "../MobileMenu";
import footerLinks from "../../data/footerLinks";
import "../../styles/FooterMobile.css";

function FooterMobile() {
  return (
    <div className="footerMobile">
      <MobileMenu list={footerLinks} />
    </div>
  );
}

export default FooterMobile;
