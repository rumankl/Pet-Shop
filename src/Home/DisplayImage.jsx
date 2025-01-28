
import React, { useState } from "react";
import { IconButton } from "@material-tailwind/react";

const DisplayImage = () => {
  const slides = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  // const [direction, setDirection] = useState("");

  // const handlePrev = () => {
  //   // setDirection("prev");
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === 0 ? slides.length - 1 : prevIndex - 1
  //   );
  // };

  // const handleNext = () => {
  //   // setDirection("next");
  //   setActiveIndex((prevIndex) =>
  //     prevIndex === slides.length - 1 ? 0 : prevIndex + 1
  //   );
  // };
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };


  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden top-4">
      {/* Slides */}
      <div className="relative w-full h-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`slide ${index + 1}`}
            className={`w-full h-full object-cover ${index === activeIndex ? "bg-orange-500" : "bg-gray-300"}`}
            style={{ minWidth: "100%" }}
          />
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-orange-500" : "bg-gray-300"}`}
            onClick={() => {
              // setDirection(index > activeIndex ? "next" : "prev");
              setActiveIndex(index);
            }}
          ></button>
        ))}
      </div>

      {/* Prev Button */}
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handlePrev}
        className="!absolute top-2/4 left-4 -translate-y-2/4 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </IconButton>

      {/* Next Button */}
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handleNext}
        className="!absolute top-2/4 right-4 -translate-y-2/4 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </IconButton>
    </div>
  );
};

export default DisplayImage;



// import React from "react";
// import { Carousel } from "@material-tailwind/react";

// const DisplayImage = () => {
//   const slides = [
//     "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
//     "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
// "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//  ];

//   return (
//     <div className="relative w-full h-[400px] rounded-xl overflow-hidden top-4">
//       <Carousel
//         autoplay
//         interval={3000}
//         className="relative w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <img
//             key={index}
//             src={slide}
//             alt={`slide ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default DisplayImage;


