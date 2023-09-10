/* eslint-disable react/prop-types */
import  { useEffect } from 'react';
import PostActions from '../Post/PostActions/PostActions';
import PostContent from './PostContent';
import PostDetails from './PostDetails/PostDetails';
import PostHeader from './PostHeader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikesForPost } from '../../../store/posts/fetchLikesForPost';
import LikesList from './PostDetails/likes/LikesList';
import { useState } from 'react';
import CommentList from './PostDetails/comment/CommentList';

function Post({ post }) {
  const dispatch=useDispatch()
  const [openLikesList,setOpenLikesList]=useState(false)
  const likesDataForPost=useSelector(state=>state.posts).postsLikesData
  const  existedPost=likesDataForPost.find(postData=>{
    return post.id==postData.postid})
  useEffect(()=>{
    dispatch(fetchLikesForPost(post.id))
  },[])
  return (
    <div className='py-[30px] border-t-[6px] relative border-t-[rgba(235,235,235,1)] font-medium'>
      <PostHeader post={post} />
      <div >
      <PostContent post={post} />
      <PostDetails post={post} openLikesList={setOpenLikesList}  />
      <PostActions post={post} usersLikesThisPost={existedPost?existedPost.likesData:[]} />
      </div>
      {openLikesList &&<LikesList datalikes={likesDataForPost} closeLikesList={()=>setOpenLikesList(false)}/>}
      <CommentList/>

    </div>
  );
}

export default Post;
