/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
function TrackItem({path,imgPath,click}) {
  return (
            <button onClick={()=>click(`${path}`)}  className='shadow-[0px_6px_20px_0px_rgba(218,218,218,0.3)] bg-white px-8 py-5 rounded-2xl  element-center flex-col w-[150px] h-[150px] mb-9 justify-between hover:scale-[0.9] transition-all duration-200 hover:bg-opacity-70  '>
          <img src={imgPath} alt={`Image`} />
          <p className='text-sm text-center font-semibold' >{path}</p>
        </button>
  )
}

export default TrackItem