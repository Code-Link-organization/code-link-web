import { Outlet } from "react-router-dom"

function TeamsSideBar() {
  return (
    <div className="w-1/4">
   <div className='px-[35px] pt-[32px] flex flex-wrap justify-between h-fit  w-full'>
        <Outlet/>

    </div>

    </div>
  )
}

export default TeamsSideBar