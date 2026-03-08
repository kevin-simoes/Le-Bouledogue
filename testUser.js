import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

  const hash = await bcrypt.hash("123456", 10)

  const user = await prisma.user.create({
    data:{
      email:"admin@padaria.com",
      password: hash,
      role:"ADMIN"
    }
  })

  console.log(user)
}

main()