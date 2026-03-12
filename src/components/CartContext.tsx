"use client";

import { createContext, useContext, useState } from "react";

type CartItem = {
  productId: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (productId: number, quantity: number) => void;
  minusToCart: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {

  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(productId: number, quantity: number) {

    setCart((prev) => {

      const existing = prev.find(
        (item) => item.productId === productId
      );

      if (existing) {

        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );

      }

      return [...prev, { productId, quantity }];

    });

  }

  function minusToCart(productId: number, quantity: number) {

    setCart((prev) => {

      const existing = prev.find(
        (item) => item.productId === productId
      );

      if (existing) {

        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - quantity }
            : item
        );

      }

      return [...prev, { productId, quantity }];

    });

  }

  function removeFromCart(productId: number) {
    setCart((prev) =>
      prev.filter((item) => item.productId !== productId)
    );
  }

  return (

    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, minusToCart }}
    >

      {children}

    </CartContext.Provider>

  );

}

export function useCart() {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;

}