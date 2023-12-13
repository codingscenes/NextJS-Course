'use server';
import { redirect } from 'next/navigation';
import { saveProduct } from './products';

// important to have so all the function defined here will be treated as server functions

export async function publishProduct(formData) {
  const product = {
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    image: formData.get('image'), //should be stored on filesystem and only url should be stored in imageUrl db
    sellerId: 1, // should be logged in user id
  };
  console.log(product);
  await saveProduct(product);
  redirect('/products');
}
