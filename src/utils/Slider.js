import React, { useState } from "react";
import ArrowRight from "../images/arrow_right.png";
import ArrowLeft from "../images/arrow_left.png";

const Slider = ({ slider }) => {
  const [current, setCurrent] = useState(0);
  const length = slider.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slider) || slider.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <div className="slider__arrow slider__img_right" onClick={nextSlide}>
        <img src={ArrowRight} alt="" />
      </div>
      <div className="slider__arrow slider__img_left" onClick={prevSlide}>
        <img src={ArrowLeft} alt="" />
      </div>
      {slider.map((slide, index) => {
        return (
          <div
            className={index === current ? "slider__sl active" : "slider__sl"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.images}
                alt="slide Image"
                className="slider__images"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
