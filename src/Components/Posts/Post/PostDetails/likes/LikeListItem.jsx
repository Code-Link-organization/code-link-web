/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { imgLink } from '../../../../../api'
import noImage from '../../../../../assets/images/profile/no-profile-picture.svg'
function LikeListItem({name,img,followed,id}) {
  const user=useSelector(state=>state.auth).user
  const navigate=useNavigate()
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-6'>
            <img src={img?`${imgLink}/${img}`:noImage} alt="profile img" className='w-14' />
            <div>
                <h3 className='text-base font-semibold ' onClick={()=>navigate(`/visit/${user.id}`)}>{name}</h3>
            </div>
        </div>
        {id==user.id&&<button className={`${followed?'bg-white !text-primary border-[1px] border-primary border-solid':'bg-primary text-white'} py-2 px-5 w-fit  rounded-[10px] h-fit`}>Following</button>}
    </div> 
  )
}

export default LikeListItem