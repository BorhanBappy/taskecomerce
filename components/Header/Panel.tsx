"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 100); // Show button after 100px scroll
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-700 transition"
      >
        <svg className="absolute inset-0 w-full h-full">
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="125"
            strokeDashoffset={125 - (scrollProgress / 100) * 125}
            className="transition-all duration-200"
          />
        </svg>
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default ScrollToTop;
