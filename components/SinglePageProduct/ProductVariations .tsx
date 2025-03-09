import { useState } from "react";

interface ProductVariationsProps {
  variationValues: string[];
  selectedVariation: string | null;
  onVariationClick: (variation: string) => void;
}

const ProductVariations: React.FC<ProductVariationsProps> = ({
  variationValues,
  selectedVariation,
  onVariationClick,
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Available Variations:</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {variationValues.map((value, index) => (
          <button
            key={index}
            onClick={() => onVariationClick(value)}
            className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              selectedVariation === value.trim()
                ? "bg-orange-500 text-white"
                : "border-gray-300 hover:bg-gray-100 focus:ring-orange-500"
            }`}
            aria-label={`Select variation: ${value.trim()}`}
          >
            {value.trim()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductVariations;
