import profileImg from '../../../assets/images/posts/Ellipse 49.svg';
import { transferDate } from '../../../Functions/transferDate';
import EditPost from './EditPost';

function PostHeader({ post: { user_name, created_at } }) {
  return (
    <header className='flex items-center px-10 py-4 text-inter flex justify-between items-center'>
      <div className='space-x-5 flex items-center'>
        <img src={profileImg} alt='profile img' />
        <p>{user_name}</p>
      </div>
      <p>{transferDate(created_at)}</p>
      <EditPost post={post} />
    </header>
  );
}

export default PostHeader;