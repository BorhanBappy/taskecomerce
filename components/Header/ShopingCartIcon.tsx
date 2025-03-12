"use client";

import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";

export default function ShopingCartIcon() {
  const { cartItems } = useCart();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Calculate total quantity
  useEffect(() => {
    const newTotalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    // Trigger animation if the quantity changes
    if (newTotalQuantity !== totalQuantity) {
      setAnimate(true);
      setTotalQuantity(newTotalQuantity);
    }
  }, [cartItems]);

  // Remove animation class after the animation completes
  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => setAnimate(false), 300); // Match animation duration
      return () => clearTimeout(timeout);
    }
  }, [animate]);

  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
      {/* Display total quantity with animation */}
      {totalQuantity > 0 && (
        <span
          className={`absolute -top-4 -right-4 bg-red-500 text-white text-xl font-semibold rounded-full px-2 py-1 ${
            animate ? "animate-ping" : ""
          } min-w-[24px] h-auto leading-5 flex items-center justify-center`}
        >
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}
