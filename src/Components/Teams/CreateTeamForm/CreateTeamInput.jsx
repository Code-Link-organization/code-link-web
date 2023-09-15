import { useState } from "react"

function CreateTeamInput({placeholder,value,setTeamForm,teamForm}) {
  const changeHandler =(e)=>{
    setTeamForm({...teamForm,[value]:e.target.value})
  }

  return (
    <input type='text'  placeholder={placeholder} onChange={changeHandler} value={teamForm[value]} className={`w-[350px] max-w-full pl-8  rounded-2xl mb-5
     shadow-[0px_6px_20px_0px_rgba(218,_218,_218,_0.3)] outline-none focu transition-all duration-300 bg-white text-sm h-[60px] `}/>
  )
}

export default CreateTeamInput