/* eslint-disable react/prop-types */

function Follower({userImg,userName}) {
  return (
    <div className="bg-white w-14  text-center">
        <img src={userImg} alt='follower image' className="w-14 h-14 m-0 !mr-0"/>
        <h6 className="text-[6px]">{userName}</h6>

    </div>
  )
}

export default Follower