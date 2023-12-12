import ImagePicker from '@/components/products/image-picker';
import styles from './page.module.css';

export default function SellPage() {
  return (
    <div className='container'>
      <div className='row mx-auto justify-content-center'>
        <div className='col-md-8'>
          <h1 className='fancy mt-4'>Sell your product</h1>
          <form className={styles.form}>
            <div className='form-group mt-4'>
              <label htmlFor='name' className={styles.label}>
                PRODUCT NAME
              </label>
              <input
                type='text'
                className='form-control bg-dark text-white'
                id='name'
                placeholder='Enter product name'
              />
            </div>
            <div className='form-group mt-4'>
              <label htmlFor='description' className={styles.label}>
                DESCRIPTION
              </label>
              <textarea
                className='form-control bg-dark text-white'
                id='description'
                rows='6'
                placeholder='Enter product description'
              ></textarea>
            </div>
            <div className='form-group mt-4'>
              <label htmlFor='price' className={styles.label}>
                PRICE
              </label>
              <input
                type='number'
                className='form-control bg-dark text-white'
                id='price'
                placeholder='Enter product price'
              />
            </div>
            <ImagePicker label='IMAGE' name='image' />
            <button type='submit' className='btn btn-dark mt-4'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
