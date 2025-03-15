import { formatPrice } from "@/lib/utils";

interface ProductPriceProps {
  minPrice: number;
  maxPrice: number;
  discountPrice: number;
  price: number;
  isCombination: boolean;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  minPrice,
  maxPrice,
  discountPrice,
  price,
  isCombination,
}) => {
  // Calculate discounted price if applicable
  const discountedPrice = discountPrice > 0 ? price - discountPrice : null;

  return (
    <div>
      {/* Display min and max price if not a combination */}
      {!isCombination && (
        <p className="text-orange-500 text-2xl font-bold mt-4">
          {formatPrice(minPrice)} - {formatPrice(maxPrice)}
        </p>
      )}
      {discountedPrice !== null && (
        <span className=" py-8 text-red-600 text-3xl">
          / Save {discountPrice}
        </span>
      )}
      {/* Display combination-specific pricing */}
      {isCombination && (
        <div className="mt-4">
          {/* Display discounted price or regular price */}
          <p className="text-orange-500 text-2xl font-bold mt-4">
            Price:{" "}
            {discountedPrice
              ? formatPrice(discountedPrice)
              : formatPrice(price)}
          </p>

          {/* Display original price with strikethrough if discounted */}
          {discountedPrice && (
            <>
              <p
                className="text-lg font-semibold text-gray-400 line-through"
                style={{ textDecorationColor: "red" }}
              >
                {formatPrice(price)}
              </p>
              <p className="text-green-600 text-lg font-semibold">
                Save {discountPrice}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
