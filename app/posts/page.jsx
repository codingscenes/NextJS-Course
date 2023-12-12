import PostsGrid from '@/components/posts-grid/posts-grid';
import Link from 'next/link';

const posts = [
  {
    id: 'p1',
    place: 'Taj Mahal, Agra',
    thoughts: 'An ivory-white marble mausoleum on the right bank of the Yamuna river.',
    photos: [
      'https://images.unsplash.com/photo-1593407581005-8ec9fcae7b4a?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1587135941948-670b381f08ce?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    tips: "Visit early in the morning to avoid crowds. Don't forget to take your camera for amazing shots.",
  },
  {
    id: 'p2',
    place: 'Goa',
    thoughts: 'Known for its beautiful beaches and vibrant nightlife.',
    photos: [
      'https://www.holidify.com/images/cmsuploads/compressed/Goa_beaches_20190613234210.jpg',
      'https://www.holidify.com/images/cmsuploads/compressed/Goa_beaches_20190613234210.jpg',
      'https://www.holidify.com/images/cmsuploads/compressed/Goa_beaches_20190613234210.jpg',
    ],
    tips: 'Visit during November to February to enjoy the best weather.',
  },
  {
    id: 'p3',
    place: 'Jaipur, Rajasthan',
    thoughts: 'Known as the Pink City, Jaipur is famous for its distinct color of buildings and its vibrant culture',
    photos: [
      'https://www.holidify.com/images/cmsuploads/compressed/amer-fort-jaipur-rajasthan-india-cover_20190613234315.jpg',
      'https://www.holidify.com/images/cmsuploads/compressed/amer-fort-jaipur-rajasthan-india-cover_20190613234315.jpg',
      'https://www.holidify.com/images/cmsuploads/compressed/amer-fort-jaipur-rajasthan-india-cover_20190613234315.jpg',
    ],
    tips: 'Explore the local markets for a taste of the local culture and cuisine.',
  },
  {
    id: 'p4',
    place: 'Kerala Backwaters',
    thoughts: 'A network of tranquil canals and lagoons, perfect for a peaceful getaway.',
    photos: [
      'https://www.holidify.com/images/cmsuploads/compressed/alleppey-backwaters_20190613234437.jpg',
      'https://www.holidify.com/images/cmsuploads/compressed/alleppey-backwaters_20190613234437.jpg',
      'https://www.holidify.com/images/cmsuploads/compressed/alleppey-backwaters_20190613234437.jpg',
    ],
    tips: 'Stay in a houseboat for a unique experience.',
  },
  {
    id: 'p5',
    place: 'Darjeeling, West Bengal',
    thoughts:
      'A beautiful hill station known for its tea gardens and the view of Kangchenjunga, the worlds third-highest mountain.',
    photos: [
      'https://www.holidify.com/images/cmsuploads/compressed/darjeeling-1807_20190613234547.jpg',
      'https://www.holidify.com/images/cmsuploads/compressed/darjeeling-1807_20190613234547.jpg',
      'https://www.holidify.com/images/cmsuploads/compressed/darjeeling-1807_20190613234547.jpg',
    ],
    tips: 'Take a ride on the Darjeeling Himalayan Railway, a UNESCO World Heritage site.',
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
