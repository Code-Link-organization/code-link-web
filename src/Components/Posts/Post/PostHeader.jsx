import profileImg from '../../../assets/images/posts/Ellipse 49.svg';
import { transferDate } from '../../../Functions/transferDate';
import EditPost from './EditPost/EditPost';

function PostHeader({ post }) {
  const { user_name, created_at } = post;

  return (
    <header className='flex items-center py-4 text-inter justify-between'>
      <div className='space-x-5 flex items-center'>
        <img src={profileImg} alt='profile img' className='w-14' />
         <div className='flex flex-col'>
          <p className='text-base font-medium font-inter'>{user_name}</p>
          <p className='text-xs font-normal'>Front End developer</p>
         </div>
      </div>
      <div className='flex gap-4'>
        <p className='text-sm font-medium'>{transferDate(created_at)}</p>
        <EditPost post={post} />
      </div>
    </header>
  );
}

export default PostHeader;