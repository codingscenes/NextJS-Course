import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Hello!</h1>
        </div>
        <p>
          <Link href={'/posts'}>Posts</Link>
        </p>
        <p>
          <Link href={'/posts/share'}>Share Post</Link>
        </p>
        <p>
          <Link href={'/destinations'}>Destinations</Link>
        </p>
      </div>
    </div>
  );
}
