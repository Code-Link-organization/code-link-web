/* eslint-disable react/prop-types */
import { getFriendsFakeData } from '../../../../../Functions/getFriendsFakeData'
import closeImg from '../../../../../assets/images/home/icons8-close-50 5.svg'
import LikeListItem from './LikeListItem'
// eslint-disable-next-line no-unused-vars
function LikesList({datalikes, closeLikesList}) {
  const fakeData=getFriendsFakeData(10)
  return (
    <div className="absolute top-[35px] w-full h-[calc(100%_-_50px)] overflow-hidden shadow-lg scroll-y  overflow-y-auto custom-scrollbar rounded-lg  bg-[rgba(252,250,248,1)]">
        <div className='border-b-[1.5px] border-b-solid border-b-[rgba(227,227,227,1)]'>
        <div className='py-5 ml-auto flex justify-between items-center w-1/2 pr-7 '>
            <h2 className='text-xl font-semibold text-center'>Likes</h2>
            <button onClick={closeLikesList}><img src={closeImg}/></button>
        </div>
        </div>

        <div className='p-6 flex flex-col gap-6'>
                    {fakeData.map(({userName,userImg,track,followed},index)=> <LikeListItem key={index} name={userName}
               img={userImg} track={track} followed={followed}/>)}

        </div>
    </div>
  )
}

export default LikesList