'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import styles from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    // convert file to data url
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPickedImage(reader?.result);
    };
  }
  function handleImageClick() {
    imageInputRef.current.click();
  }
  return (
    <div className='form-group mt-4'>
      <div className={styles.controls}>
        <button className={styles.button} type='button' onClick={handleImageClick}>
          Pick an Image
        </button>
        <div className={styles.preview}>
          {!pickedImage && <p className='text-muted'>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt='Preview' className={styles.image} fill />}
        </div>
        <input
          type='file'
          className={styles.input}
          id={name}
          placeholder='Enter product image URL'
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          // multiple={false}
          required
        />
      </div>
    </div>
  );
}
