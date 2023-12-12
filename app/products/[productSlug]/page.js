import { getProductBySlug } from '@/libs/products';
import classNames from 'classnames';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

const product = {
  id: 1,
  name: 'Galaxy Book3 Pro 360',
  description: `
  <p>Galaxy Book Pro 360 is a PC that lives up to its name. With the versatility of a 360° hinge, the beauty of a Super AMOLED touchscreen, a powerful Intel® processor, and Windows 10, it’s a convertible 2-in-1 that transforms from laptop to tablet with ease.</p>
  <ul>
    <li>Galaxy Book Pro 360 is a PC that lives up to its name. With the versatility of a 360° hinge, the beauty of a Super AMOLED touchscreen, a powerful Intel® processor, and Windows 10, it’s a convertible 2-in-1 that transforms from laptop to tablet with ease.</li>
  </ul>
    `,
  price: '300',
  imageUrl: '/images/anete-lusina-zwsHjakE_iI-unsplash.jpg',
  sellerId: 1,
  sellerName: 'Rohit Sharma',
  sellerEmail: 'xyz@abc.com',
  createdAt: '1702389895598',
};
export default async function ProductDetailPage({ params }) {
  // console.log(params.productSlug);
  const product = await getProductBySlug(params?.productSlug);
  if (!product) {
    // i have added not-found.js later after showing the priority of error page over not found when error page is closer than not found.
    // will show closest error or not found page
    // if there is no error or not found page, it will show default error page
    // if there is closest error page, it will show that error page, ignoring default error page
    notFound();
  }
  const createdAtDate = product?.createdAt.toLocaleString();
  const description = product?.description.replace(/\n/g, '<br />');

  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-12 col-md-6 col-lg-4 offset-md-2 offset-lg-2'>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={product?.imageUrl}
              width={400}
              height={500}
              layout='responsive'
              alt={`${product?.name} image`}
            />
          </div>
        </div>
        <div className={classNames('col-12 col-md-6 col-lg-5 ms-2', styles.productDetails)}>
          <div className='row'>
            <div className='col-12'>
              <h1 className='fancy'>{product?.name}</h1>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-12'>
              <h2>${product?.price}</h2>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-12'>Posted on {createdAtDate}</div>
          </div>
          <div className='row mt-2'>
            <div className='col-12'>
              Posted by{' '}
              <a style={{ color: '#fff', fontStyle: 'italic' }} href={`mailto:${product?.user?.email}`}>
                {' '}
                {product?.user?.username}
              </a>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-12'>
              <div>Product Highlights:</div>
              <div dangerouslySetInnerHTML={{ __html: product?.description }}></div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-12'>
              <div>Connect with Seller:</div>
              <h3>{product?.user?.email}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
