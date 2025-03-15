"use client";

import Product from "./product"; // Ensure the import path is correct
import { useProducts } from "@/lib/products";
import Loading from "./Loading";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icon library

export default function ProductList() {
  const { data: products, isLoading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5); // Default for desktop
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 480) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  if (isLoading)
    return (
      <div className="mx-auto">
        <Loading />
      </div>
    );
  if (error) return <p className="mx-auto">Error: {error.message}</p>;
  if (!products || !products.length)
    return <p className="mx-auto">No products available.</p>;

  const categories = [
    "Kids & Mens Koti",
    "KIDS PANJABI SET",
    "KIDS & MENS SHERWANI SET",
    "KIDS SHERWANI SET",
    "KIDS PANJABI KOTI SET",
    "KIDS SHORT SHIRT",
    "KIDS SHIRT PANT SET",
    "Mens Sherwani set",
    "KIDS PRINCE COAT",
    "KIDS BOSS SET",
    "MENS JACKET",
    "MENS PRINCE COAT",
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category?.name === selectedCategory)
    : products;

  const totalSlides = Math.max(categories.length - slidesToShow, 0);

  // Custom Left Arrow Component
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-md ${
        currentSlide === 0 ? "bg-red-500" : "bg-green-500"
      } `}
      onClick={onClick}
    >
      <ChevronLeft size={24} color="white" />
    </button>
  );

  // Custom Right Arrow Component
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className={`absolute right-0 top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow-md z-10 ${
        currentSlide >= totalSlides ? "bg-red-500" : "bg-green-500"
      }`}
      onClick={onClick}
    >
      <ChevronRight size={24} color="white" />
    </button>
  );

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (index: number) => setCurrentSlide(index), // Track current slide
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div>
      {/* Category Filter Slider */}
      <div className="relative container mx-auto mb-4 text-sm">
        <Slider {...sliderSettings} ref={sliderRef}>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`font-bold px-4 py-2 rounded focus:outline-none hover:text-primary ${
              !selectedCategory ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded focus:outline-none hover:text-primary font-bold ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </Slider>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-2 gap-y-4">
        {filteredProducts.slice(0, 30).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
