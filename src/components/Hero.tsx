import Image from "next/image";
import cake1 from "../../public/photos/cake.avif";
import bakery2 from "../../public/photos/bakery2.avif";
import bread from "../../public/photos/bread.avif";
import { outfit } from "../app/layout";


export default function Hero() {
    return (
        <section className="pt-10 pb-20 px-30  bg-linear-to-r from-(--color-lebron-200) to-(--color-lebron-400)">
                <div className="grid md:grid-cols-[1fr_1fr_0.7fr] gap-10 items-center">

                <div className="flex justify-center">
                    <div className="bg-white p-4 rounded-full shadow-xl">
                      <Image
                        src={bread}
                        alt=""
                        width={300}
                        height={300}
                        className="rounded-full object-cover h-90 w-90"
                      />
                    </div>
                  </div>
        
                  <div>
                    <h2 className={`${outfit.className} text-6xl font-bold text-(--color-camel-700)`}>
                      Decadent <br /> Chocolate <br/> Bliss!
                    </h2>
                    <p className="mt-4 text-lg text-gray-700 max-w-md">
                      Satisfy your sweetest cravings with our artisan cakes and desserts.
                    </p>
        
                    <div className="mt-6">
                      <span className="bg-white px-4 py-2 rounded-full font-semibold text--color-lebron-600) shadow">
                        SAVE 20%
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center flex-col gap-2">
                  <div className="bg-white p-2 rounded-full shadow-xl w-44">
                      <Image
                        src={bakery2}
                        alt=""
                        width={300}
                        height={300}
                        className="rounded-full object-cover h-40 w-40"
                      />
                    </div>
                    <div className="bg-white p-2 rounded-full shadow-xl w-44">
                      <Image
                        src={cake1}
                        alt=""
                        width={300}
                        height={300}
                        className="rounded-full object-cover h-40 w-40"
                      />
                    </div>
                  </div>
        
                  
        
                </div>
              </section>
    )
}