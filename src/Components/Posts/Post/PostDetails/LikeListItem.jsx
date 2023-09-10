import profileImg from '../../../../assets/images/home/Ellipse 64.svg'

function LikeListItem() {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center gap-6'>
            <img src={profileImg} alt="profile img" className='w-14' />
            <div>
                <h3 className='text-base font-semibold'>Layla Damian</h3>
                <p className='text-xs'>Data Scientist</p>
            </div>
        </div>
        <button className='bg-primary py-2 px-5 w-fit text-white rounded-[10px] h-fit'>Following</button>
    </div> 
  )
}

export default LikeListItem