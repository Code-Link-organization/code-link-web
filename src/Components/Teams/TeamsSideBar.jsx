import { Outlet } from "react-router-dom"

function TeamsSideBar() {
  return (
    <div className="w-1/4 min-h-[calc(100vh_-_99px)] border-l-[rgba(209,208,208,1)]  border-l-[1px] relative  overflow-y-auto custom-scrollbar">
   <div className=' pt-[32px] flex flex-wrap justify-between px-8   w-full'>
        <Outlet/>

    </div>

    </div>
  )
}

export default TeamsSideBar