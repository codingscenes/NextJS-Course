const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Doe', email: 'jane@example.com' },
    { name: 'Alice', email: 'alice@example.com' },
    // Add more users here
  ];
  const placeList = [
    {
      image: '/images/Taj-Mahal-Agra.jpg',
      name: 'Taj Mahal, Agra',
      description: ' An ivory-white marble mausoleum on the right bank of the Yamuna river.',
      tips: "Visit early in the morning to avoid crowds. Don't forget to take your camera for amazing shots.",
    },
    {
      image: '/images/goa.jpg',
      name: 'Goa',
      description: ' Known for its beautiful beaches and vibrant nightlife.',
      tips: 'Visit during November to February to enjoy the best weather.',
    },
    {
      image: '/images/Jaipur-Rajasthan.jpg',
      name: 'Jaipur, Rajasthan',
      description:
        'Known as the Pink City, Jaipur is famous for its distinct color of buildings and its vibrant culture',
      tips: 'Explore the local markets for a taste of the local culture and cuisine.',
    },
    {
      image: '/images/Kerala-Backwaters.jpg',
      name: 'Kerala Backwaters',
      description: 'A network of tranquil canals and lagoons, perfect for a peaceful getaway.',
      tips: 'Stay in a houseboat for a unique experience.',
    },
    {
      image: '/images/Darjeeling-West Bengal.jpg',
      name: 'Darjeeling, West Bengal',
      description:
        'A beautiful hill station known for its tea gardens and the view of Kangchenjunga, the worlds third-highest mountain.',
      tips: 'Take a ride on the Darjeeling Himalayan Railway, a UNESCO World Heritage site.',
    },
  ];
  const posts = [
    {
      userId: 1,
      destinationId: 1,
      title: 'Taj Mahal, Agra',
      content:
        "An ivory-white marble mausoleum on the right bank of the Yamuna river.Visit early in the morning to avoid crowds. Don't forget to take your camera for amazing shots.",
      image: '/images/Taj-Mahal-Agra.jpg',
    },
    {
      userId: 1,
      destinationId: 2,
      title: 'Goa',
      content:
        'Known for its beautiful beaches and vibrant nightlife. Visit during November to February to enjoy the best weather.',
      image: '/images/goa.jpg',
    },
    {
      userId: 1,
      destinationId: 3,
      title: 'Jaipur, Rajasthan',
      content:
        'Known as the Pink City, Jaipur is famous for its distinct color of buildings and its vibrant culture. Explore the local markets for a taste of the local culture and cuisine.',
      image: '/images/Jaipur-Rajasthan.jpg',
    },
    {
      userId: 1,
      destinationId: 4,
      title: 'Kerala Backwaters',
      content:
        'A network of tranquil canals and lagoons, perfect for a peaceful getaway.Stay in a houseboat for a unique experience.',
      image: '/images/Kerala-Backwaters.jpg',
    },
    {
      userId: 1,
      destinationId: 5,
      title: 'Darjeeling, West Bengal',
      content:
        'A beautiful hill station known for its tea gardens and the view of Kangchenjunga, the worlds third-highest mountain.Take a ride on the Darjeeling Himalayan Railway, a UNESCO World Heritage site.',
      image: '/images/Darjeeling-West Bengal.jpg',
    },
  ];

  // for (let user of users) {
  //   await prisma.user.create({
  //     data: user,
  //   });
  // }
  // for (let place of placeList) {
  //   await prisma.destination.create({
  //     data: place,
  //   });
  // }
  for (let post of posts) {
    await prisma.post.create({
      data: post,
    });
  }

  const allUsers = await prisma.user.findMany();
  const allDestination = await prisma.destination.findMany();
  const allposts = await prisma.post.findMany();

  console.log(allUsers);
  console.log(allDestination);
  console.log(allposts);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
