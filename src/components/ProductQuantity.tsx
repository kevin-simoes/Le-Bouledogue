"use client";

import { useState } from "react";

export default function ProductQuantity({ price }: { price: number }) {

  const [quantity, setQuantity] = useState(1);

  function increase() {
    setQuantity(quantity + 1);
  }

  const total = price * quantity;

  return (
    <div>

      <p>Quantidade: {quantity}</p>

      <button onClick={increase}>
        +
      </button>

      <p>Total: R$ {total.toFixed(2)}</p>

    </div>
  );
}