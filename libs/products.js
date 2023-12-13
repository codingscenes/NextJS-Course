const { PrismaClient } = require('@prisma/client');
const slugify = require('slugify');
const xss = require('xss');
const fs = require('node:fs');

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

export async function saveProduct(product) {
  //npm install slugify xss (to santize the user content)
  const slug = slugify(product.name, { lower: true });
  const description = xss(product.description);
  // image should be stored on file system
  const extension = product.image.name.split('.').pop();
  const fileName = `${slug}.${extension}`; //avoid accidentally override other images
  // it will create a stream that allows to write data to certain file
  // it also needs path to which we wanna write and then it return a string object which we can then use to write to that path
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await product.image.arrayBuffer();
  //           Thing we wana right, second is function which executes when we done writing
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });
  const imageUrl = `/images/${fileName}`;
  await prisma.product.create({
    data: {
      name: product.name,
      description: description,
      sellerId: +product.sellerId,
      price: +product.price,
      imageUrl: imageUrl,
    },
  });
}
