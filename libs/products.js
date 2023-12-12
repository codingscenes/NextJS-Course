const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function getAllProducts() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // throw new Error('Loading products failed');
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error('Error retrieving products data:', error);
    throw error;
    // return [];
  } finally {
    await prisma.$disconnect();
  }
}

export async function getProductBySlug(slug) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // throw new Error('Loading products failed');
    const product = await prisma.product.findUnique({
      where: {
        id: +slug,
      },
      include: {
        user: {
          select: {
            email: true,
            username: true,
          },
        },
      },
    });
    if (!product) {
      return null;
    }
    const { email: sellerEmail, username: sellerUsername } = product.user;
    return { ...product, sellerEmail, sellerUsername };
  } catch (error) {
    console.error('Error retrieving product data:', error);
    throw error;
    // return [];
  } finally {
    await prisma.$disconnect();
  }
}
