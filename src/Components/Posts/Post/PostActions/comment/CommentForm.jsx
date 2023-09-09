import { toFormData } from '../../../../../Functions/toFormData';
import  { useState } from 'react';
import useFetch from '../../../../../CustomHooks/useFetch';
import PostActions from '../PostActions';
const user_id=2;

function CommentForm({ onAddComment }) {
  const {fetchApi:addComment}=useFetch('http://localhost:8000/api/posts/1/comments/create',PostActions)
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (commentText.trim() !== '') {
      const newComment={
       user_id:new Date(),
       content:commentText,
       user_name: "basharmetwali",
       user_imageUrl: null,         
      }

      const resData=await addComment(toFormData([{name:'content',value:commentText}]))
      console.log(resData)
      onAddComment(newComment);
      setCommentText('')}
    
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
    <textarea
      className="w-full h-16 min-h-16 max-h-96 p-2 border rounded-md resize-none"
      placeholder="Add a comment..."
      value={commentText}
      onChange={handleCommentChange}
    ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
