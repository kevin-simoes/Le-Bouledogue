import { NextResponse } from "next/server";
import { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Pão Francês",
    price: 0.50,
    quantity: 1,
    small_description: "Pão francês crocante feito na hora",
    big_description: "Pão francês crocante feito na hora e muito gostoso",
    image: "/products/crossaint.jpg"
  },
  {
    id: 2,
    name: "Croissant",
    price: 6.00,
    quantity: 1,
    small_description: "Pão francês crocante feito na hora",
    big_description: "Pão francês crocante feito na hora e muito gostoso",
    image: "/products/crossaint.jpg"
  },
  {
    id: 3,
    name: "Bolo de Chocolate",
    price: 25.00,
    quantity: 1,
    small_description: "Pão francês crocante feito na hora",
    big_description: "Pão francês crocante feito na hora e muito gostoso",
    image: "/products/crossaint.jpg"
  },
  {
    id: 4,
    name: "Sonho",
    price: 10.00,
    quantity: 1,
    small_description: "Sonho de doce de leite cremoso e macio",
    big_description: "Sonho de doce de leite cremoso e macio, o carro chefe da casa.",
    image: "/products/dream.webp"
  },
  {
    id: 5,
    name: "Baby Nutella",
    price: 2.00,
    quantity: 1,
    small_description: "Sonho de doce de leite cremoso e macio",
    big_description: "Sonho de doce de leite cremoso e macio, o carro chefe da casa.",
    image: "/products/dream.webp"
  }
];

export async function GET() {
  return NextResponse.json(products);
}

export async function PUT(req: Request) {
  const data = await req.json(); // { id, name, price }
  const index = products.findIndex(p => p.id === data.id);
  if (index !== -1) {
    products[index] = data;
    return NextResponse.json({ message: "Produto atualizado!" });
  }
  return NextResponse.json({ message: "Produto não encontrado!" }, { status: 404 });
}