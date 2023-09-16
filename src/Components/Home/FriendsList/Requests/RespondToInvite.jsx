/* eslint-disable react/prop-types */

import { api } from "../../../../api"
import useFetch from "../../../../CustomHooks/useFetch"
import ReactLoading from 'react-loading';
import { postOptions } from "../../../../options";


function RespondToInvite({response,request}) {
    const {fetchApi:respondToJoin,loading}=useFetch(`${api}/join-requests/${response}-join/${request.id}`,postOptions)

    const clickHandler=async()=>{
        console.log(request.id)
        const resData=await respondToJoin()
        if(resData.ok){
            console.log(resData)
        }
    }
    const style=' py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 border-2 border-solid'
  return (
    <div className="flex">
        {!loading?<button onClick={clickHandler} className={response=='accept'?`bg-primary mr-[10px] text-white border-transparent ${style}
         hover:border-primary hover:bg-white hover:text-primary `
        :`bg-white text-primary border-primary ${style}  hover:bg-primary
         hover:text-white `}>{response=='accept'?'Accept':'Reject'}</button>:
                 <div className="element-center center-element mx-auto w-[60px]">
          <ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={40}
          width={40}
        /></div>

        }
         
    </div>
  )
}

export default RespondToInvite