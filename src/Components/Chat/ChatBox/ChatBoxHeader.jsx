import active from '../../../assets/images/chat/icons8-dot-30 1.svg'
import phone from '../../../assets/images/chat/icons8-phone-96 3.svg'
import video from '../../../assets/images/chat/Mask group (1).svg'
import profileimg from '../../../assets/images/menImages/Ellipse 25 (2).svg'

function ChatBoxHeader({selectedChat}) {
  const optionsimages=[phone,video]
  return (
        <header className=' flex justify-between items-center px-7 h-[100px] shadow-[0p_ 4px_4px_0px_rgba(0,0,0,0.1)] relative z-10'>
            <div className='flex items-center gap-2'>
              <div className='w-[38px] h-[38px] bg-white relative  element-center'>
                <img src={selectedChat.mentorImage} className='w-full rounded-full'  alt='profile image' />
                <img src={active} alt='active' className='absolute -bottom-2 right-0'/>
              </div>
                <h4 className='text-base font-inter'>{selectedChat.mentorName}</h4>
            </div>
            <div className='flex gap-3'>
             {optionsimages.map((icon,index)=><button className='w-7 h-7 bg-primary element-center rounded-full ' key={index}><img src={icon}/></button>)}  
            </div>
        </header>
  )
}

export default ChatBoxHeader