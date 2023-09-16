import { imgLink } from '../../../../api'
import { transferDate } from '../../../../Functions/transferDate'
import RespondToInvite from './RespondToInvite'
function RequestItem({request}) {
  return (
    <div className='flex justify-between items-center py-2 '>
        <div className='flex gap-4'>
         <img src={`${imgLink}/${request.team.imageUrl}`} alt='profile img' className='align-middle justify-self-center w-14 h-14 rounded-full'/>
         <div>
          <h5 className='font-semibold text-sm mb-3'>you are invited to join {request.team.name}</h5>
          <p className='text-xs'>{transferDate(request.created_at)}</p>
         </div>
        </div>
                <RespondToInvite request={request} response='accept'/>
                <RespondToInvite request={request} response='reject'/>


    </div>
  )
}

export default RequestItem