import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/footer/Footer";
import PerkSpan from "../components/PerkSpan";
import { useGlobalContext } from "../Context";
import sliderData from "../data/sliderData";

function Home() {
  const { closeSubMenu } = useGlobalContext();
  return (
    <div className="home" onMouseOver={closeSubMenu}>
      <Carousel slides={sliderData} />
      <PerkSpan />
      <Footer />
    </div>
  );
}

export default Home;
