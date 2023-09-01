/* eslint-disable react/prop-types */
import img from '../../assets/images/chat/Ellipse 36.svg'
import active from '../../assets/images/chat/icons8-dot-30 1.svg'
function ChatListItem({chatinfo}) {
  return (
    <div className='flex justify-between items-center px-2 '>
      <div className='flex gap-2 items-center'>
             <div className='relative'>
                            <img src={img} alt='profile img'/>
                           <img src={active} alt='active icon' className='absolute bottom-0 right-0'/>
             </div>
              <div>
                <h2 className='font-inter font-normal text-sm text-customblack mb-1'>{chatinfo.name}</h2>
                <p className='text-customgray text-base font-bold'>{chatinfo.lastMsg &&chatinfo.lastMsg.content}</p>
              </div>
      </div>
      <div>
        <p className='text-xs font-bold text-customblack mb-2'>{chatinfo.lastMsg && chatinfo.lastMsg.date}</p>
        <span className='bg-customblack text-xs h-4 w-4 rounded-full text-white element-center mx-auto'>{chatinfo.notSeen&&chatinfo.notSeen}</span>
      </div>
    </div>
  )
}

export default ChatListItem