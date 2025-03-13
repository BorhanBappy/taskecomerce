"use client";

import { useCart } from "@/app/context/CartContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, setTempCart } = useCart();
  const router = useRouter();

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Handle Checkout Button Click
  const handleCheckout = () => {
    setTempCart(cartItems); // Set tempCart with cartItems
    router.push("/order"); // Redirect to the Order Page
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
              className="border-b py-4 mb-4 flex gap-4 items-center hover:shadow-lg transition duration-300 ease-in-out p-4 justify-center"
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

              {/* Quantity Update */}
              <div className="flex items-center justify-center gap-3 w-40">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.variation, item.quantity - 1)
                  }
                  className="px-3 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition duration-200"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <div className="flex justify-center items-center w-16 h-10 bg-gray-100 rounded-lg">
                  <p className="text-xl font-semibold text-gray-800 w-full h-full flex justify-center items-center">
                    {item.quantity}
                  </p>
                </div>

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
                className="text-red-500 hover:text-red-600 font-semibold transition duration-200 cursor-pointer"
              >
                <FontAwesomeIcon icon={faTrash} className="h-30 w-30" />
              </button>
            </div>
          ))}
          {/* Total Section */}
          <div className="flex justify-between items-center mt-6 py-4 border-t border-gray-300">
            <p className="text-lg font-semibold text-gray-800">
              Total Items: {cartItems.length}
            </p>

            <p className="text-2xl font-bold text-primary">
              Total: ${calculateTotal()}
            </p>
            {/* Proceed to Checkout Button */}
            <button
              onClick={handleCheckout}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-200 cursor-pointer"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
