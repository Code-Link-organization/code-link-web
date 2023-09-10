/* eslint-disable react/prop-types */

function CommentListItem({img,userName,content,date}) {
  return (
    <div className="flex justify-between">
    <div className="flex gap-6 items-center">
        <img src={img} alt="profile image"/>
    <div>
      <p className="text-[15px] font-semibold">{userName}</p>
      <p className="text-sm">{content}</p>
    </div>    
    </div>

          <p className="text-[13px] font-medium">{date}</p>
    </div>
  )
}

export default CommentListItem