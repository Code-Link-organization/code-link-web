import commentIcon from '../../../assets/images/posts/image 79.svg'
import likeIcon from '../../../assets/images/posts/icons8-like-24 2.svg'
function PostDetails() {
  return (
       <div className='flex justify-between px-4 py-4'>
        <p className='flex items-center gap-3'>300<img src={likeIcon}/></p>
                <p className='flex items-center gap-3'>300<img src={commentIcon}/></p>

    </div>
  )
}

export default PostDetails