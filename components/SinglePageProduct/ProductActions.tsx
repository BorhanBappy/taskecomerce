import { ShoppingCartIcon } from "lucide-react";

const ProductActions: React.FC = () => {
  return (
    <div className="flex gap-4 mt-6">
      <button
        className="bg-orange-500 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-orange-600"
        aria-label="Add to Cart"
      >
        <ShoppingCartIcon className="h-5 w-5" />
        Add to Cart
      </button>
      <button
        className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white"
        aria-label="Buy Now"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductActions;
