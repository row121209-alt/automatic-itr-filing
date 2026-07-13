import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

// Handle disconnection on shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect()
  process.exit(0)
})
