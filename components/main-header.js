import brandIcon from '@/assets/images/logo.png';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './main-header.module.css';

export default function MainHeader() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link href={'/'} className={classNames('navbar-brand', styles.brandName)}>
          <Image
            src={brandIcon.src}
            alt='Brand Logo Travel Guide'
            width={20}
            height={20}
            className={styles.logo}
            priority
          />
          Travel Guide
        </Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav flex-row me-auto'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' href='/destinations'>
                Destinations
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' href='/posts'>
                Posts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
