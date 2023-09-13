import SearchField from "../../Components/GlobalComponents/SearchField"
import UserComponent from "../../Components/GlobalComponents/UserComponent"

function Community() {
  return (
    <div className='px-6 py-5 w-1/4 overflow-y-auto custom-scrollbar h-full'>
        <SearchField/>
      <div>
        <UserComponent/>
        </div>  

    </div>
  )
}

export default Community