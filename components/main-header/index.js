'use client';

import brandIcon from '@/assets/images/brandIcon.png';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from '../nav-link';
import styles from './styles.module.css';

export default function MainHeader() {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link href={'/'} className={classNames('navbar-brand', styles.brandName)}>
            <Image
              src={brandIcon.src}
              alt='Brand Logo LapTopia'
              width={20}
              height={20}
              className={styles.logo}
              priority
            />
            LapTopia
          </Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav flex-row me-auto'>
              <li className='nav-item'>
                <NavLink href='/products'>Products</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink href='/sell'>Sell</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
