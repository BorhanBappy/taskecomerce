"use client";
import React, { useState } from "react";

// Define the types for the props of the StarRating component
interface StarRatingProps {
  maxRating?: number;
  defaultRating?: number;
  color?: string;
  size?: number;
}

// Define the types for the props of the Star component
interface StarProps {
  onClick: () => void;
  full: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
  color: string;
  size: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  defaultRating = 0,
}) => {
  const [rating, setRating] = useState<number>(defaultRating);
  const [tempRating, setTempRating] = useState<number | null>(null);

  function ratings(i: number) {
    setRating(i + 1);
    // onsetRating(i + 1);
  }

  return (
    <div className="flex items-center gap-16 p-4">
      <div className=" flex ">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onClick={() => ratings(i)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(null)}
            color={color}
            size={size}
          />
        ))}
      </div>
    </div>
  );
};

const Star: React.FC<StarProps> = ({
  onClick,
  full,
  onHoverIn,
  onHoverOut,
  color,
  size,
}) => {
  const starStyle = { width: `${size}px`, height: `${size}px` };

  return (
    <span
      className="block cursor-pointer"
      onClick={onClick}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      style={starStyle}
    >
      {full ? (
        <svg
          viewBox="0 0 20 20"
          stroke={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier"></g>
          <g id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M11.5245 3.46353C11.6741 3.00287 12.3259 3.00287 12.4755 3.46353L14.1329 8.56434C14.1998 8.77035 14.3918 8.90983 14.6084 8.90983H19.9717C20.4561 8.90983 20.6575 9.52964 20.2656 9.81434L15.9266 12.9668C15.7514 13.0941 15.678 13.3198 15.745 13.5258L17.4023 18.6266C17.552 19.0873 17.0248 19.4704 16.6329 19.1857L12.2939 16.0332C12.1186 15.9059 11.8814 15.9059 11.7061 16.0332L7.3671 19.1857C6.97524 19.4704 6.448 19.0873 6.59768 18.6266L8.25503 13.5258C8.32197 13.3198 8.24864 13.0941 8.07339 12.9668L3.73438 9.81434C3.34253 9.52964 3.54392 8.90983 4.02828 8.90983H9.39159C9.6082 8.90983 9.80018 8.77035 9.86712 8.56434L11.5245 3.46353Z"
              fill={color}
            ></path>
          </g>
        </svg>
      ) : (
        <svg
          viewBox="0 0 20 20"
          stroke={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier"></g>
          <g id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M11.5245 3.46353C11.6741 3.00287 12.3259 3.00287 12.4755 3.46353L14.1329 8.56434C14.1998 8.77035 14.3918 8.90983 14.6084 8.90983H19.9717C20.4561 8.90983 20.6575 9.52964 20.2656 9.81434L15.9266 12.9668C15.7514 13.0941 15.678 13.3198 15.745 13.5258L17.4023 18.6266C17.552 19.0873 17.0248 19.4704 16.6329 19.1857L12.2939 16.0332C12.1186 15.9059 11.8814 15.9059 11.7061 16.0332L7.3671 19.1857C6.97524 19.4704 6.448 19.0873 6.59768 18.6266L8.25503 13.5258C8.32197 13.3198 8.24864 13.0941 8.07339 12.9668L3.73438 9.81434C3.34253 9.52964 3.54392 8.90983 4.02828 8.90983H9.39159C9.6082 8.90983 9.80018 8.77035 9.86712 8.56434L11.5245 3.46353Z"
              fill="none"
            ></path>
          </g>
        </svg>
      )}
    </span>
  );
};

export default StarRating;
