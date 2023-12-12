import ProductItem from '@/components/products/product-item';
import { getAllProducts } from '@/libs/products';
import { Suspense } from 'react';

// const products = [
//   {
//     id: 1,
//     name: 'Apple MacBook Pro',
//     description: '2019 model, 16GB RAM, 512GB SSD, in excellent condition.',
//     price: 1200,
//     imageUrl: '/images/anete-lusina-zwsHjakE_iI-unsplash.jpg',
//     sellerId: '1',
//   },
//   {
//     id: 2,
//     name: 'Samsung Galaxy S21',
//     description: '128GB, Phantom Gray, Unlocked, Brand New',
//     price: 999,
//     imageUrl: '/images/kari-shea-1SAnrIxw5OY-unsplash.jpg',
//     sellerId: '1',
//   },
//   {
//     id: 3,
//     name: 'Sony PlayStation 5',
//     description: '1TB SSD, 4K UHD Blu-Ray, DualSense Wireless Controller',
//     price: 499,
//     imageUrl: '/images/maxim-hopman-Hin-rzhOdWs-unsplash.jpg',
//     sellerId: '1',
//   },
//   {
//     id: 4,
//     name: 'HP Laptops 2022',
//     description: '128GB, Phantom Gray, Unlocked, Brand New',
//     price: 300,
//     imageUrl: '/images/second-hand-laptop.jpg',
//     sellerId: '1',
//   },
//   {
//     id: 5,
//     name: 'Lenovo Lite',
//     description: '1TB SSD, 250GB SSD',
//     price: 49,
//     imageUrl: '/images/lenovo-second-hand-laptop.jpg',
//     sellerId: '1',
//   },
// ];

// out sourced the data fetching part
async function Products() {
  const products = await getAllProducts();
  return products.map((product) => <ProductItem product={product} key={product.id} />);
}
export default function ProductsPage() {
  return (
    <div className='container mt-4'>
      <div className='row'>
        {
          // Suspense react component that helps to show fallback content untill the data has been loaded
          // Loading.js compoenent does the same thing. it wraps with suspense component
          // and here we are trying to do the same manually
        }
        <Suspense fallback={'Loading the product. please wait'}>
          <Products />
        </Suspense>
      </div>
    </div>
  );
}
