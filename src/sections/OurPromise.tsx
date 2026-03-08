import Image from "next/image";
import { outfit } from "../app/layout";
import cake1 from "../../public/photos/cake.avif"
import cake2 from "../../public/photos/cake2.avif"
import bread from "../../public/photos/bread.avif"
import bread2 from "../../public/photos/bread2.avif"
import bakery from "../../public/photos/bakery.avif"
import bakery2 from "../../public/photos/bakery2.avif"

export default function OurPromise() {
    return (
        <section className="pb-20 px-20 bg-(--color-camel-100) mx-10">
      <div className="flex flex-col gap-4">
        <h2 className={`${outfit.className} text-4xl font-bold text-(--color-camel-700)`}>
          Our Promises
          <hr className="w-56"></hr>
        </h2>
        <h2 className="text-xl text-(--color-camel-800) ">Don't have secret - just honest work!</h2>
        </div>

        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
      
      {/* COLUNA DA ESQUERDA - Informações e Promoção */}
      <div className="flex flex-col gap-6">
        
        {/* Card de Promessas/Features */}
        <div className="bg-[#FFF1F1] p-8 rounded-[2.5rem]">
          <h3 className="text-[#A62626] font-bold text-lg mb-8 text-center italic">
            A glimpse into our secret spell - only social world!
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'ON-TIME DELIVERY', icon: '🚚' },
              { label: '500+ DESIGNS', icon: '🎨' },
              { label: '2 CR+ ORDERS', icon: '🍰' },
              { label: 'BAKED FRESH', icon: '🥐' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 border-2 border-[#A62626] rounded-full flex items-center justify-center text-[#A62626] font-bold">
                  {item.icon}
                </div>
                <span className="text-[#A62626] text-[10px] font-bold leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card "The Magical Ticket" */}
        <div className="bg-[#FFF1F1] p-8 rounded-[2.5rem] flex items-center gap-6 relative overflow-hidden">
          <div className="w-1/3">
             {/* Simulação do Ticket */}
             <div className="bg-[#D97E7E] h-24 w-full rounded-lg rotate-[-10deg] flex items-center justify-center text-white font-bold">
                TICKET
             </div>
          </div>
          <div className="w-2/3">
            <h2 className="text-[#A62626] text-2xl font-black mb-2 uppercase">The Magical Ticket</h2>
            <p className="text-gray-600 text-sm mb-4 leading-snug">
              Add 3 reminders in your account. <br /> Win offers worth Rs. 750
            </p>
            <button className="bg-[#A62626] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#8a1f1f] transition-colors">
              UNLOCK NOW
            </button>
          </div>
        </div>

        {/* Barra Social Inferior */}
        <div className="bg-[#FFF1F1] p-4 rounded-full flex items-center justify-between px-8">
          <div className="flex -space-x-2">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300" />
            ))}
          </div>
          <span className="text-[#A62626] font-bold text-sm italic">Follow us on social!</span>
        </div>
      </div>

      {/* COLUNA DA DIREITA - Grid de Imagens */}
      <div className="grid grid-cols-2 gap-4 w-150">
          <Image 
              src={cake1}
              alt="Social Post" 
              className="w-150 h-60 object-cover rounded-4xl"
            />
            <Image 
              src={cake2}
              alt="Social Post" 
              className="w-150 h-60 object-cover rounded-4xl"
            />
            <Image 
              src={bread}
              alt="Social Post" 
              className="w-150 h-60 object-cover rounded-4xl"
            />
            <Image 
              src={bread2}
              alt="Social Post" 
              className="w-150 h-60 object-cover rounded-4xl"
            />
            <Image 
              src={bakery}
              alt="Social Post" 
              className="w-150 h-60 object-cover rounded-4xl"
            />
            <Image 
              src={bakery2}
              alt="Social Post" 
              className="w-150 h-60 object-cover rounded-4xl"
            />
      </div>

    </div>
      </section>
    )
}