"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function ProductQuantity({
  price,
  onChange
}: {
  price: number;
  onChange: (q: number) => void;
}) {

  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  function increase() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
    setMessage("");
  }

  function decrease() {
    if (quantity <= 1) {
      setMessage("*Não pode ser menos de 1 produto");
      return;
    }

    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
    setMessage("");
  }

  const total = price * quantity;

  return (
    <div className="flex flex-col items-start gap-2">
      <p>Quantidade: <span className="font-bold">{quantity}</span></p>

      <div className="flex gap-2">
        <button onClick={increase} className="w-10 h-10 border rounded flex items-center justify-center cursor-pointer hover:bg-gray-100">
          <FaPlus />
        </button>

        <button onClick={decrease} className="w-10 h-10 border rounded flex items-center justify-center cursor-pointer hover:bg-gray-100">
          <FaMinus />
        </button>
      </div>

      <p>Total: R$ {total.toFixed(2)}</p>

      {message && <p className="text-red-500 font-semibold">{message}</p>}
    </div>
  );
}