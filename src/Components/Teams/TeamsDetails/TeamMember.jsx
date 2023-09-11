import deleteIcon from '../../../assets/images/teams/Group 14.svg';

function TeamMember({role,image}) {
  return (
    <div className='bg-white border-[1px] border-[rgba(217,198,164,1)] w-[141px] h-[141px] 
     center-element element-center rounded-2xl mb-8 flex-col gap-1 relative'>
        <img src={image} alt={image} />
        <p className='text-sm  font-mulish text-center'>{role}</p>
        <button className='absolute right-2 top-2'><img src={deleteIcon}/></button>
    </div>
  )
}

export default TeamMember