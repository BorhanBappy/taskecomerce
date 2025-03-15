"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

// Zod schema for form validation
const schema = z.object({
  mobile: z
    .string()
    .length(11, "Mobile number must be exactly 11 digits")
    .regex(/^\d{11}$/, "Mobile number must be only digits"),
  address: z.string().min(10, "Address must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const OrderPage = () => {
  const { tempCart, clearTempCart, setCartItems } = useCart(); // Add cartItems and setCartItems
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const totalPrice = tempCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const onSubmit = (data: FormData) => {
    console.log("Order Submitted:", data);
    alert("Order placed successfully!");
    reset();
    clearTempCart(); // Clear the temporary cart
    setCartItems([]); // Clear the cart items after order submission
  };

  // Handle empty tempCart state
  if (tempCart.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6">Order Details</h1>
        <p className="text-xl text-gray-600">
          No items selected for ordering.{" "}
          <Link href="/cart" className="text-blue-500 hover:underline">
            Go back to cart
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className=" flex justify-between mb-6">
        <h1 className="text-3xl font-semibold ">Order Details</h1>
        <Link
          className="hidden sm:block text-3xl font-semibold  text-primary hover:text-orange-800"
          href="/cart"
        >
          Edit Cart Item
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Product Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Products</h2>
          {tempCart.map((item) => (
            <div
              key={`${item.id}-${item.variation}`}
              className="border-b py-4 flex items-start gap-4"
            >
              <Image
                src={item.image || "/placeholder.jpg"}
                alt={item.name}
                width={80}
                height={80}
                className="object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Variation: {item.variation}</p>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Right Side: Order Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium">Mobile Number</label>
              <input
                type="text"
                {...register("mobile")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Mobile Number"
                aria-describedby="mobile-error"
              />
              {errors.mobile && (
                <p
                  id="mobile-error"
                  className="text-red-500 text-sm mt-1"
                  role="alert"
                >
                  {errors.mobile.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea
                {...register("address")}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                aria-label="Address"
                aria-describedby="address-error"
              />
              {errors.address && (
                <p
                  id="address-error"
                  className="text-red-500 text-sm mt-1"
                  role="alert"
                >
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              Place Order
            </button>

            {/* Back to Cart Button */}
            <Link
              href="/"
              className="inline-block ml-4 text-gray-600 hover:text-gray-800"
            >
              Back to Product
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
