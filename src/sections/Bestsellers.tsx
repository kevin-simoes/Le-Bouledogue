import { outfit } from "../app/layout";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Bestsellers() {
    return (
        <section className="py-20 px-20  mx-10 flex flex-col gap-5">
        <div className="flex flex-col">
      <h2 className={`${outfit.className} text-4xl font-bold text-(--color-camel-700)`}>
        The most popular
        <hr className="w-72"></hr>
        </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {products.map(product => (
            <ProductCard
            key={product.id}
            product={product}
            />
          ))}

        </div>

        <div className="text-center mt-10">
          <button className=" text-(--color-lebron-700) px-6 py-2 rounded-full hover:scale-105 transition">
            VIEW ALL
          </button>
        </div>
      </section>
    )
}