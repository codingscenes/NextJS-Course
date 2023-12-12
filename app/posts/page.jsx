import PostsGrid from '@/components/posts-grid/posts-grid';
import Link from 'next/link';

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

export default function Posts() {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col'>
          <h3>Experience the beauty of India!</h3>
          <p>
            People have shared their experiences of visiting India and have written about the places they have visited.
            Read their experiences and get inspired to visit India!
          </p>
          <p>If you want to share your experience</p>
          <p>
            <Link href='/posts/share' className='btn btn-dark'>
              click here
            </Link>
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <PostsGrid posts={posts} />
        </div>
      </div>
    </div>
  );
}
