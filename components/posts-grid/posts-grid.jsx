import PostItem from './post-item';

export default function PostsGrid({ posts }) {
  return (
    <div className='row mx-auto justify-content-center'>
      <div className='col-md-8'>
        {posts.map((post, index) => (
          <PostItem title={post.title} content={post.content} image={post.image} key={index} />
        ))}
      </div>
    </div>
  );
}
