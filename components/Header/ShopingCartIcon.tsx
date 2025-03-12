import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function ShopingCartIcon() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
      {/* Display total quantity */}
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}
