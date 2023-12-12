import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getDestinationData() {
  try {
    const destinations = await prisma.destination.findMany();
    return destinations;
  } catch (error) {
    console.error('Error retrieving destination data:', error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}

export default getDestinationData;
