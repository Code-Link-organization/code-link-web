/* eslint-disable react/prop-types */
import { actions } from "./postActionsData"
import LikeButton from './LikeButton'

function PostActions({post,usersLikesThisPost,openCommentsList}) {

  return (
    <div className='flex justify-between text-base font-medium    py-4'>
      <LikeButton post={post} usersLikesThisPost={usersLikesThisPost}/>
  <button className='flex flex-row-reverse items-center gap-3' onClick={openCommentsList} ><img className="w-5" src={actions[0].icon}/><span>{actions[0].text}</span></button>
    </div>
  )
}

export default PostActions