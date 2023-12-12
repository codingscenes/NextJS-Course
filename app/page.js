import ImageSlider from '@/components/image-slider/image-slider';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
          <h2 className={styles.pageTitle}>A Place for Travellers!</h2>
          <p>
            Welcome to our Travel Guide App! Explore and discover amazing destinations across India, shared by our
            community of avid travelers. Get firsthand tips, experiences, and advice from people who've been there.
            Whether you're planning your next adventure or just want to travel vicariously from the comfort of your
            home, our Travel Guide App is the perfect companion. Start your journey with us today.
          </p>
          <Link href='/destinations' className='btn btn-dark'>
            Explore Destinations
          </Link>
        </div>
        <div className='col-6'>
          <ImageSlider />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h3 className={styles.pageTitle}>Share your travelling tips!</h3>
          <p>
            Sharing your travel experiences with others is a great way to help them plan their next trip. You can share
            your tips and advice on our Travel Guide App by creating a post about your trip. You can also share your
            photos and videos from the trip, so others can see what it was like. We hope you enjoy using our Travel
            Guide App!
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h3 className={styles.pageTitle}>Get destination tips!</h3>
          <p>
            Our Travel Guide App is a great way to find new destinations and plan your next trip. You can search for
            destinations by country, city, or region. You can also filter destinations by type of activity (e.g.,
            hiking, beach, skiing). We hope you enjoy using our Travel Guide App!
          </p>
        </div>
      </div>
    </div>
  );
}
