const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  const userData = [
    {
      username: 'Rohit Sharma',
      password: '123456',
      email: 'rohit@abc.com',
    },
    {
      username: 'Mohit Sharma',
      password: '123456',
      email: 'mohit@abc.com',
    },
  ];

  for (let user of userData) {
    await prisma.user.create({
      data: user,
    });
  }

  const products = [
    {
      id: 1,
      name: 'Apple MacBook Pro',
      description: '2019 model, 16GB RAM, 512GB SSD, in excellent condition.',
      price: 1200,
      imageUrl: '/images/anete-lusina-zwsHjakE_iI-unsplash.jpg',
      sellerId: 1,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      description: '128GB, Phantom Gray, Unlocked, Brand New',
      price: 999,
      imageUrl: '/images/kari-shea-1SAnrIxw5OY-unsplash.jpg',
      sellerId: 1,
    },
    {
      id: 3,
      name: 'Sony PlayStation 5',
      description: '1TB SSD, 4K UHD Blu-Ray, DualSense Wireless Controller',
      price: 499,
      imageUrl: '/images/maxim-hopman-Hin-rzhOdWs-unsplash.jpg',
      sellerId: 2,
    },
    {
      id: 4,
      name: 'HP Laptops 2022',
      description: '128GB, Phantom Gray, Unlocked, Brand New',
      price: 300,
      imageUrl: '/images/second-hand-laptop.jpg',
      sellerId: 2,
    },
    {
      id: 5,
      name: 'Lenovo Lite',
      description: '1TB SSD, 250GB SSD',
      price: 49,
      imageUrl: '/images/lenovo-second-hand-laptop.jpg',
      sellerId: 1,
    },
  ];

  for (let product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  const allUsers = await prisma.user.findMany();
  const allProducts = await prisma.product.findMany();
  console.log(allUsers);
  console.log(allProducts);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
