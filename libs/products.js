const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function getAllProducts() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error('Error retrieving products data:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}
