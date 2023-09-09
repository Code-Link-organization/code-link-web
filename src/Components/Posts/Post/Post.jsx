import  { useEffect, useState } from 'react';
import PostActions from '../Post/PostActions/PostActions';
import PostContent from './PostContent';
import PostDetails from './PostDetails';
import PostHeader from './PostHeader';
import useFetch from '../../../CustomHooks/useFetch'; // Import useFetch
import { getOptions } from '../../../options'; // Import getOptions
import CommentSection from './PostActions/comment/CommentSection';

function Post({ post }) {
  const [usersLikesThisPost, setUsersLikesThisPost] = useState([]);
  const [usersCommentsOnPost, setUsersCommentsOnPost] = useState([]);

  const { fetchApi: getLikesData } = useFetch(`http://localhost:8000/api/posts/1/comments/likes`, getOptions);
  const { fetchApi: getCommentsData } = useFetch(`http://localhost:8000/api/posts/1/comments`, getOptions);


      const fetchComments = async () => {
      try {
        const resData = await getCommentsData();
        console.log(resData)
        if (resData.ok) {
          setUsersCommentsOnPost(resData.data.comments);
        }

      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
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
    fetchComments();
  }, []);

  return (
    <div className='py-[30px] border-t-[6px] border-t-[rgba(235,235,235,1)] font-medium'>
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostDetails post={post} />
      <PostActions post={post} usersLikesThisPost={usersLikesThisPost} />
     {/* {usersCommentsOnPost.length>0&& <CommentSection fetchedComments={usersCommentsOnPost}  /> } */}
    </div>
  );
}

export default Post;
