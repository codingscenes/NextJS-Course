'use client';

import brandIcon from '@/assets/images/logo.png';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from '../nav-link/nav-link';
import styles from './main-header.module.css';

export default function MainHeader() {
  return (
    <header>
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
                <NavLink href='/destinations'>Destinations</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink href='/posts'>Posts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
