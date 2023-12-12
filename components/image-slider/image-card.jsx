import Image from 'next/image';

export default function ImageCard({
  cardClasses,
  imageClasses,
  contentClasses,
  image,
  title,
  detail = null,
  tips = null,
}) {
  return (
    <div className={cardClasses}>
      <div className='card bg-dark'>
        <Image src={image} className={imageClasses} alt={title} width={500} height={300} />
        <div className='card-body'>
          <h5>{title}</h5>
          {detail && <p className={contentClasses}>{detail}</p>}
          {tips && <p>Tips: {tips}</p>}
        </div>
      </div>
    </div>
  );
}
