/* eslint-disable react/prop-types */
import closeImg from '../../../../../assets/images/home/icons8-close-50 5.svg'
import LikeListItem from './LikeListItem'
// eslint-disable-next-line no-unused-vars
function LikesList({datalikes, closeLikesList}) {
  return (
    <div className="absolute top-[35px] w-full h-[calc(100%_-_50px)] overflow-hidden shadow-lg scroll-y  overflow-y-auto custom-scrollbar rounded-lg  bg-[rgba(252,250,248,1)]">
        <div className='border-b-[1.5px] border-b-solid border-b-[rgba(227,227,227,1)]'>
        <div className='py-5 ml-auto flex justify-between items-center w-1/2 pr-7 '>
            <h2 className='text-xl font-semibold text-center'>Likes</h2>
            <button onClick={closeLikesList}><img src={closeImg}/></button>
        </div>
        </div>

        <div className='p-6 flex flex-col gap-6'>
                    {datalikes &&datalikes[0].likesData.map((user)=> <LikeListItem key={user.user_id} id={user.user_id} name={user.user_name}
               img={user.user_imageUrl} track={'frontend'} followed={true}/>)}

        </div>
    </div>
  )
}

export default LikesList