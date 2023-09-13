import SearchField from '../../../Components/GlobalComponents/SearchField'
import ResourcesLIistItem from './ResourcesLIistItem'
function ResourcesList({currentResource}) {

  return (
    <div className='px-6 py-5 w-1/4 overflow-y-auto custom-scrollbar h-full'>
     <SearchField/>
    <div className='flex flex-wrap justify-between  mx-auto  pt-7  pt-9'>
      <ResourcesLIistItem currentResource={currentResource}/>
      <ResourcesLIistItem currentResource={currentResource}/>
      <ResourcesLIistItem currentResource={currentResource}/>

    </div>
    </div>

  )
}

export default ResourcesList