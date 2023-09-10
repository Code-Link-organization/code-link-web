
function LikeListItem({name,img,track,followed}) {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center gap-6'>
            <img src={img} alt="profile img" className='w-14' />
            <div>
                <h3 className='text-base font-semibold'>{name}</h3>
                <p className='text-xs'>{track}</p>
            </div>
        </div>
        <button className={`${followed?'bg-white !text-primary border-[1px] border-primary border-solid':'bg-primary text-white'} py-2 px-5 w-fit  rounded-[10px] h-fit`}>Following</button>
    </div> 
  )
}

export default LikeListItem