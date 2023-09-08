import { actions } from "./postActionsData"
import LikeButton from './LikeButton'

function PostActions({post,usersLikesThisPost}) {

  return (
    <div className='flex justify-between border-y-[1px] border-y-primary border-opacity-30 p-4'>
      <LikeButton post={post} usersLikesThisPost={usersLikesThisPost}/>
   {actions.map((action,index)=><button className='flex space-x-3' key={index}><img src={action.icon}/><span>{action.text}</span></button>
   )}
    </div>
  )
}

export default PostActions