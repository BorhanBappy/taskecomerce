"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Define an array of image URLs with string type
const images: string[] = [
  "/image/1.jpg",
  "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/original/carousel/12/id2-slide1__34395.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/original/carousel/14/id2-slide3__13207.jpg?c=2",
];

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center relative w-full">
      {/* Image Container */}
      <div className="relative w-full h-[400px] overflow-hidden">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "400px" }}
            className={`absolute inset-0 transition-opacity duration-700 object-cover ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Buttons Positioned Over Image */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-amber-500 ${
                currentIndex === index
                  ? "bg-orange-400 scale-125 w-[50px]"
                  : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
