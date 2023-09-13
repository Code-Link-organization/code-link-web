/* eslint-disable react/prop-types */
import SearchField from "../../Components/GlobalComponents/SearchField"
import UserComponent from "../../Components/GlobalComponents/UserComponent"

function Community({users}) {
  return (
    <div className='px-6 py-5 w-1/4 overflow-y-auto custom-scrollbar h-full'>
        <SearchField/>
      <div className="mt-8 flex justify-between justify-center flex-wrap">
        {
            users.map(user=><UserComponent user={user} key={user.id}/>)
        }

        </div>  

    </div>
  )
}

export default Community