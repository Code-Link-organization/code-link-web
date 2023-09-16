/* eslint-disable react/prop-types */
<<<<<<< HEAD
import { imgLink } from '../../api'
import noImage from '../../assets/images/profile/no-profile-picture.svg'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
function Indivdual({name,img,followed,track,id}) {
  const navigate=useNavigate()
  const user=useSelector(state=>state.auth).user
  if(user.id==id) return ;
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-6'>
            <img src={img?`${imgLink}/${img}`:noImage} alt="profile img" className='w-14' />
            <div>
                <h3 className='text-base font-semibold cursor-pointer' onClick={()=>navigate(`/visit/${id}`)}>{name}</h3>
                <p className='text-xs font-semibold'>{track}</p>

            </div>
=======
import { imgLink } from '../../api';
import noImage from '../../assets/images/profile/no-profile-picture.svg';

function Individual({ name, img, followed, track }) {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-6'>
        <img
          src={img ? `${imgLink}/${img}` : noImage}
          alt='Profile Image'
          className='w-14'
        />
        <div>
          <h3 className='text-base font-semibold'>{name}</h3>
          <p className='text-xs font-semibold'>{track}</p>
>>>>>>> 93208e360a5a2ee3c21bdc27c1653278e4674cae
        </div>
      </div>
      <button
        className={`${
          followed
            ? 'bg-white !text-primary border-[1px] border-primary border-solid'
            : 'bg-primary text-white'
        } py-2 px-5 w-fit rounded-[10px] h-fit`}
      >
        {followed ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

export default Individual;
