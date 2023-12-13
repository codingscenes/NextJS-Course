'use server';
import { redirect } from 'next/navigation';
import { saveProduct } from './products';

// important to have so all the function defined here will be treated as server functions

function isInvalidText(text) {
  return !text || text.trim() === '';
}
// now the formData will be the second argument
// first arg will be the default state or the previous server action response
// which we in any case we do not use it
export async function publishProduct(previousState, formData) {
  const product = {
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    image: formData.get('image'), //should be stored on filesystem and only url should be stored in imageUrl db
    sellerId: 1, // should be logged in user id
  };
  console.log(product);

  // server side input validation; (later)
  // if (!product.name || product.name.trim() === '') {

  // }
  if (
    isInvalidText(product.name) ||
    isInvalidText(product.description) ||
    isInvalidText(product.price) ||
    !product.image ||
    product.image.size === 0
  ) {
    // throw new Error('Invalid input received!');
    return {
      // it should be serialize object that means no method as it will be any way lost
      message: 'Invalid Input',
    };
  }

  await saveProduct(product);
  // it will revalidate the path but not the nested path(siblings) untill you pass the 2nd arg
  // revalidatePath('/products) // to avoid agressive catching
  // revalidatePath('/products', 'page || layout');
  redirect('/products');
}
