/* eslint-disable react/prop-types */
import closeImg from '../../../../assets/images/home/icons8-close-50 5.svg';

function ListHeader({title,closeCommentsList}) {
  return (
      <div className='border-b-[1.5px] border-b-solid border-b-[rgba(227,227,227,1)]'>
        <div className='py-5 ml-auto flex justify-between items-center w-1/2 pr-7'>
          <h2 className='text-xl font-semibold text-center -translate-x-1/2'>{title}</h2>
          <button onClick={closeCommentsList}><img src={closeImg} alt="Close" /></button>
        </div>
      </div>
    )
}

export default ListHeader