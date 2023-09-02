import profileImg from '../../../../assets/images/home/Ellipse 64.svg'
function RequestItem() {
  return (
    <div className='flex justify-between gap-2 py-2 '>
      <div className='flex-grow px-4'>
        <h4 className='text-end text-xs mb-1'>Lincoln</h4>
        <div className='font-inter font-bold text-lg  flex  justify-between' >
          <button >delete</button>
          <button className='ml-2  p-2 rounded-xl bg-[rgba(200,174,125,1)] '>Confirm</button>
        </div>
      </div>
      <img src={profileImg} alt='profile img' className='align-middle justify-self-center w-fit'/>
    </div>
  )
}

export default RequestItem