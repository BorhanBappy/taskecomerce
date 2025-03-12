"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the structure of the cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  variation: string;
  image: string;
}

// Define the CartContextType
interface CartContextType {
  cartItems: CartItem[];
  tempCart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, variation: string) => void;
  updateQuantity: (id: number, variation: string, quantity: number) => void;
  setSelectedItems: (items: CartItem[]) => void;
  clearTempCart: () => void; // Add this line
}

// Create a default empty context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [tempCart, setTempCart] = useState<CartItem[]>([]);

  // Add item to cart
  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (cartItem) =>
          cartItem.id === item.id && cartItem.variation === item.variation
      );

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id && cartItem.variation === item.variation
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prev, item];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id: number, variation: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.variation === variation))
    );
  };

  // Update item quantity
  const updateQuantity = (id: number, variation: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.variation === variation
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Store selected items for order page
  const setSelectedItems = (items: CartItem[]) => {
    setTempCart(items);
  };
  const clearTempCart = () => {
    setTempCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        tempCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        setSelectedItems,
        clearTempCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
