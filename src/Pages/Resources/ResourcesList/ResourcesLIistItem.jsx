/* eslint-disable react/no-unknown-property */
import resourceimage from '../../../assets/images/resources/UI-UX differences-rafiki 1 (1).png'
function ResourcesLIistItem({currentResource}) {
  return (
    <a className='cursor-pointer bg-white border-[1px] border-solid border-[rgba(217,198,164,1)] w-[141px] h-[141px]
     flex items-center px-1 justify-center flex-col rounded-[17px]  text-center text-xs  shadow-[0px_6px_20px_0px_rgba(218,218,218,0.3)] transition-all
      duration-300 hover:bg-gray-100  gap-[1px] mb-3'href='#'>
      <img src={resourceimage} className='w-24' alt='resource image'/>
      <p className='underline underline-[rgba(217,198,164,1)]'>{currentResource}</p>
    </a>
  )
}

export default ResourcesLIistItem