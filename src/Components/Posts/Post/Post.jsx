import  { useEffect, useState } from 'react';
import PostActions from '../Post/PostActions/PostActions';
import PostContent from './PostContent';
import PostDetails from './PostDetails';
import PostHeader from './PostHeader';
import useFetch from '../../../CustomHooks/useFetch'; // Import useFetch
import { getOptions } from '../../../options'; // Import getOptions
import CommentSection from './PostActions/comment/CommentSection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikesForPost } from '../../../store/posts/fetchLikesForPost';

function Post({ post }) {
  const dispatch=useDispatch()
  const likesDataForPost=useSelector(state=>state.posts).postsLikesData
  const  existedPost=likesDataForPost.find(postData=>{
    return post.id==postData.postid})
  useEffect(()=>{
    dispatch(fetchLikesForPost(post.id))
  },[])
  return (
    <div className='py-[30px] border-t-[6px] border-t-[rgba(235,235,235,1)] font-medium'>
      <PostHeader post={post} />
      <div >
      <PostContent post={post} />
      <PostDetails post={post}  />
      <PostActions post={post} usersLikesThisPost={existedPost?existedPost.likesData:[]} />
      </div>

     {/* {usersCommentsOnPost.length>0&& <CommentSection fetchedComments={usersCommentsOnPost}  /> } */}
    </div>
  );
}

export default Post;
