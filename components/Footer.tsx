"use client"; // Required for using React state in Next.js
import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const footerData = [
  {
    title: "All Categories",
    items: ["Fashion", "Kitchen", "Computer", "Bags", "Watches", "View all"],
  },
  {
    title: "Information",
    items: [
      "Term & Conditions",
      "Privacy Policy",
      "Layout",
      "Blog",
      "About us",
      "Bonus page",
      "Sitemap",
    ],
  },
  {
    title: "Brands",
    items: ["Common Good", "OFS", "Demo Brand", "View all"],
  },
  {
    title: "Shops & Support",
    items: ["Product Support", "PC Setup & Support", "Services"],
  },
];
interface SectionStates {
  categories: boolean;
  information: boolean;
  brands: boolean;
  shops: boolean;
  contact: boolean;
}
const Footer = () => {
  // State object to manage open/close state for each section
  const [sectionStates, setSectionStates] = useState<SectionStates>({
    categories: false,
    information: false,
    brands: false,
    shops: false,
    contact: false,
  });

  // Toggle function for each section
  // Define the type for the toggleSection function parameter
  const toggleSection = (section: keyof SectionStates) => {
    setSectionStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="">
      {/* Newsletter Section */}
      <div className="bg-[#f0f0f0]">
        <div className="container mx-auto flex py-[30px] gap-4 items-center">
          <h1 className="text-2xl uppercase px-8">Sign up for newsletter</h1>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-[500px] rounded-l-full border border-primary py-3 placeholder:text-center text-center focus:outline-primary"
            />
            <button className="rounded-r-full bg-primary text-white py-[13px] px-4">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="container mx-auto flex flex-col md:flex-row p-8 md:gap-6 lg:gap-16 justify-center">
        <div className="flex flex-col md:flex-row md:gap-6 lg:gap-16 justify-between p-2">
          {/* All Categories */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">All Categories</h3>
              <Button
                toggleContact={() => toggleSection("categories")}
                isContactOpen={sectionStates.categories}
              />
            </div>
            <ul
              className={`space-y-2 mt-2 ${
                sectionStates.categories ? "block" : "hidden"
              } md:block`}
            >
              {footerData[0].items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="group block w-full text-gray-700 hover:text-primary cursor-pointer transition-transform duration-300 hover:translate-x-2"
                >
                  &nbsp;&gt; {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Information</h3>
              <Button
                toggleContact={() => toggleSection("information")}
                isContactOpen={sectionStates.information}
              />
            </div>
            <ul
              className={`space-y-2 mt-4 ${
                sectionStates.information ? "block" : "hidden"
              } md:block`}
            >
              {footerData[1].items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="group block w-full text-gray-700 hover:text-primary cursor-pointer transition-transform duration-300 hover:translate-x-2"
                >
                  &nbsp;&gt; {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Brands</h3>
              <Button
                toggleContact={() => toggleSection("brands")}
                isContactOpen={sectionStates.brands}
              />
            </div>
            <ul
              className={`space-y-2 mt-4  ${
                sectionStates.brands ? "block" : "hidden"
              } md:block`}
            >
              {footerData[2].items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="group block w-full text-gray-700 hover:text-primary cursor-pointer transition-transform duration-300 hover:translate-x-2"
                >
                  &nbsp;&gt; {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Shops & Support */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Shops & Support</h3>
              <Button
                toggleContact={() => toggleSection("shops")}
                isContactOpen={sectionStates.shops}
              />
            </div>
            <ul
              className={`space-y-2 mt-4 ${
                sectionStates.shops ? "block" : "hidden"
              } md:block`}
            >
              {footerData[3].items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="group block w-full text-gray-700 hover:text-primary cursor-pointer transition-transform duration-300 hover:translate-x-2"
                >
                  &nbsp;&gt; {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <Button
              toggleContact={() => toggleSection("contact")}
              isContactOpen={sectionStates.contact}
            />
          </div>
          <ul
            className={`space-y-2 mt-4 ${
              sectionStates.contact ? "block" : "hidden"
            } md:block`}
          >
            <li className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faAddressBook} />
              Addresses: 685 Market Street, San Francisco, CA 94105
            </li>
            <li className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faPhone} />
              Call us now: (011+) 4567 421 978
            </li>

            <li className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faMailBulk} />
              Email: contact@revo.com
            </li>
          </ul>
          <div className="flex flex-wrap items-center gap-4 p-4">
            {/* QR Code Image */}
            <div className="group relative h-auto w-14 overflow-hidden">
              <Image
                src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/content/site/app/app-qrcode.png"
                alt="QR Code"
                width={160}
                height={160}
                className="h-15 w-14"
              />
              <div className="absolute inset-0 left-[-100%] h-full w-full bg-[rgba(255,255,255,0.4)] opacity-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:opacity-100"></div>
            </div>

            {/* Google Play Image */}
            <div className="group relative h-auto w-40 overflow-hidden">
              <Image
                src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/content/site/app/google-play.png"
                alt="Google Play"
                width={160}
                height={160}
                className="h-auto w-full"
              />
              <div className="absolute inset-0 left-[-100%] h-full w-full bg-[rgba(255,255,255,0.4)] opacity-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:opacity-100"></div>
            </div>

            {/* App Store Image */}
            <div className="group relative h-auto w-40 overflow-hidden">
              <Image
                src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/content/site/app/app-store.png"
                alt="App Store"
                width={160}
                height={160}
                className="h-auto w-full"
              />
              <div className="absolute inset-0 left-[-100%] h-full w-full bg-[rgba(255,255,255,0.4)] opacity-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Header */}

      <div className="p-4">
        {" "}
        <div className="hidden md:flex gap-6 items-center justify-center text-2xl">
          {/* Categories Dropdown */}
          <Link href="/" className="cursor-pointer  hover:text-primary">
            HOME
          </Link>
          <Link href="/" className="cursor-pointer  hover:text-primary">
            AYOUT{" "}
          </Link>

          <Link href="/" className="cursor-pointer  hover:text-primary">
            BLOG{" "}
          </Link>

          <Link href="/" className="cursor-pointer  hover:text-primary">
            ABOUT US{" "}
          </Link>

          <Link href="/" className="cursor-pointer  hover:text-primary">
            BONUS PAGE{" "}
          </Link>
        </div>
        <div className=" flex justify-center p-2">
          <h3 className=" max-w-[650px] text-center text-gray-500 ">
            {" "}
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </h3>
        </div>
      </div>
      <div className="bg-[#3b3b3b] flex justify-center p-4">
        <p className=" text-gray-500">
          {" "}
          2025 Ecommerce SB Revo - Home2 Powered by{" "}
          <strong className=" text-primary hover:text-white">
            BigCommerce
          </strong>
          . Designed by
          <strong className=" text-primary  hover:text-white">
            Revotheme.com
          </strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
