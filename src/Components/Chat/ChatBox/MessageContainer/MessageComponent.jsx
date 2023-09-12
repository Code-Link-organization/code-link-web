
function MessageComponent({img,text,time,user}) {
  return (
    <div className={`flex flex-col gap-1 w-fit ${!user?'':'ml-auto'} my-2`}>
        <p className={` ${!user?'!bg-white  ml-12':'bg-primary mr-12'} px-3 bg-opacity-30 py-2 w-fit rounded-lg text-base`}>{text}</p>
        <div className={`flex flex-col gap-2 w-12 justify-end ${!user?'':'ml-auto'}`}>
      <img src={img} alt='profile img' className={`w-full`}/>
      <p className="text-center text-xs font-bold ">{time}</p>
        </div>
    </div>
  )
}

export default MessageComponent