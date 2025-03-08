import Image from "next/image";
import React from "react";

// Define an array of image URLs with string type
const images: string[] = [
  "https://cdn11.bigcommerce.com/s-cslhb9s4uy/content/site/banner/home2/h2-img-1.jpg",
  "https://cdn11.bigcommerce.com/s-cslhb9s4uy/content/site/banner/home2/h2-img-2.jpg",
  "https://cdn11.bigcommerce.com/s-cslhb9s4uy/content/site/banner/home2/h2-img-3.jpg",
];

const BlurImage: React.FC = () => {
  return (
    <div className=" container mx-auto flex gap-4 p-4 justify-between">
      {images.map((src, index) => (
        <div key={index} className="group relative  overflow-hidden rounded-lg">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={470}
            height={320}
            priority
            // className=" object-cover "
          />
          <div className="absolute inset-0 -translate-y-100  h-full w-full bg-[rgba(255,255,255,0.4)]  transition-all duration-300 ease-in group-hover:translate-0 "></div>{" "}
        </div>
      ))}
    </div>
  );
};

export default BlurImage;
