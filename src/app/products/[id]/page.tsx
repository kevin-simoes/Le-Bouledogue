"use client"

import { products } from "../../../data/products";
import Header from "../../../components/Header";
import Footer from "@/src/sections/Footer";
import ProductQuantity from "@/src/components/ProductQuantity";

export default async function ProductPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center bg-lebron-100 text-graphite-700">
        <h1 className="text-2xl font-medium">Pão não encontrado no forno... 🥖</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-(--color-camel-100)">
      <Header />

      <div className="max-w-6xl mx-auto p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-lebron-100 p-4 rounded-2xl shadow-sm border border-lebron-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-xl object-cover hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-camel-600 font-semibold tracking-wider text-sm uppercase">
                Padaria Artesanal
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-graphite-900 mt-2">
                {product.name}
              </h1>
              <p className="text-lg text-dim-grey-600 mt-4 leading-relaxed">
                {product.small_description}
              </p>
            </div>
            

            <div className="border-y border-lebron-200 py-6">
              <span className="text-3xl font-bold text-toffee-brown-600">
                R$ {product.price.toFixed(2)}
              </span>
              <ProductQuantity price={product.price} />
            
              <p className="text-sm text-dim-grey-500 mt-1 italic">
                * Produção diária e limitada
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-graphite-800">Sobre este pão:</h3>
              <p className="text-graphite-600 leading-relaxed">
                {product.big_description}
              </p>
            </div>
            <div className="flex gap-4 pt-6">
              <button className="flex-1 bg-toffee-brown-600 hover:bg-toffee-brown-700 text-(--color-camel-700) font-bold py-4 px-8 rounded-full transition-colors shadow-lg shadow-toffee-brown-200 active:scale-95">
                Adicionar à Cesta
              </button>
              <button className="p-4 border-2 border-camel-400 text-camel-600 hover:bg-camel-50 rounded-full transition-colors">

              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-lebron-200">
              <div className="flex items-center gap-2 text-sm text-dim-grey-600">
                <span className="text-xl">🌾</span> Fermentação Natural
              </div>
              <div className="flex items-center gap-2 text-sm text-dim-grey-600">
                <span className="text-xl">🔥</span> Assado na Hora
              </div>
            </div>
          </div>


        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}