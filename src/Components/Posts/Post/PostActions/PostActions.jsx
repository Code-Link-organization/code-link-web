import { actions } from "./postActionsData"
import LikeButton from './LikeButton'

function PostActions({post,usersLikesThisPost}) {

  return (
    <div className='flex justify-between text-base    py-3'>
      <LikeButton post={post} usersLikesThisPost={usersLikesThisPost}/>
   {actions.map((action,index)=><button className='flex flex-row-reverse items-center gap-2' key={index}><img className="w-4" src={action.icon}/><span>{action.text}</span></button>
   )}
    </div>
  )
}

export default PostActions