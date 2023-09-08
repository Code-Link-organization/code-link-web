import PostActions from './PostActions';
import PostContent from './PostContent';
import PostDetails from './PostDetails';
import PostHeader from './PostHeader';

function Post({ post }) {

  return (
    <div className='bg-white mb-1'>
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostDetails post={post}/>
      {/* <PostActions post={post} /> */}
    </div>
  );
}

export default Post;