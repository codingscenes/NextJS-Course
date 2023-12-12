export default function NotFound() {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='fancy'>Product not found!</h1>
          <p>Sorry, the page you are looking for cannot be found.</p>
        </div>
      </div>
    </div>
  );
}

// Note: add me later while dealing product that does not exists and handling that error. while showing the priority of error page over not found when error page is closer than not found.
