import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

export default function ProductItem({ product }) {
  return (
    <div className='col-md-4 mb-4'>
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
  );
}
