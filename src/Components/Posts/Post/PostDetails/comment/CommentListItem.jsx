/* eslint-disable react/prop-types */
import profileimg from '../../../../../assets/images/posts/comments/Ellipse 27.svg'
import { transferDate } from '../../../../../Functions/transferDate'
function CommentListItem({img,userName,content,date}) {
  return (
    <div className="flex justify-between  items-center">
    <div className="flex gap-6 items-center">
        <img src={profileimg} alt="profile image"/>
    <div>
      <p className="text-[15px] font-semibold">{userName}</p>
      <p className="text-sm">{content}</p>
    </div>    
    </div>

          <p className="text-[13px] font-medium">{transferDate(date)}</p>
    </div>
  )
}

export default CommentListItem