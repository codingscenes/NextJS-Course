import Image from 'next/image';

export default function PostItem({ place, thoughts, photos, tips }) {
  return (
    <div className='container'>
      <div className='card mb-4 bg-dark'>
        <div className='card-body'>
          <h4 className='card-title'>Thoughts and Experiences: {place}</h4>
          <p className='card-text'>{thoughts}</p>
        </div>

        <div className='card-body'>
          <h4 className='card-title'>Photos:</h4>
          <div className='row'>
            {photos.map((photo, index) => (
              <div className='col-md-4' key={index}>
                <Image fill className='card-img-top mb-4' src={photo} alt={`Photo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className='card-body'>
          <h4 className='card-title'>Tips and Advice:</h4>
          <p className='card-text'>{tips}</p>
        </div>
      </div>
    </div>
  );
}
