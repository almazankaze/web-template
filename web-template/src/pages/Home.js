import React from "react";
import { useGlobalContext } from "../Context";

function Home() {
  const { closeSubMenu } = useGlobalContext();
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}

export default Home;
