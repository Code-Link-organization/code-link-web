/* eslint-disable react/prop-types */
import { api } from "../../../api"
import useFetch from "../../../CustomHooks/useFetch"
import { postOptions } from "../../../options";
import { useCenterContent } from "../CenterContent/CenterContentContext";
import ReactLoading from 'react-loading';


function JoinTeam({team}) {
    const {fetchApi:joinTeam,loading}=useFetch(`${api}/join-requests/join/${team.id}`,postOptions)
    const {  setCenterContent } = useCenterContent();
    const joinHandler=async()=>{
        const res=await joinTeam() 
        console.log(res)
        setCenterContent('waitscreen')
    }
  return (
    <>
    {!loading? <button onClick={()=>joinHandler()} className='bg-[rgba(217,198,164,1)] rounded-[10px] text-[12px] font-medium w-[60px] h-[30px]  element-center shadow-none' >Join</button>:
     <div className="element-center center-element w-[60px]">             <ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={20}
          width={20}
        /></div>
    }
      
    </>
    )
}

export default JoinTeam