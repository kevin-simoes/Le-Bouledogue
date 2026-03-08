import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {

  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email }
  });

  if(!user){
    return NextResponse.json({ success:false });
  }

  const valid = await bcrypt.compare(password, user.password);

  if(!valid){
    return NextResponse.json({ success:false });
  }

  return NextResponse.json({
    success:true,
    userId: user.id,
    role: user.role
  });
}