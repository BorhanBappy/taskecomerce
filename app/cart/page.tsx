"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, setSelectedItems } =
    useCart();
  const [selectedItems, setSelectedItemsState] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    setSelectedItemsState((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    return cartItems
      .filter((item) => selectedItems.includes(`${item.id}-${item.variation}`))
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleProceedToCheckout = () => {
    const selectedCartItems = cartItems.filter((item) =>
      selectedItems.includes(`${item.id}-${item.variation}`)
    );
    setSelectedItems(selectedCartItems);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-600">
          Your cart is empty. Add items to your cart to proceed!
        </p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.variation}`}
              className="border-b py-4 mb-4 flex gap-4 items-center hover:shadow-lg transition duration-300 ease-in-out"
            >
              {/* Item Image */}
              <div className="w-24 h-24 flex-shrink-0 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* Item Details */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-lg text-gray-700">
                  Price:{" "}
                  <span className="text-gray-900 font-semibold">
                    ${item.price}
                  </span>
                </p>
                <p className="text-sm text-gray-500">
                  Variation: {item.variation}
                </p>
              </div>

              {/* Selection Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(
                    `${item.id}-${item.variation}`
                  )}
                  onChange={() =>
                    toggleSelection(`${item.id}-${item.variation}`)
                  }
                  className="h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-500">Select</span>
              </div>

              {/* Quantity Update */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.variation, item.quantity - 1)
                  }
                  className="px-3 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition duration-200"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <p className="text-xl font-semibold">{item.quantity}</p>
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.variation, item.quantity + 1)
                  }
                  className="px-3 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition duration-200"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id, item.variation)}
                className="text-red-500 hover:text-red-600 font-semibold transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 0a.5.5 0 0 1 .5.5V1h9a.5.5 0 0 1 .5.5V2h-1V1H1v1H0V1a.5.5 0 0 1 .5-.5h5zM3.5 2h9a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5zM4 3v10h8V3H4z" />
                </svg>
                Remove
              </button>
            </div>
          ))}
          {/* Total Section */}
          <div className="flex justify-between items-center mt-6 py-4 border-t border-gray-300">
            <p className="text-lg font-semibold text-gray-800">
              Total Items: {selectedItems.length}
            </p>
            <p className="text-2xl font-bold text-gray-900">
              Total: ${calculateTotal()}
            </p>
          </div>

          {/* Proceed to Checkout Button */}
          <div className="mt-4 flex justify-end">
            <Link href="/order" passHref>
              <button
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-200 cursor-pointer"
                disabled={selectedItems.length === 0}
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
