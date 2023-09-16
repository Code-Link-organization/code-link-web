<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
import { imgLink } from '../../../../api'
import { transferDate } from '../../../../Functions/transferDate'
import RespondToInvite from './RespondToInvite'
function RequestItem({request}) {
  const navigate=useNavigate()
  return (
    <div className='flex justify-between items-center py-2 ' >
        <div className='flex gap-4'>
         <img src={`${imgLink}/${request.team.imageUrl}`} alt='profile img' className='align-middle cursor-pointer justify-self-center w-14 h-14 rounded-full'/>
         <div>
          <h5 className='font-semibold text-sm mb-3 cursor-pointer' onClick={()=>navigate(`/teams/${request.team.id}`)}>you are invited to join {request.team.name}</h5>
          <p className='text-xs'>{transferDate(request.created_at)}</p>
         </div>
=======
/* eslint-disable react/prop-types */
import { imgLink } from '../../../../api';
import { transferDate } from '../../../../Functions/transferDate';
import RespondToInvite from './RespondToInvite';

function RequestItem({ request }) {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex gap-4">
        <img
          src={`${imgLink}/${request.team.imageUrl}`}
          alt="Profile Image"
          className="align-middle justify-self-center w-14 h-14 rounded-full"
        />
        <div>
          <h5 className="font-semibold text-sm mb-3">
            You are invited to join {request.team.name}
          </h5>
          <p className="text-xs">{transferDate(request.created_at)}</p>
>>>>>>> 93208e360a5a2ee3c21bdc27c1653278e4674cae
        </div>
      </div>
      <RespondToInvite request={request} response="accept" />
      <RespondToInvite request={request} response="reject" />
    </div>
  );
}

export default RequestItem;
