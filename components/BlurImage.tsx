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
        <div key={index} className="relative  overflow-hidden rounded-lg">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={470}
            height={320}
            className=" object-cover transition duration-500 filter  hover:blur-[1.5px]"
          />
        </div>
      ))}
    </div>
  );
};

export default BlurImage;
