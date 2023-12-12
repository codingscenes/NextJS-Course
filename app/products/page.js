import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const products = [
  {
    id: 1,
    name: 'Apple MacBook Pro',
    description: '2019 model, 16GB RAM, 512GB SSD, in excellent condition.',
    price: 1200,
    imageUrl: '/images/anete-lusina-zwsHjakE_iI-unsplash.jpg',
    sellerId: '1',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    description: '128GB, Phantom Gray, Unlocked, Brand New',
    price: 999,
    imageUrl: '/images/kari-shea-1SAnrIxw5OY-unsplash.jpg',
    sellerId: '1',
  },
  {
    id: 3,
    name: 'Sony PlayStation 5',
    description: '1TB SSD, 4K UHD Blu-Ray, DualSense Wireless Controller',
    price: 499,
    imageUrl: '/images/maxim-hopman-Hin-rzhOdWs-unsplash.jpg',
    sellerId: '1',
  },
  {
    id: 4,
    name: 'HP Laptops 2022',
    description: '128GB, Phantom Gray, Unlocked, Brand New',
    price: 300,
    imageUrl: '/images/second-hand-laptop.jpg',
    sellerId: '1',
  },
  {
    id: 5,
    name: 'Lenovo Lite',
    description: '1TB SSD, 250GB SSD',
    price: 49,
    imageUrl: '/images/lenovo-second-hand-laptop.jpg',
    sellerId: '1',
  },
];

export default function ProductsPage() {
  return (
    <div className='container mt-4'>
      <div className='row'>
        {products.map((product) => (
          <div className='col-md-4 mb-4' key={product.id}>
            <Link href={`/products/${product.id}`} className={styles.productLink}>
              <div className='card bg-dark'>
                <Image src={product.imageUrl} width={300} height={200} className='card-img-top' alt={product.name} />

                <div className={classNames('card-body')}>
                  <h5 className='card-title'>{product.name}</h5>
                  <p className={classNames('card-text', styles.productDesc)}>{product.description}</p>
                  <p className='card-text'>${product.price}</p>
                  {/* <a href='#' className='btn btn-dark'>
                  Buy Now
                </a> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
