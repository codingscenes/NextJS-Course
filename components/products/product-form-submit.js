'use client';
import { useFormStatus } from 'react-dom';

export default function ProductFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type='submit' className='btn btn-dark mt-4'>
      {pending ? 'PLEASE WAIT...' : 'PUBLISH'}
    </button>
  );
}
