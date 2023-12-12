import ImageCard from '@/components/image-slider/image-card';
import getDestinationData from '@/libs/destination';
// const placeList = [
//   {
//     image: 'tajmahalImage',
//     name: 'Taj Mahal, Agra',
//     description: ' An ivory-white marble mausoleum on the right bank of the Yamuna river.',
//     tips: "Visit early in the morning to avoid crowds. Don't forget to take your camera for amazing shots.",
//   },
//   {
//     image: goaImage,
//     name: 'Goa',
//     description: ' Known for its beautiful beaches and vibrant nightlife.',
//     tips: 'Visit during November to February to enjoy the best weather.',
//   },
//   {
//     image: jaipurImage,
//     name: 'Jaipur, Rajasthan',
//     description: 'Known as the Pink City, Jaipur is famous for its distinct color of buildings and its vibrant culture',
//     tips: 'Explore the local markets for a taste of the local culture and cuisine.',
//   },
//   {
//     image: keralaImage,
//     name: 'Kerala Backwaters',
//     description: 'A network of tranquil canals and lagoons, perfect for a peaceful getaway.',
//     tips: 'Stay in a houseboat for a unique experience.',
//   },
//   {
//     image: darjeelingImage,
//     name: 'Darjeeling, West Bengal',
//     description:
//       'A beautiful hill station known for its tea gardens and the view of Kangchenjunga, the worlds third-highest mountain.',
//     tips: 'Take a ride on the Darjeeling Himalayan Railway, a UNESCO World Heritage site.',
//   },
// ];
// exp;
// const placeList = [
//   {
//     image: '/images/Taj-Mahal-Agra.jpg',
//     name: 'Taj Mahal, Agra',
//     description: ' An ivory-white marble mausoleum on the right bank of the Yamuna river.',
//     tips: "Visit early in the morning to avoid crowds. Don't forget to take your camera for amazing shots.",
//   },
//   {
//     image: '/images/goa.jpg',
//     name: 'Goa',
//     description: ' Known for its beautiful beaches and vibrant nightlife.',
//     tips: 'Visit during November to February to enjoy the best weather.',
//   },
//   {
//     image: '/images/Jaipur-Rajasthan.jpg',
//     name: 'Jaipur, Rajasthan',
//     description: 'Known as the Pink City, Jaipur is famous for its distinct color of buildings and its vibrant culture',
//     tips: 'Explore the local markets for a taste of the local culture and cuisine.',
//   },
//   {
//     image: '/images/Kerala-Backwaters.jpg',
//     name: 'Kerala Backwaters',
//     description: 'A network of tranquil canals and lagoons, perfect for a peaceful getaway.',
//     tips: 'Stay in a houseboat for a unique experience.',
//   },
//   {
//     image: '/images/Darjeeling-West Bengal.jpg',
//     name: 'Darjeeling, West Bengal',
//     description:
//       'A beautiful hill station known for its tea gardens and the view of Kangchenjunga, the worlds third-highest mountain.',
//     tips: 'Take a ride on the Darjeeling Himalayan Railway, a UNESCO World Heritage site.',
//   },
// ];
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
