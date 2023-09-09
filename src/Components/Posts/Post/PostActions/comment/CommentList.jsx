import profileImg from '../../../../../assets/images/posts/Ellipse 25 (1).svg'
function CommentsList({ comments }) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white p-4 rounded-md shadow-md">
          <div className="flex items-center">
            {comment.user_imageUrl ? 
              <img
                src={comment.user_imageUrl}
                alt={`User ${comment.user_id}`}
                className="w-8 h-8 rounded-full mr-2"
              />
            :<img src={profileImg}/>}
            <div>
              <p className="text-gray-700 font-semibold">{comment.user_name}</p>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;