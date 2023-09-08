import  { useEffect, useState } from 'react';
import PostActions from '../Post/PostActions/PostActions';
import PostContent from './PostContent';
import PostDetails from './PostDetails';
import PostHeader from './PostHeader';
import useFetch from '../../../CustomHooks/useFetch'; // Import useFetch
import { getOptions } from '../../../options'; // Import getOptions

function Post({ post }) {
  const [usersLikesThisPost, setUsersLikesThisPost] = useState([]);
  const { fetchApi: getLikesData } = useFetch(`http://localhost:8000/api/posts/${post.id}/likes`, getOptions);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const resData = await getLikesData();
        if (resData.ok) {
          setUsersLikesThisPost(resData.data.likeData);
        }
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    };

    fetchLikes();
  }, [ post.id]);

  return (
    <div className='bg-white mb-1'>
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostDetails post={post} />
      <PostActions post={post} usersLikesThisPost={usersLikesThisPost} />
    </div>
  );
}

export default Post;