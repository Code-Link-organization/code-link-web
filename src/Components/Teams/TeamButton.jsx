
function TeamButton({click,text}) {
  return (
<button onClick={()=>click()} className='bg-[rgba(217,198,164,1)]  btn-hover rounded-[10px] text-[12px]
 font-medium w-[60px] h-[30px]  element-center shadow-none' >{text}</button>  )
}

export default TeamButton