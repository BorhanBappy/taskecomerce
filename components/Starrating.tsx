"use client";
import React from "react";

interface StarRatingProps {
  maxRating?: number;
  fillColor?: number;
  color?: string;
  size?: number;
}

interface StarProps {
  full: boolean;
  color: string;
  size: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  maxRating = 5,
  fillColor = 4,
  color = "#fcc419",
  size = 5,
}) => {
  return (
    <div className="flex items-center gap-2 p-2 mb-4">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} full={i < fillColor} color={color} size={size} />
        ))}
      </div>
    </div>
  );
};

const Star: React.FC<StarProps> = ({ full, color, size }) => {
  const starStyle = { width: `${size * 2}px`, height: `${size * 2}px` };

  return (
    <span className="block" style={starStyle}>
      {full ? (
        <svg
          viewBox="0 0 20 20"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.5245 3.46353C11.6741 3.00287 12.3259 3.00287 12.4755 3.46353L14.1329 8.56434C14.1998 8.77035 14.3918 8.90983 14.6084 8.90983H19.9717C20.4561 8.90983 20.6575 9.52964 20.2656 9.81434L15.9266 12.9668C15.7514 13.0941 15.678 13.3198 15.745 13.5258L17.4023 18.6266C17.552 19.0873 17.0248 19.4704 16.6329 19.1857L12.2939 16.0332C12.1186 15.9059 11.8814 15.9059 11.7061 16.0332L7.3671 19.1857C6.97524 19.4704 6.448 19.0873 6.59768 18.6266L8.25503 13.5258C8.32197 13.3198 8.24864 13.0941 8.07339 12.9668L3.73438 9.81434C3.34253 9.52964 3.54392 8.90983 4.02828 8.90983H9.39159C9.6082 8.90983 9.80018 8.77035 9.86712 8.56434L11.5245 3.46353Z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.5245 3.46353C11.6741 3.00287 12.3259 3.00287 12.4755 3.46353L14.1329 8.56434C14.1998 8.77035 14.3918 8.90983 14.6084 8.90983H19.9717C20.4561 8.90983 20.6575 9.52964 20.2656 9.81434L15.9266 12.9668C15.7514 13.0941 15.678 13.3198 15.745 13.5258L17.4023 18.6266C17.552 19.0873 17.0248 19.4704 16.6329 19.1857L12.2939 16.0332C12.1186 15.9059 11.8814 15.9059 11.7061 16.0332L7.3671 19.1857C6.97524 19.4704 6.448 19.0873 6.59768 18.6266L8.25503 13.5258C8.32197 13.3198 8.24864 13.0941 8.07339 12.9668L3.73438 9.81434C3.34253 9.52964 3.54392 8.90983 4.02828 8.90983H9.39159C9.6082 8.90983 9.80018 8.77035 9.86712 8.56434L11.5245 3.46353Z" />
        </svg>
      )}
    </span>
  );
};

export default StarRating;
