"use client"; // Required for using React state in Next.js
import { useState } from "react";
import Button from "./Button";
import { title } from "process";
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
  {
    title: "Contact Us",
    items: [
      "Addresses: 685 Market Street, San Francisco, CA 94105",
      "Call us now: (011+) 4567 421 978",
      "Email: contact@revo.com",
    ],
  },
];
const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <footer className="">
      <div className="bg-[#f0f0f0]">
        <div className=" container mx-auto flex py-[30px] gap-4 items-center  ">
          <h1 className=" text-2xl uppercase px-8">Sign up for newsletter</h1>
          <div className="">
            <input
              type="email"
              placeholder="Your email address"
              className="w-[500px] rounded-l-full border border-primary py-3 placeholder:text-center text-center focus: focus:outline-primary"
            />
            <button className=" rounded-r-full bg-primary text-white py-[13px] px-4">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-2 justify-between p-2">
          {footerData.map((column, index) => (
            <div key={index}>
              {/* Column Header */}
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">{column.title}</h3>
                <Button
                  toggleContact={toggleContact}
                  isContactOpen={isContactOpen}
                />
              </div>

              {/* Column Items */}
              <ul
                className={`space-y-2 ${
                  isContactOpen ? "block" : "hidden"
                } md:block`}
              >
                {column.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="group block w-full text-gray-700 hover:text-primary cursor-pointer transition-transform duration-300 hover:translate-x-2"
                  >
                    &nbsp;&gt; {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 border-t border-gray-100 pt-8">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            {/* Arrow Button for Mobile */}
            <Button
              toggleContact={toggleContact}
              isContactOpen={isContactOpen}
            />
          </div>
          {/* Contact List */}
          <ul
            className={`space-y-2 mt-4 ${
              isContactOpen ? "block" : "hidden"
            } md:block`}
          >
            <li>Addresses: 685 Market Street, San Francisco, CA 94105</li>
            <li>Call us now: (011+) 4567 421 978</li>
            <li>Email: contact@revo.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
