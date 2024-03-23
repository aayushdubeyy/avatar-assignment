import React from "react";
import Slider from "react-slick";
import "./Sliders.css";
import { Products } from "../constants";

const Sliders = () => {
  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    );
  };

  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
  };

  return (
    <div className="pt-10">
      <div className="flex items-center flex-col">
        <h1 className="font-bold text-5xl">Featured Products</h1>
        <p>Explore and discover a variety of products</p>
      </div>
      <Slider {...settings}>
        {Products.map((slide, index) => {
          return (
            <div key={index} className="pb-0">
              <img
                src={slide.image}
                alt="slider"
                key={index}
                className="image relative rounded-xl"
              />
              <p className="text-xs rounded-b-xl opacity-0 w-full text-wrap absolute lg:text-[0.9rem] card-desc">
                {slide.description}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sliders;
