import  { useState } from 'react';
import CommentsList from './CommentList'; // Import the CommentsList component
import CommentForm from './CommentForm'; // Import the CommentForm component
import { useEffect } from 'react';

function CommentSection({fetchedComments}) {
  const [comments, setComments] = useState(fetchedComments?fetchedComments:[]);
   
  useEffect(() => {
    if(fetchedComments){
      console.log(fetchedComments)
  setComments(fetchedComments)}
  }, [fetchedComments])
  

  const handleAddComment = (newComment) => {
    // Update the state with the new comment
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Comments</h2>
      {comments.lengh>0&&<CommentsList comments={comments} />}
      <CommentForm onAddComment={handleAddComment} />
    </div>
  );
}

export default CommentSection;