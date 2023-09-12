import closeIcon from '../../../assets/images/teams/icons8-close-50 1 (1).svg'
import chatIcon from '../../../assets/images/teams/Layer_1 (1).svg'
import { useCenterContent } from '../CenterContent/CenterContentContext';


function TeamDetailsOptions({children}) {
  const { centerContent, setCenterContent } = useCenterContent();

  return (
   <>
             <div className='mb-1 flex justify-between'>
        <button className="dark-btn w-[64px] h-[28px] element-center text-[19px] font-roboto">Edit</button>
        <button><img src={chatIcon} onClick={()=>setCenterContent('chat')} alt='chat Icon' /></button>
      </div>

      {children}
      <button className='ml-auto block'>
        <img src={closeIcon} alt='close Icon' />
      </button></>
  )
}

export default TeamDetailsOptions