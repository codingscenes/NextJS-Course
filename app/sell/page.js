'use client';
import ImagePicker from '@/components/products/image-picker';
import ProductFormSubmit from '@/components/products/product-form-submit';
import { publishProduct } from '@/libs/actions';
import classNames from 'classnames';
import { useFormState } from 'react-dom';
import styles from './page.module.css';
/**
 * This is how we add server functions
 * There is also another way
 * We can add server function to a component which is not a client side
 * eg 'use client' component can not have this server function as it
 * will throw errors
 * so if you outsource this server function to another file where you used
 * 'use server';
 * then here we can export that function and we can use it. now we can also mark this component as client component using 'use client' and
 * it will not throw any error and will work smoothly
 *
 */
export default function SellPage() {
  // async function publishProduct(formData) {
  //   'use server'; //This will create server action and is gauranted that this function will only execute on the server. so here we mark it that it will execute on server not on client and it is a server action.
  //   // FormData() // js class to handle submitted data
  //   const product = {
  //     name: formData.get('name'),
  //     description: formData.get('description'),
  //     price: formData.get('price'),
  //     imageUrl: formData.get('image'), //should be stored on filesystem and only url should be stored in imageUrl db
  //     sellerId: 1, // should be logged in user id
  //   };
  //   console.log(product);
  // }

  // const status = useFormStatus(); it will not work here any ways as this will only give status of the form(any ongoing request) if it is inside the form. as any it should be a client compoennt and it is not a good idea to transform the entire component to client compoent just for getting status of on-going request of this form.

  // useFormState but not useFormStatus (later)
  // it works like similar to useState hook where it manages the state of the page or compoennt which uses the form and that will be submited with the help of server action.
  // it needs two args, 1st the actual server action that should be triggered when the form is submited. and 2nd arg is initial state of the compoennt that means the initail value of this form state before the action  has been triggred and returned a response so we can use intial value if the response is not available just give it a shape.
  // state depends upon execution of the server action and its response
  // formAction will manage the state of the component by involving in between the process (man in the middle)
  const [state, formAction] = useFormState(publishProduct, { message: null });

  return (
    <div className='container mb-4'>
      <div className='row mx-auto justify-content-center'>
        <div className='col-md-8'>
          <h1 className='fancy mt-4'>Sell your product</h1>
          {/* <form className={styles.form} action={publishProduct}> */}
          {/* so useFormState can come into picture and manage the state of this component */}
          <form className={styles.form} action={formAction}>
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
            {state.message && <p style={{ color: 'red', fontWeight: 'bold', fontSize: '20px' }}>{state.message}</p>}
            <ProductFormSubmit />
          </form>
        </div>
      </div>
    </div>
  );
}
