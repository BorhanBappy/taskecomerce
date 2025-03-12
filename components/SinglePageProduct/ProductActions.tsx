"use client";

import { ShoppingCartIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

interface ProductActionsProps {
  selectedVariation: string | null;
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const ProductActions: React.FC<ProductActionsProps> = ({
  selectedVariation,
  product,
}) => {
  const [cartProduct, setCartProduct] = useState(1);
  const [message, setMessage] = useState("");
  const { addToCart, setTempCart } = useCart(); // Add setTempCart from CartContext
  const router = useRouter();

  useEffect(() => {
    if (selectedVariation !== null) {
      setMessage("");
    }
  }, [selectedVariation]);

  const handleAddToCart = () => {
    if (selectedVariation === null) {
      setMessage("Please select a variation.");
    } else {
      setMessage("");

      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: cartProduct,
        variation: selectedVariation,
        image: product.image,
      });
      alert(`Added ${cartProduct} product(s) to the cart!`);
    }
  };

  const handleBuyNow = () => {
    if (selectedVariation === null) {
      setMessage("Please select a variation.");
    } else {
      setMessage("");

      // Set the temporary cart for "Buy Now"
      setTempCart([
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: cartProduct,
          variation: selectedVariation,
          image: product.image,
        },
      ]);

      // Redirect to the OrderPage
      router.push("/order");
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setCartProduct((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-2 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="text-lg font-semibold">{cartProduct}</span>
        <button
          onClick={() => setCartProduct((prev) => prev + 1)}
          className="px-3 py-2 border rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Increase quantity"
        >
          +
        </button>

        <button
          className={`px-6 py-3 rounded-md flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
            selectedVariation
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          aria-label="Add to Cart"
          onClick={handleAddToCart}
        >
          <ShoppingCartIcon className="h-5 w-5" />
          Add to Cart
        </button>
      </div>

      {message && (
        <p className="text-red-500 text-sm mt-2" role="alert">
          {message}
        </p>
      )}

      <button
        className={`border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 ${
          !selectedVariation && "opacity-50 cursor-not-allowed"
        }`}
        aria-label="Buy Now"
        onClick={handleBuyNow}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductActions;
