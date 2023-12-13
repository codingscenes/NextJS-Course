import ImagePicker from '@/components/products/image-picker';
import classNames from 'classnames';
import styles from './page.module.css';

export default function SellPage() {
  async function publishProduct(formData) {
    'use server'; //This will create server action and is gauranted that this function will only execute on the server. so here we mark it that it will execute on server not on client and it is a server action.
    // FormData() // js class to handle submitted data
    const product = {
      name: formData.get('name'),
      description: formData.get('description'),
      price: formData.get('price'),
      imageUrl: formData.get('image'), //should be stored on filesystem and only url should be stored in imageUrl db
      sellerId: 1, // should be logged in user id
    };
    console.log(product);
  }
  return (
    <div className='container mb-4'>
      <div className='row mx-auto justify-content-center'>
        <div className='col-md-8'>
          <h1 className='fancy mt-4'>Sell your product</h1>
          <form className={styles.form} action={publishProduct}>
            <div className='form-group mt-4'>
              <label htmlFor='name' className={styles.label}>
                PRODUCT NAME
              </label>
              <input
                type='text'
                className='form-control bg-dark text-white'
                id='name'
                placeholder='Enter product name'
                name='name'
                required
              />
            </div>
            <div className='form-group mt-4'>
              <label htmlFor='description' className={styles.label}>
                DESCRIPTION
              </label>
              <textarea
                className='form-control bg-dark text-white'
                id='description'
                rows='4'
                placeholder='Enter product description'
                name='description'
                required
              ></textarea>
            </div>
            <div className='form-group mt-4'>
              <label htmlFor='price' className={styles.label}>
                PRICE
              </label>
              <input
                type='number'
                className={classNames('form-control bg-dark text-white', styles.price)}
                id='price'
                placeholder='Enter product price'
                name='price'
                required
              />
            </div>
            <ImagePicker label='IMAGE' name='image' />
            <button type='submit' className='btn btn-dark mt-4'>
              PUBLISH
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
