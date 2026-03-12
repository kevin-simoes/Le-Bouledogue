import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const { userId, productId, quantity } = await req.json();

  const item = await prisma.cartItem.create({
    data: {
      userId,
      productId,
      quantity
    }
  });

  return NextResponse.json(item);
}