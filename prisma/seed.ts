import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {

  const senha = await bcrypt.hash("1234", 10);

  await prisma.user.createMany({
    data: [
      {
        email: "admin@email.com",
        password: senha
      },
      {
        email: "teste@email.com",
        password: senha
      },
      {
        email: "padaria@email.com",
        password: senha
      }
    ]
  });

}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });