"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function EditProduct({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  // 1️⃣ Pegar o produto pelo id
  useEffect(() => {
    fetch(`/api/products`)
      .then(res => res.json())
      .then((data: Product[]) => {
        const p = data.find(item => item.id === Number(params.id));
        if (p) {
          setProduct(p);
          setName(p.name);
          setPrice(p.price);
        }
      });
  }, [params.id]);

  // 2️⃣ Função para atualizar
  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch(`/api/products`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: product?.id, name, price }),
    });

    if (res.ok) {
      alert("Produto atualizado!");
      router.push(`/products/${product?.id}`);
    } else {
      alert("Erro ao atualizar o produto");
    }
  }

  if (!product) return <p>Carregando...</p>;

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-lebron-100 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Editar Produto</h1>
      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-semibold">Nome</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Preço</label>
          <input
            type="number"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-toffee-brown-600 text-white py-2 px-4 rounded hover:bg-toffee-brown-700"
        >
          Atualizar Produto
        </button>
      </form>
    </div>
  );
}