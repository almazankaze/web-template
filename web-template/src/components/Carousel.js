import React, { useState, useEffect } from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "../styles/Carousel.css";

function Carousel({ slides, show }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const lastIndex = length - 1;
    if (current < 0) {
      setCurrent(lastIndex);
    }
    if (current > lastIndex) {
      setCurrent(0);
    }
  }, [current, length]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrent(current + 1);
    }, 8000);
    return () => {
      clearInterval(slider);
    };
  }, [current]);

  return (
    <div className="carousel-container">
      <button className="arrow-icon left">
        <ChevronLeftIcon onClick={() => setCurrent(current + 1)} />
      </button>
      <button className="arrow-icon right">
        <ChevronRightIcon onClick={() => setCurrent(current - 1)} />
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
