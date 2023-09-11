/* eslint-disable react/prop-types */

import ListHeader from '../ListHeader';
import CommentListItem from './CommentListItem';
import CreateCommentForm from './CreateCommentForm';

function CommentList({ closeCommentsList, comments, id }) {
  return (
    <div className="flex flex-col absolute top-[35px] w-full h-[calc(100%_-_50px)] overflow-hidden shadow-lg rounded-lg bg-[rgba(252,250,248,1)]">
      <ListHeader title="Comments" closeCommentsList={closeCommentsList} />
      <div className="py-7 flex gap-6 flex-col px-6 h-[calc(100%_-_50px_-_79px)] scroll-y overflow-y-auto custom-scrollbar">
        {comments.map((comment) => (
          <CommentListItem
            key={comment.id} // Add a unique key for each comment
            img={comment.user_imageUrl}
            userName={comment.user_name}
            content={comment.content}
            date={comment.created_at}
          />
        ))}
      </div>
      <CreateCommentForm id={id} />
    </div>
  );
}

export default CommentList;