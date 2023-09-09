import { actions } from "./postActionsData"
import LikeButton from './LikeButton'

function PostActions({post,usersLikesThisPost}) {

  return (
    <div className='flex justify-between text-base font-medium    py-4'>
      <LikeButton post={post} usersLikesThisPost={usersLikesThisPost}/>
   {actions.map((action,index)=><button className='flex flex-row-reverse items-center gap-3' key={index}><img className="w-5" src={action.icon}/><span>{action.text}</span></button>
   )}
    </div>
  )
}

export default PostActions