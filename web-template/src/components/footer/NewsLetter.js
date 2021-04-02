import React, { useState } from "react";
import "../../styles/NewsLetter.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function NewsLetter() {
  const [input, setInput] = useState("");

  return (
    <div className="newsLetter">
      <p>Our Newsletter</p>
      <span>Subscribe To Our Daily News And Updates</span>
      <div className="subBox">
        <input
          type="text"
          name="sub"
          id="sub"
          placeholder=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MailOutlineIcon className="mail-icon" />
      </div>
    </div>
  );
}

export default NewsLetter;
