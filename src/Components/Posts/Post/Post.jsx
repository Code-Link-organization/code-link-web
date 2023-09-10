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
import { fetchCommentForPost } from '../../../store/posts/fetchCommentsForPost';

function Post({ post }) {
  const dispatch=useDispatch()
  const [openLikesList,setOpenLikesList]=useState(false)
  const likesDataForPost=useSelector(state=>state.posts).postsLikesData
  const commentsDataForPost=useSelector(state=>state.posts).postsCommentsData

  const  existedPost=likesDataForPost.find(postData=>{
    return post.id==postData.postid})
    const  commentsofPost=commentsDataForPost.find(postData=>{
    return post.id==postData.postid})  

  useEffect(()=>{
    dispatch(fetchLikesForPost(post.id))
    dispatch(fetchCommentForPost(post.id))
  },[])

  console.log(commentsofPost,commentsDataForPost)

  return (
    <div className='py-[30px] border-t-[6px] relative border-t-[rgba(235,235,235,1)] font-medium'>
      <PostHeader post={post} />
      <div >
      <PostContent post={post} />
      <PostDetails post={post} openLikesList={setOpenLikesList}  />
      <PostActions post={post} usersLikesThisPost={existedPost?existedPost.likesData:[]} />
      </div>
      {openLikesList &&<LikesList datalikes={likesDataForPost} closeLikesList={()=>setOpenLikesList(false)}/>}
     {commentsofPost&& <CommentList comments={commentsofPost.commentsData} id={post.id}/>}

    </div>
  );
}

export default Post;
