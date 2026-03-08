import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/Product";
import { FaStar } from "react-icons/fa";
import { outfit } from "../app/layout";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
    <div
      className={`${outfit.className} text-xl font-bold text-(--color-camel-700) bg-(--color-camel-50) p-6 shadow-md hover:shadow-xl transition`}
    >
      <Image
        src={product.image || "/products/default.png"}
        alt={product.name}
        width={250}
        height={250}
        className="mb-4 object-cover"
      />

      <h4 className="text-lg font-semibold mb-2">
        {product.name}
      </h4>

      <p className="text-gray-500 text-sm mb-3">
        {product.small_description}
      </p>

      <span className="font-bold text-(--color-lebron-500)">
  {new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(product.price)}
</span>

      <div className="mt-2 flex text-amber-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
    </Link>
  );
}