// import React from "react";
// import Slider from "react-slick";
// import "./styles/Sliders.css";
// import { Products } from "../constants";

// const Sliders = () => {
//   const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
//     const { className, onClick } = props;

//     return (
//       <div {...props} className="custom-prevArrow" onClick={onClick}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//         >
//           <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//         </svg>
//       </div>
//     );
//   };
//   const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
//     const { className, onClick } = props;

//     return (
//       <div {...props} className="custom-nextArrow" onClick={onClick}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//         >
//           <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
//         </svg>
//       </div>
//     );
//   };

//   const settings = {
//     className: "center",
//     centerMode: true,
//     focusOnSelect: true,
//     infinite: true,
//     autoplay: true,
//     centerPadding: "100px",
//     slidesToShow: 5,
//     speed: 500,
//     nextArrow: <GalleryNextArrow />,
//     prevArrow: <GalleryPrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1000,
//         settings: {
//           dots: false,
//         },
//       },
//     ],
//   };

//   return (
//     <Slider {...settings}>
//       {Products.map((slide, index) => {
//         return (
//           <div key={index}>
//             <img src={slide.image} alt="slider" key={index} className="image" />
//             <span>{slide.name}</span>
//           </div>
//         );
//       })}
//     </Slider>
//   );
// };

// export default Sliders;
