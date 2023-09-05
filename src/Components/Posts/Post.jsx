import profileImg from '../../assets/images/posts/Ellipse 49.svg'
import postImg from '../../assets/images/posts/image 77.svg'
import PostActions from './PostActions'
import commentIcon from '../../assets/images/posts/image 79.svg'
import likeIcon from '../../assets/images/posts/icons8-like-24 2.svg'

function Post({post}) {
  return (
    <div className='bg-white mb-1'>
        <header className='flex items-center px-10 py-4 text-inter  ' >
            <div className='space-x-5 flex items-center'>
                            <img src={profileImg} alt='profile img'/>
                            <p>Henry Owen</p>
            </div>
            <p className='ml-auto'>1h</p>
            
        </header>
        <img src={postImg} alt='post image' className='w-full' />
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