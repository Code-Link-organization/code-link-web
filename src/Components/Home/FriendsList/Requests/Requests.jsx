import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { api } from "../../../../api";
import useFetch from "../../../../CustomHooks/useFetch";
import { getOptions } from "../../../../options";
import RequestItem from "./RequestItem";
import ReactLoading from 'react-loading';

let init=false
function Requests() {
  const {fetchApi:getJoinRequest,loading}=useFetch(`${api}/invite-requests`,getOptions,true)
  const user=useSelector(state=>state.auth.user)
  const [requests,setRequest]=useState([])
  useEffect(()=>{
   const fetchData=async()=>{
    const resData= await getJoinRequest()
    if(resData.ok && user && !init){
      setRequest(resData.data.invite_requests)
      init=true
    }
   }
   fetchData()
  },[user])
  return (
    <div className="border-b-4 border-b-white">
      <div className="flex justify-between items-center pl-6 pt-9 ">
        <h3 className="font-bold text-xl text-mulish text-customblack">Invite to teams requests</h3>
      </div>
      {loading?<div className="h-20 py-10 center-element"><ReactLoading className="mx-auto" type={'spin'} color={"#D9C6A4"} height={30} width={30} /></div>:<div className="flex flex-col gap-3 mt-10">
        { requests.length>0?
        requests.map((request, index) => (
          <div
            key={index}
            className={`${
              index % 2 == 0 ? 'bg-white' : ''
            } p-4 rounded-md`}
          >
            <RequestItem request={request}  />

          </div>
        )):<p className="pt-3 py-6 text-center">There are no invitations to join teams</p>}
      </div>}
    </div>
  );
}

export default Requests;