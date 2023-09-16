/* eslint-disable react/prop-types */
import { imgLink } from '../../api'
import noImage from '../../assets/images/profile/no-profile-picture.svg'
function Indivdual({name,img,followed,track}) {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-6'>
            <img src={img?`${imgLink}/${img}`:noImage} alt="profile img" className='w-14' />
            <div>
                <h3 className='text-base font-semibold'>{name}</h3>
                <p className='text-xs font-semibold'>{track}</p>

            </div>
        </div>
        <button className={`${followed?'bg-white !text-primary border-[1px] border-primary border-solid':'bg-primary text-white'} py-2 px-5 w-fit  rounded-[10px] h-fit`}>Following</button>
    </div> 
  )
}

export default Indivdual