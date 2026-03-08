import { outfit } from "../app/layout";

export default function Menu() {
    return (
        <section className="pt-20 px-20 bg-(--color-camel-100) mx-10 rounded-t-4xl flex justify-between">
                <div className="flex flex-col gap-4">
                <h2 className={`${outfit.className} text-5xl font-bold text-(--color-camel-700)`}>
                  Menu
                  <hr className="w-30"></hr>
                </h2>
                <h2 className="text-xl text-(--color-camel-800) ">What you wish for?</h2>
                </div>
        
                <div className="grid md:grid-cols-4 gap-8">
                  {["Classic", "Gourmet", "Desserts", "Cookies"].map((item) => (
                    <div
                      key={item}
                      className="bg-var(--color-dim-grey-100) p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition cursor-pointer"
                    >
                      <div className="text-4xl mb-4">🍰</div>
                      <h4 className="font-semibold text-lg">{item}</h4>
                    </div>
                  ))}
                </div>
              </section>
    )
}