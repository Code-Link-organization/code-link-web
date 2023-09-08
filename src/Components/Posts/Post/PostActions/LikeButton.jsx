import { useState } from 'react';
import { useEffect } from 'react';
import likeIcon  from '../../../../assets/images/posts/icons8-like-24 2.svg'
import useFetch from '../../../../CustomHooks/useFetch';
import {  postOptions } from '../../../../options';

const user_id=2;
function LikeButton({post,usersLikesThisPost}) {
  const { fetchApi: likePost } = useFetch(`http://localhost:8000/api/posts/${post.id}/like`, postOptions);
  const [userLikedPost,setUserLikedPost]=useState(false)
  useEffect(() => {
     const condition = usersLikesThisPost.some((like) => like.user_id === user_id)
     console.log(condition)
    setUserLikedPost(condition)
  },[])

 const likePostHandler=async()=>{
   const resData=await likePost()
   if(resData.ok){
    setUserLikedPost(!userLikedPost)
   }
  }
  return (
    <button onClick={likePostHandler} className='flex'  ><img src={likeIcon} alt='like icon' className={userLikedPost?'invert-[0.5]':''}/>Like</button>
  )
}

export default LikeButton