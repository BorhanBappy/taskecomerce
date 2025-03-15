"use client";
import { SearchIcon, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
const MiddleHeader = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const placeholderText = "Search the store";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < placeholderText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + placeholderText[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Adjust typing speed (100ms per character)

      return () => clearTimeout(timeout); // Cleanup on unmount
    } else {
      // Optional: Reset animation after completion
      const resetTimeout = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 2000); // Wait 2 seconds before restarting

      return () => clearTimeout(resetTimeout);
    }
  }, [index, placeholderText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container mx-auto flex  items-center justify-between gap-4 p-1 mb-2 md:mb-0 md:p-8">
      {/* Logo */}
      <motion.div
        animate={{ width: isExpanded ? "4rem" : "3rem" }} // w-16 = 4rem, w-12 = 3rem
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <Image
          src="/image/logo_1521851058__88672.webp"
          alt="icon"
          height={100}
          width={100}
          className="h-12 object-contain"
        />
      </motion.div>

      {/* Search Bar - Full Width */}
      <div className="flex items-center border-4 rounded-sm md:rounded-full p-2 border-orange-600 grow w max-w-2xl w-full ">
        <input
          type="text"
          placeholder={displayText}
          className="w-full p-2 outline-none bg-transparent  rounded-lg focus:border-blue-500"
        />
        <button className="p-2 bg-primary text-white rounded-full hover:bg-orange-700 transition duration-300">
          <SearchIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Contact Info */}
      <div className="hidden sm:flex items-center space-x-4">
        <HeadphonesIcon className="h-16 w-16 text-primary" />
        <div>
          <h3 className="text-lg font-semibold">Call Us: 0000000</h3>
          <h3 className="text-sm text-gray-600">Email: bbhjdj@gmail.com</h3>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
