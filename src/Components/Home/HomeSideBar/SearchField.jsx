import searchIcon from '../../../assets/images/home/image 43 (1).svg'

function SearchField() {
  return (
      <div className="relative w-full bg-white  rounded-2xl  shadow-[0px_6px_20px_0px_rgba(218,218,218,0.3)] ">
      <input
        type="text"
        placeholder="Search..."
        className="  py-4 pl-10 pr-8  border w-full  rounded-2xl outline-none border-none focus:outline-none focus:ring focus:border-blue-500"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-2">
     <img src={searchIcon} />
      </div>
    </div>
  )
}

export default SearchField