import ImageCard from '@/components/image-slider/image-card';
import getDestinationData from '@/libs/destination';

export default async function DestinationPage() {
  const destinations = await getDestinationData();
  return (
    <div className='container mt-4'>
      <div className='row mb-4'>
        <div className='col'>
          <h3>Destination: Explore the beauty!</h3>
        </div>
      </div>
      <div className='row'>
        {destinations.map((place, index) => (
          <ImageCard
            cardClasses={`col-md-6 mb-4`}
            imageClasses={'card-img-top'}
            contentClasses={'card-text'}
            image={place.image}
            title={place.name}
            key={index}
            detail={place.description}
            tips={place.tips}
          />
        ))}
      </div>
    </div>
  );
}
