/* eslint-disable react/prop-types */
function UserComponent({user}) {
  return (
    <div className="w-[141px] h-[141px] shadow-[0px_6px_20px_0px_rgba(218,218,218,0.3)]
     bg-white border-[rgba(235,235,235,1)] border-[1px] rounded-[17px] mb-2">
        <img src={user.userImg} className="mx-auto mt-5 mb-2 object-cover " />
        <h5 className="text-sm font-semibold text-center">{user.userName}</h5>
        <p className='text-[10px] text-center'>{user.track}</p>
     </div>
  )
}

export default UserComponent