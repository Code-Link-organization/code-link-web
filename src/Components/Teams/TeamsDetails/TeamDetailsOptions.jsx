import chatIcon from '../../../assets/images/teams/Layer_1 (1).svg'
import { useCenterContent } from '../CenterContent/CenterContentContext';


function TeamDetailsOptions({children}) {
  const { centerContent, setCenterContent } = useCenterContent();

  return (
   <>
             <div className='mb-1 flex flex-row-reverse mb-14 justify-between'>
        <button className=" w-[60px] h-[30px] bg-[rgba(217,198,164,1)] rounded-[10px] element-center text-xs">Edit</button>
        <button><img src={chatIcon} onClick={()=>setCenterContent('chat')} alt='chat Icon' /></button>
      </div>

      {children}
      <button className='ml-auto block'>
      </button></>
  )
}

export default TeamDetailsOptions