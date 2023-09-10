import Tracks from './Tracks'
import LikeListItem from '../Posts/Post/PostDetails/LikeListItem'
import { getFriendsFakeData } from '../../Functions/getFriendsFakeData'
import { useState } from 'react'

function Friends() {
  const [currentTrack,setCurrentTrack]=useState(null)
  const fakeData=getFriendsFakeData(10)
  return (
   <>
     {!currentTrack  &&<Tracks setTrack={setCurrentTrack}/>}
    {currentTrack &&<div className='flex flex-col gap-4 w-full py-8'>
                    {fakeData.map(({userName,userImg,track,followed},index)=> <LikeListItem key={index} name={userName}
               img={userImg} track={track} followed={followed}/>)}
    </div>}
    </>
  )
}

export default Friends