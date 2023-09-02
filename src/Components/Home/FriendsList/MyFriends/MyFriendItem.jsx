import profileImg from '../../../../assets/images/home/Ellipse 64.svg'
import active from '../../../../assets/images/home/icons8-dot-30 15.svg'

function MyFriendItem() {
  return (
    <div className='mb-4  flex items-end justify-end'>
        <h4>Mateo Lincoln</h4>
        <div className='relative ml-2'>
            <img src={profileImg} alt='profile img'/>
            <img src={active} className='absolute bottom-0 left-0'/>
        </div>
    </div>
  )
}

export default MyFriendItem