import profileImg from '../../../assets/images/posts/Ellipse 49.svg'
import PostActions from './PostActions'
import commentIcon from '../../../assets/images/posts/image 79.svg'
import likeIcon from '../../../assets/images/posts/icons8-like-24 2.svg'
import { transferDate } from '../../../Functions/transferDate'
import EditPost from './EditPost'
function Post({post}) {
  return (
    <div className='bg-white mb-1'>
        <header className='flex items-center px-10 py-4 text-inter flex justify-between items-center ' >
            <div className='space-x-5 flex items-center'>
                            <img src={profileImg} alt='profile img'/>
                            <p>{post['user_name']}</p>
            </div>
            <p>{transferDate(post['created_at'])}</p>
            <EditPost   post={post}/>
            
        </header>
        {post['image_path'] &&<img src={`http://localhost:8000/${post['image_path']}`} alt='post image' className='w-full' />}
        <p className='text-xl text-inter p-4 '>{post.content}</p>
    <div className='flex justify-between px-4 py-4'>
        <p className='flex items-center gap-3'>300<img src={likeIcon}/></p>
                <p className='flex items-center gap-3'>300<img src={commentIcon}/></p>

    </div>
     <PostActions/>
    </div>
  )
}

export default Post