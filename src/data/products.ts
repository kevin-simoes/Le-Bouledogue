import { NextResponse } from "next/server";
import { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Pão Francês Artesanal",
    price: 5.90,
    quantity: 1,
    small_description: "Pão francês fresco, crocante por fora e macio por dentro.",
    big_description: "Nosso pão francês é produzido diariamente com ingredientes selecionados e fermentação natural. Cada unidade é assada na hora, garantindo aquela crosta dourada e crocante que contrasta perfeitamente com a miolo macio e aerado. Ideal para cafés da manhã, lanches ou acompanhamento de refeições.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
  },
  {
    id: 2,
    name: "Croissant Dourado",
    price: 8.90,
    quantity: 1,
    small_description: "Croissant folhado com manteiga premium, camadas crocantes.",
    big_description: "Elaborado com técnica francesa tradicional, nosso croissant possui 27 camadas de massa folhada, feitas com manteiga de primeira qualidade importada. Cada peça é cuidadosamente dobrada e assada até atingir o dourado perfeito. Uma experiência gastronômica que desperta os sentidos com aroma celestial e sabor sofisticado.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80"
  },
  {
    id: 3,
    name: "Bolo Prestígio",
    price: 45.00,
    quantity: 1,
    small_description: "Bolo de chocolate com coco ralado e cobertura de ganache.",
    big_description: "Um clássico reinventado: camadas de bolo de chocolate fofíssimo intercaladas com creme de coco cremoso e Finalizado com generosa camada de ganache de chocolate比利时. Decorado com coco ralado fresco que adiciona textura e sabor tropical. Perfeito para festas e celebrações especiais.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80"
  },
  {
    id: 4,
    name: "Donut de Chocolate",
    price: 7.50,
    quantity: 1,
    small_description: "Donut fofinho com cobertura de chocolate ao leite e granulado.",
    big_description: "Nossa massa é preparada diariamente, resultando em um donut incrivelmente fofinho e leve. Coberto com chocolate ao leite de alta qualidade edecorado com granulado colorido que adiciona crocância e alegria. Uma sobremesa divertida que agrada tanto crianças quanto adultos.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80"
  },
  {
    id: 5,
    name: "Pão de Queijo",
    price: 3.50,
    quantity: 1,
    small_description: "Pão de queijo crocante por fora e cremoso por dentro.",
    big_description: "Feito com polvilho fresco e queijo Minas Padrão de primeira qualidade, nosso pão de queijo é assado no momento certo para garantir a crocância externa perfeita e o interior cremoso e derretido. Uma tradição brasileira que combina perfeitamente com café quentinho.",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80"
  },
  {
    id: 6,
    name: "Torta de Limão Siciliano",
    price: 28.00,
    quantity: 1,
    small_description: "Torta refrescante com creme de limão e merengue italiano.",
    big_description: "Base crocante de biscoito digestive, preenchida com creme rico preparado com limão siciliano fresco e leite condensado. Coberta com merengue italiano marshmallow feito na hora, levemente dourado. O equilíbrio perfeito entre o azedinho do limão e a doçura do merengue cria uma symphonia de sabores.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80"
  },
  {
    id: 7,
    name: "Cheesecake de Frutas Vermelhas",
    price: 32.00,
    quantity: 1,
    small_description: "Cheesecake cremoso com frutas vermelhas.",
    big_description: "Base de biscoito integral com ghee, preenchida com cream cheesePhiladelphia e creme de baunilha tahitiense. Coberto com calda caseira feita com amoras, mirtilos e framboesa frescos. Uma combinação sofisticada de texturas e sabores que satisfaz os paladares mais exigentes.",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&q=80"
  },
  {
    id: 8,
    name: "Cappuccino Italiano",
    price: 8.90,
    quantity: 1,
    small_description: "Café espresso com leite espuma e Finalizado com cacau.",
    big_description: "Preparado com grãos 100% arábica de origem colombiana, nosso cappuccino combina espresso encorpado com leite vaporizado formando uma espuma develada e sedosa. Finalizado com uma pitada de cacau em pó para um toque de sofisticação. Acompanha gratuitamente biscoitos crocantes.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
  },
  {
    id: 9,
    name: "Quiche Lorraine",
    price: 18.90,
    quantity: 1,
    small_description: "Quiche com bacon caramelizado, cebola e queijo gruyère.",
    big_description: "Massa crocante feita na mão, preenchida com mistura cremosa de ovos, creme de leite fresco, bacon caramelizado缓慢, cebola roxa e queijo gruyèreSuíço aged. Assada até ficar dourada e servida quentinha. Uma opção sofisticada para almoço ligero ou janta.",
    image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=800&q=80"
  },
  {
    id: 10,
    name: "Baguete Tradicional",
    price: 6.50,
    quantity: 1,
    small_description: "Baguete francesa crocante com miolo aerado e aroma pronunciado.",
    big_description: "Preparada com fermentação lenta de 24 horas, nossa baguete desenvolve sabores complexos e aroma pronunciado de cereal. A crosta é extremamente crocante, enquanto o miolo apresenta aquela estrutura característica alveolar e aerada. Perfeita para acompanhar queijos, patês ou simplesmente com manteiga.",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80"
  }
];

export async function GET() {
  return NextResponse.json(products);
}

export async function PUT(req: Request) {
  const data = await req.json();
  const index = products.findIndex(p => p.id === data.id);

  if (index !== -1) {
    products[index] = data;
    return NextResponse.json({ message: "Produto atualizado!" });
  }

  return NextResponse.json({ message: "Produto não encontrado!" }, { status: 404 });
}
