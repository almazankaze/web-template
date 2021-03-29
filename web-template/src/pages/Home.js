import React from "react";
import Carousel from "../components/Carousel";
import { useGlobalContext } from "../Context";
import sliderData from "../data/sliderData";

function Home() {
  const { closeSubMenu } = useGlobalContext();
  return (
    <div className="home" onMouseOver={closeSubMenu}>
      <Carousel slides={sliderData} />
    </div>
  );
}

export default Home;
