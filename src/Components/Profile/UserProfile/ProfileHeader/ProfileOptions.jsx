import chat from '../../../../assets/images/profile/message.svg'
import share from '../../../../assets/images/profile/share.svg'

function ProfileOptions() {
    const style='bg-[rgba(251,249,247,1)] border-[1px] element-center w-11 rounded-full h-11 border-primary hover:bg-primary transition-all duration-300'
  return (
    <div className='flex items-center gap-4 justify-center'>
        <button  className={style}><img src={chat} alt='chat'/></button>
        <button className='btn rounded-full text-base font-medium'>Follow</button>         
        <button className={style}><img src={share} alt='share'/></button>
    </div>
  )
}

export default ProfileOptions