/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import likeIcon from '../../../../assets/images/posts/icons8-like-24 2.svg';
import useFetch from '../../../../CustomHooks/useFetch';
import { postOptions } from '../../../../options';
import { fetchLikesForPost } from '../../../../store/posts/fetchLikesForPost';
import { fetchPosts } from '../../../../store/posts/fetchPosts';

const user_id = 2;

function LikeButton({ post, usersLikesThisPost }) {
  const { fetchApi: likePost } = useFetch(`http://localhost:8000/api/posts/${post.id}/like`, postOptions);
  const [userLikedPost, setUserLikedPost] = useState(false);
  const dispatch=useDispatch()



  useEffect(() => {
    const condition =  usersLikesThisPost.some((like) => like.user_id === user_id);
    setUserLikedPost(condition);  }, [usersLikesThisPost]);

  const likePostHandler = async () => {
    const resData = await likePost();
    if (resData.ok) {
      setUserLikedPost(!userLikedPost);
    dispatch(fetchPosts())
    dispatch(fetchLikesForPost(resData.data.post_id))

    }
  };

  return (
    <button onClick={likePostHandler} className='flex flex-row-reverse items-center gap-2'>
      <img src={likeIcon} alt='like icon' className={`${userLikedPost ? 'invert-[0.5]' : ''} w-5`} />
      Like
    </button>
  );
}

export default LikeButton;