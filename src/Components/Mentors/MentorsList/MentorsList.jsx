/* eslint-disable react/prop-types */
import { useState } from "react"
import { useEffect } from "react"
import { getFakeMentors } from "../../../Functions/getFakeMentors"
import SearchField from "../../GlobalComponents/SearchField"
import MentorsListItem from "./MentorsListItem"

function MentorsList({setSelectedChat}) {
  const [mentors,setMentors]=useState([])
  useEffect(()=>{
    const settedMentors=getFakeMentors(10)
    setMentors(settedMentors)
  },[])
  return (
  <div className="w-1/2 border-[1px] border-solid border-[rgba(209,208,208,1)] shadow-[1px_1px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="w-full px-12 pt-5 overflow-y-auto h-[calc(100vh_-_99px)] custom-scrollbar pb-4  ">
        <div className="px-4 mb-10">
                    <SearchField/>

        </div>
        <div className=" flex flex-wrap gap-10 ">
     {
      mentors.map(mentor=><MentorsListItem key={mentor.mentorId} mentor={mentor} setSelectedChat={setSelectedChat}/>)
     }

        </div>
    </div>
  </div>
  )
}

export default MentorsList