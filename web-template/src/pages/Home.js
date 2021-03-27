import React from "react";
import { useGlobalContext } from "../Context";

function Home() {
  const { closeSubMenu } = useGlobalContext();
  return (
    <div className="home" onMouseOver={closeSubMenu}>
      <h2>Home</h2>
    </div>
  );
}

export default Home;
