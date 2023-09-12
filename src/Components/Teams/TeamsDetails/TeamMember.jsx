import deleteIcon from '../../../assets/images/teams/Group 7.svg'
function TeamMember({role,image,name}) {
  return (
    <div className='bg-white border-[1px] border-[rgba(237,237,237,1)] w-[141px] min-h-[141px] 
     center-element element-center rounded-2xl mb-8 flex-col gap-2 relative'>
        <img src={image} alt={image} />
        <p className='text-[13px] font-semibold   text-center'>{name}</p>
        <p className='text-[10px]   text-center'>{role}</p>
        <button className='absolute right-2 top-2'><img src={deleteIcon}/></button>
    </div>
  )
}

export default TeamMember
