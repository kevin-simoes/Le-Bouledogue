import { products } from "../../../data/products";
import Header from "../../../components/Header";
import Footer from "@/src/sections/Footer";
import ProductClient from "@/src/components/ProductClient";

export default async function ProductPage(
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl">
          Pão não encontrado 🥖
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto p-6 md:p-12">
        <ProductClient product={product} />
      </div>

      <Footer />
    </main>
  );
}