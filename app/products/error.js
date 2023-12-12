'use client'; //also catch error for client including server side rendering
export default function Error({ error }) {
  //actual error message is passed from the getServerSideProps function
  // and it is not exposed to the user by nextjs to avoid security issues
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='fancy'>An error occurred!</h1>
          <p>Failed to fetch products. Please check your internet connection and try again.</p>
        </div>
      </div>
    </div>
  );
}
