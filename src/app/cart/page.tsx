"use client";

import { ReturnArrow } from "@/src/components/BackArrow";
import { useCart } from "@/src/components/CartContext";
import { products } from "@/src/data/products";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function CartPage() {
  const { cart, addToCart, removeFromCart, minusToCart } = useCart();

  const cartProducts = cart
    .map((item: any) => {
      const product = products.find((p) => p.id === item.productId);

      if (!product) return null;

      return { ...product, quantity: item.quantity };
    })
    .filter(Boolean);

  const subtotal = cartProducts.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 100 ? 0 : 20;
  const discount = subtotal > 200 ? 30 : 0;
  const total = subtotal + shipping - discount;

  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="min-h-screen bg-(--color-lebron-100) flex flex-col items-center p-4 md:p-10">
      {/* Seta para voltar */}
      <Link
        href="/"
        className="text-white text-3xl flex fixed top-4 left-4 p-3 z-50 bg-[var(--color-camel-700)] rounded-full hover:bg-[var(--color-camel-600)] transition"
      >
        <FaArrowLeft />
      </Link>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
        {/* ===================== */}
        {/* PRODUTOS */}
        {/* ===================== */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[var(--color-lebron-700)]">
            Itens
          </h2>

          {cartProducts.map((item: any) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 shadow flex flex-col sm:flex-row justify-between items-center gap-4"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  className="w-20 h-20 rounded object-cover"
                />

                <div>
                  <h3 className="font-semibold text-[var(--color-lebron-700)]">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Quantidade: {item.quantity}
                  </p>

                  <div className="flex gap-2 mt-2">
                    <button
                      className="bg-[var(--color-camel-400)] text-white px-3 rounded"
                      onClick={() => addToCart(item.id, 1)}
                    >
                      +
                    </button>
                    <button
                      className="bg-[var(--color-camel-400)] text-white px-3 rounded"
                      onClick={() => minusToCart(item.id, 1)}
                    >
                      -
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>

              <p className="font-semibold text-lg text-[var(--color-camel-600)]">
                R$ {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          {/* ===================== */}
          {/* RESUMO */}
          {/* ===================== */}
          <div className="bg-white rounded-xl p-6 shadow space-y-2">
            <h3 className="text-xl font-semibold text-[var(--color-lebron-700)]">
              Resumo
            </h3>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Desconto</span>
              <span>- R$ {discount}</span>
            </div>

            <div className="flex justify-between">
              <span>Entrega</span>
              <span>{shipping === 0 ? "Grátis" : `R$ ${shipping}`}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* PAGAMENTO */}
        {/* ===================== */}
        <div className="bg-white rounded-xl p-8 shadow space-y-6">
          <h2 className="text-2xl font-semibold text-[var(--color-lebron-700)]">
            Checkout
          </h2>

          {/* MÉTODOS */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setPaymentMethod("card")}
              className={`border rounded-lg px-4 py-2 ${
                paymentMethod === "card"
                  ? "border-[var(--color-camel-500)]"
                  : "border-gray-300"
              }`}
            >
              Cartão
            </button>

            <button
              onClick={() => setPaymentMethod("paypal")}
              className={`border rounded-lg px-4 py-2 ${
                paymentMethod === "paypal"
                  ? "border-[var(--color-camel-500)]"
                  : "border-gray-300"
              }`}
            >
              PayPal
            </button>

            <button
              onClick={() => setPaymentMethod("pix")}
              className={`border rounded-lg px-4 py-2 ${
                paymentMethod === "pix"
                  ? "border-[var(--color-camel-500)]"
                  : "border-gray-300"
              }`}
            >
              PIX
            </button>
          </div>

          {/* FORM */}
          {paymentMethod === "card" && (
            <div className="space-y-4">
              <input
                placeholder="Nome no cartão"
                className="w-full border rounded-lg p-3"
              />

              <input
                placeholder="Número do cartão"
                className="w-full border rounded-lg p-3"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Validade"
                  className="border rounded-lg p-3"
                />

                <input placeholder="CVC" className="border rounded-lg p-3" />
              </div>
            </div>
          )}

          {paymentMethod === "paypal" && (
            <p className="text-gray-500">
              Você será redirecionado para o PayPal.
            </p>
          )}
          {paymentMethod === "pix" && (
            <p className="text-gray-500">
              Quando o pagamento for feito, você receberá um email.
            </p>
          )}

          {/* BOTÃO */}
          <button className="w-full bg-[var(--color-camel-500)] hover:bg-[var(--color-camel-600)] text-white py-3 rounded-lg font-semibold transition">
            Pagar agora
          </button>
        </div>
      </div>
    </div>
  );
}