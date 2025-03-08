/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// Brand Data
const brands = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },

  {
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  },
];

// Custom Previous Arrow
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
    >
      &#10094; {/* Left arrow symbol (‹) */}
    </button>
  );
};

// Custom Next Arrow
const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
    >
      &#10095; {/* Right arrow symbol (›) */}
    </button>
  );
};

// Slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

const BrandSlider = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-center text-2xl font-bold mb-6 text-primary">
        Our Brand Partners
      </h2>
      <div className="relative">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <div className="p-4 border rounded-lg shadow-md flex flex-col items-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain"
                />
                <p className="mt-2 text-sm font-semibold">{brand.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandSlider;
