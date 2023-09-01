import active from '../../../assets/images/chat/icons8-dot-30 1.svg'

function ChatBoxHeader() {
  return (
        <header className=' flex justify-between items-center px-7 h-[91px]'>
            <div className='flex items-center gap-2'>
                <img src={active} alt='active icon'/>
                <h4 className='text-3xl font-inter'>Ryan</h4>
            </div>
                        <span className='w-14 h-14 text-bold text-xl element-center text-white  bg-primary rounded-full '>...</span>
        </header>
  )
}

export default ChatBoxHeader