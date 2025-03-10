import { ShoppingCartIcon } from "lucide-react";
import { useState, useEffect } from "react"; // Import useEffect

interface ProductActionsProps {
  selectedVariation: string | null;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  selectedVariation,
}) => {
  const [cartProduct, setCartProduct] = useState(1);
  const [message, setMessage] = useState("");

  // Clear the error message when a variation is selected
  useEffect(() => {
    if (selectedVariation !== null) {
      setMessage("");
    }
  }, [selectedVariation]); // Watch for changes in selectedVariation

  const handleAddToCart = () => {
    if (selectedVariation === null) {
      setMessage("Please select a variation.");
    } else {
      setMessage(""); // Clear any previous message
      alert(`Added ${cartProduct} product(s) to the cart!`);
      // Here, you can add logic to update the cart state or make an API call
    }
  };

  const handleBuyNow = () => {
    if (selectedVariation === null) {
      setMessage("Please select a variation.");
    } else {
      setMessage(""); // Clear any previous message
      alert(`Proceeding to buy ${cartProduct} product(s)!`);
      // Here, you can add logic to redirect to the checkout page or make an API call
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      {/* Quantity Control */}
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setCartProduct((prev) => Math.max(prev - 1, 1))} // Prevent quantity from going below 1
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

        {/* Add to Cart Button */}
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

      {/* Error Message */}
      {message && (
        <p className="text-red-500 text-sm mt-2" role="alert">
          {message}
        </p>
      )}

      {/* Buy Now Button */}
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
