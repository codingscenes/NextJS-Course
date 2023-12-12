import PostItem from './post-item';

export default function PostsGrid({ posts }) {
  return (
    <div className='row'>
      <div className='col'>
        {posts.map((post, index) => (
          <PostItem place={post.place} thoughts={post.thoughts} photos={post.photos} tips={post.tips} key={index} />
        ))}
      </div>
    </div>
  );
}
