/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { imgLink } from '../../../api';
import noPicture from '../../../assets/images/profile/no-profile-picture.svg';
import { transferDate } from '../../../Functions/transferDate';
import EditPost from './EditPost/EditPost';

function PostHeader({ post }) {
  const { user_name, created_at,user_id } = post;
  console.log(post)
  const navigate=useNavigate()
  const userData=useSelector(state=>state.auth).user
  return (
    <header className='flex items-center py-4 text-inter justify-between'>
      <div className='space-x-5 flex items-center'>
        <img src={post.user_imageUrl?`${imgLink}/${post.user_imageUrl}`:noPicture} alt='profile img' className='w-14 h-14 rounded-full'  />
         <div className='flex flex-col'>
          <p className='text-base font-medium cursor-pointer' onClick={()=>navigate(`/visit/${user_id}`)}>{user_name}</p>
         </div>
      </div>
      <div className='flex gap-4'>
        <p className='text-sm font-medium'>{transferDate(created_at)}</p>
        {  user_id===userData.id &&
        <EditPost post={post} />
        }
      </div>
    </header>
  );
}

export default PostHeader;