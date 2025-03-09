import { formatPrice } from "@/lib/utils"; // Assuming you have a utility function for formatting prices

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
  return (
    <div>
      <p className="text-orange-500 text-2xl font-bold mt-4">
        {formatPrice(minPrice)} - {formatPrice(maxPrice)}
      </p>
      <p className="text-green-600 text-lg font-semibold mt-2">
        Maximum Discount: {formatPrice(discountPrice)}
      </p>
      {isCombination && (
        <div className="mt-4">
          <p className="text-lg font-semibold">
            Discounted Price:{" "}
            {formatPrice(discountPrice > 0 ? price - discountPrice : 0)}
          </p>
          {discountPrice > 0 ? (
            <p
              className="text-lg font-semibold line-through"
              style={{ textDecorationColor: "red" }}
            >
              Selected Base Price: {formatPrice(price)}
            </p>
          ) : (
            <p className="text-lg font-semibold">
              Selected Base Price: {formatPrice(price)}
            </p>
          )}
          {discountPrice === 0 && (
            <p className="text-red-500 text-sm mt-2">Discount has expired.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
