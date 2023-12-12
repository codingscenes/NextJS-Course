'use client';

import darjeelingImage from '@/assets/images/Darjeeling-West Bengal.jpg';
import jaipurImage from '@/assets/images/Jaipur-Rajasthan.jpg';
import keralaImage from '@/assets/images/Kerala-Backwaters.jpg';
import tajmahalImage from '@/assets/images/Taj-Mahal-Agra.jpg';
import goaImage from '@/assets/images/goa.jpg';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import ImageCard from './image-card';
import styles from './image-slider.module.css';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const placeList = [
    {
      image: tajmahalImage,
      title: 'Taj Mahal, Agra',
      detail: ' An ivory-white marble mausoleum on the right bank of the Yamuna river.',
    },
    {
      image: goaImage,
      title: 'Goa',
      detail: ' Known for its beautiful beaches and vibrant nightlife.',
    },
    {
      image: jaipurImage,
      title: 'Jaipur, Rajasthan',
      detail: 'Known as the Pink City, Jaipur is famous for its distinct color of buildings and its vibrant culture',
    },
    {
      image: keralaImage,
      title: 'Kerala Backwaters',
      detail: 'A network of tranquil canals and lagoons, perfect for a peaceful getaway.',
    },
    {
      image: darjeelingImage,
      title: 'Darjeeling, West Bengal',
      detail:
        'A beautiful hill station known for its tea gardens and the view of Kangchenjunga, the worlds third-highest mountain.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === placeList.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={classNames('row mx-auto justify-content-center', styles.sliderContainer)}>
      {placeList.map((place, index) => (
        <ImageCard
          cardClasses={`col ${index === currentSlide ? styles.activeImage : styles.inActiveImage}`}
          imageClasses={classNames('card-img-top', styles.placeImage)}
          contentClasses={classNames('card-text', styles.placeCardText)}
          image={place.image.src}
          title={place.title}
          key={index}
        />
      ))}
    </div>
  );
}
