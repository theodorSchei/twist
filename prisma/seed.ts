// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import { twists } from '../src/lib/types/Twist'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  for (const p of twists) {
    const twist = await prisma.twist.create({
			data: {
				id: p.id,
				name: p.name,
      }
    })
    console.log(`Created twist with id: ${twist.id} and name: ${twist.name}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
