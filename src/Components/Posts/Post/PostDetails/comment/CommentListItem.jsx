/* eslint-disable react/prop-types */
import { transferDate } from '../../../../../Functions/transferDate';
import noImage from '../../../../../assets/images/profile/no-profile-picture.svg'
import { imgLink } from '../../../../../api';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
function CommentListItem({ img, userName, content, date , id}) {
  const navigate=useNavigate()
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-6 items-center">
        <img src={img?`${imgLink}/${img}`:noImage} alt="profile image" className='w-14 h-14 rounded-full' />
        <div>
          <p className="text-[15px] font-semibold cursor-pointer" onClick={()=>navigate(`/visit/${id}`)}>{userName}</p>
          <p className="text-sm">{content}</p>
        </div>
      </div>
      <p className="text-[13px] font-medium">{transferDate(date)}</p>
    </div>
  );
}

export default CommentListItem;
