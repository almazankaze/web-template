import React, { useState } from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "../styles/Carousel.css";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [showArrowBtn, setShowArrowBtn] = useState(false);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carousel-container">
      <button className="arrow-icon left">
        <ChevronLeftIcon onClick={prevSlide} />
      </button>
      <button className="arrow-icon">
        <ChevronRightIcon onClick={nextSlide} />
      </button>
      {slides.map((slide, index) => {
        const { image, alt, heading, productInfo } = slide;
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <div className="slide-container">
                <img src={image} alt={alt} className="slide-image"></img>
                <div className="image-content">
                  <h4 style={{ color: "white" }}>{heading}</h4>
                  <h3 style={{ color: "white" }}>{productInfo}</h3>
                  <button className="btn img-btn">Shop Now</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
