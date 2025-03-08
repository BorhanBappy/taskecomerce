"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const images = [
  {
    url: "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/464x320/uploaded_images/2.jpg?t=1522170773",
    name: "Product Showcase 1",
    date: "⏰ 7th February 2025",
    user: "🛍️ BigCommerce",
  },
  {
    url: "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/464x320/uploaded_images/6.jpg?t=1522170454",
    name: "Exclusive Item 2",
    date: "⏰ 7th February 2025",
    user: "🛍️ BigCommerce",
  },
  {
    url: "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/464x320/uploaded_images/5.jpg?t=1522170930",
    name: "Special Edition 3",
    date: "⏰ 7th February 2025",
    user: "🛍️ BigCommerce",
  },
  {
    url: "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/464x320/uploaded_images/7.jpg?t=1522170508",
    name: "Limited Stock 4",
    date: "⏰ 7th February 2025",
    user: "🛍️ BigCommerce",
  },
  {
    url: "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/464x320/uploaded_images/1.jpg?t=1522170647",
    name: "Top Seller 5",
    date: "⏰ 7th February 2025",
    user: "🛍️ BigCommerce",
  },
  {
    url: "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/464x320/uploaded_images/3.jpg?t=1522170815",
    name: "Trending Now 6",
    date: "⏰ 7th February 2025",
    user: "🛍️ BigCommerce",
  },
];

function ImageSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              {/* Image */}
              <Image
                src={image.url}
                alt={image.name}
                className="w-full"
                width={300}
                height={300}
                property="true"
              />

              {/* Title */}
              <h1 className="uppercase p-2 font-bold text-lg">{image.name}</h1>

              {/* Metadata Section */}
              <div className="flex gap-4 p-2 border-b border-gray-300">
                <h3 className="text-xs">{image.user}</h3>
                <h3 className="text-xs">{image.date}</h3>
              </div>

              {/* Read More Button */}
              <button className="group p-2 mt-2 px-4 text-orange-600 hover:bg-amber-600 hover:text-white hover:translate-x-1 duration-300 rounded-2xl overflow-hidden">
                <h1 className="group-hover:translate-x-2 text-xs">
                  &#8667; Read More
                </h1>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
