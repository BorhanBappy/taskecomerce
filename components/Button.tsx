import React from "react";

// Define the props interface
interface ButtonProps {
  toggleContact: () => void; // Function that takes no arguments and returns void
  isContactOpen: boolean; // Boolean to track the open/close state
}

// Apply the interface to the component
const Button: React.FC<ButtonProps> = ({ toggleContact, isContactOpen }) => {
  return (
    <button className="lg:hidden focus:outline-none" onClick={toggleContact}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 transition-transform duration-300 ${
          isContactOpen ? "rotate-180" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
};

export default Button;
