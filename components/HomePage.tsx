"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  {
    src: "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/original/carousel/14/id2-slide3__13207.jpg?c=2",
    title: "The Shopping List",
    subtitle: "5 Looks We Love This Month",
  },
  {
    src: "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/original/carousel/13/id2-slide2__60201.jpg?c=2",
    title: "The Shopping List",
    subtitle: "5 Looks We Love This Month",
  },
  {
    src: "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/original/carousel/12/id2-slide1__34395.jpg?c=2",
    title: "New Arrivals",
    subtitle: "Fresh Styles for You",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentIndex
              ? "translate-x-0"
              : index < currentIndex
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          {/* Background Image */}
          <Image src={img.src} alt={img.title} fill className="object-cover" />

          {/* Text Animation */}
          <div
            className={`absolute left-16 top-1/4 p-4 uppercase transition-all duration-1000 ${
              index === currentIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-100"
            }`}
          >
            <h1 className="text-2xl text-gray-400">{img.title}</h1>
            <h1 className="text-3xl text-black">{img.subtitle}</h1>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-amber-500 ${
              currentIndex === index
                ? "bg-primary scale-125 w-[50px]"
                : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
