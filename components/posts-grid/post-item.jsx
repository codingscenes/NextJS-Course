import Image from 'next/image';

export default function PostItem({ title, content, image }) {
  return (
    <div className='card mb-4 bg-dark'>
      <div className='card-body ' style={{ height: '50vh', position: 'relative' }}>
        <Image fill className='card-img-top mb-4' src={image} alt={`Photo of ${title}`} />
      </div>
      <div className='card-body'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text'>{content}</p>
      </div>
    </div>
  );
}
