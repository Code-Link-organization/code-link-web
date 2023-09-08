import profileImg from '../../../assets/images/posts/Ellipse 49.svg';
import { transferDate } from '../../../Functions/transferDate';
import EditPost from './EditPost/EditPost';

function PostHeader({ post }) {
  const { user_name, created_at } = post;

  return (
    <header className='flex items-center px-10 py-4 text-inter justify-between'>
      <div className='space-x-5 flex items-center'>
        <img src={profileImg} alt='profile img' />
        <p>{user_name}</p>
      </div>
      <div className='flex gap-10'>
        <p>{transferDate(created_at)}</p>
        <EditPost post={post} />
      </div>
    </header>
  );
}

export default PostHeader;