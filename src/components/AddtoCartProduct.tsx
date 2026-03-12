"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/src/components/CartContext";

export default function AddToCartButton({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) {

  const { addToCart } = useCart();
  const router = useRouter();

  const [showToast, setShowToast] = useState(false);

  function handleAdd() {
    addToCart(productId, quantity);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }

  return (
    <>
      <button
        onClick={handleAdd}
        className="bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-800 transition shadow-md"
      >
        🧺 Adicionar à cesta
      </button>

      {showToast && (

        <div className="fixed top-16 right-6 bg-amber-50 shadow-2xl border border-amber-200 rounded-2xl p-6 w-80 animate-slide-in z-50">

          <h3 className="font-bold text-lg text-amber-900">
            ✔ Produto adicionado
          </h3>

          <p className="text-sm text-amber-800 mt-1">
            Seu item foi colocado na cesta.
          </p>

          <div className="flex gap-3 mt-4">

            <button
              onClick={() => router.push("/cart")}
              className="flex-1 bg-amber-700 text-white rounded-lg px-3 py-2 hover:bg-amber-800 transition font-medium"
            >
              Ver carrinho
            </button>

          </div>

        </div>

      )}
    </>
  );
}