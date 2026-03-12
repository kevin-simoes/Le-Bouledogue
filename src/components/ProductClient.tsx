"use client";

import { useState } from "react";
import ProductQuantity from "./ProductQuantity";
import AddToCartButton from "./AddtoCartProduct";
import { greatVibes, outfit } from "@/src/app/layout";

export default function ProductClient({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* IMAGEM */}
          <div className="bg-lebron-100 p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-xl object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

          {/* INFORMAÇÕES */}
          <div className="flex flex-col gap-6">

            {/* TÍTULO */}
            <div>
              <span className="text-(--color-amber-800) font-semibold tracking-wider text-sm uppercase">
                Padaria Artesanal
              </span>

              <h1
                className={`${outfit.className} text-(--color-amber-600) md:text-5xl font-bold text-graphite-900 mt-2`}
              >
                {product.name}
              </h1>

              <p className={`${greatVibes.className}text-lg text-dim-grey-600 mt-4 leading-relaxed`}>
                {product.small_description}
              </p>
            </div>

            {/* PREÇO + QUANTIDADE */}
            <div className="border-y border-lebron-200 py-6 flex flex-col gap-4">
              <span className={`${greatVibes.className}text-3xl font-bold text-toffee-brown-600`}>
                R$ {product.price.toFixed(2)}
              </span>

              <ProductQuantity
                price={product.price}
                onChange={setQuantity}
              />

              <p className={`${greatVibes.className}text-sm text-dim-grey-500 italic`}>
                * Produção diária e limitada
              </p>
            </div>

            {/* DESCRIÇÃO */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-graphite-800">
                Sobre este pão:
              </h3>

              <p className="text-graphite-600 leading-relaxed">
                {product.big_description}
              </p>
            </div>

            {/* BOTÃO */}
            <div className="flex gap-4 pt-4">
              <div className="flex-1">
                <AddToCartButton
                  productId={product.id}
                  quantity={quantity}
                />
              </div>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-lebron-200">
              <div className="flex items-center gap-2 text-sm text-dim-grey-600">
                <span className="text-xl">🌾</span>
                Fermentação Natural
              </div>

              <div className="flex items-center gap-2 text-sm text-dim-grey-600">
                <span className="text-xl">🔥</span>
                Assado na Hora
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}