'use server';
import { redirect } from 'next/navigation';
import { saveProduct } from './products';

// important to have so all the function defined here will be treated as server functions

function isInvalidText(text) {
  return !text || text.trim() === '';
}
export async function publishProduct(formData) {
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
    throw new Error('Invalid input received!');
  }

  await saveProduct(product);
  redirect('/products');
}
