/* eslint-disable react/prop-types */

import ListHeader from '../ListHeader';
import CommentListItem from './CommentListItem';
import image1 from '../../../../../assets/images/posts/comments/Ellipse 25 (2).svg'
import image2 from '../../../../../assets/images/posts/comments/Ellipse 27.svg'
import image3 from '../../../../../assets/images/posts/comments/Ellipse 29.svg'
import image4 from '../../../../../assets/images/posts/comments/Ellipse 31.svg'
import CreateCommentForm from './CreateCommentForm';


function CommentList({ closeCommentsList }) {
  const commentsData = [
    {
      img: image1,
      userName: 'Mateo Lincoln',
      content: 'WOW!',
      date: '9:42 PM'
    },
    {
      img: image2,
      userName: 'Peter Jack',
      content: 'Amazing!',
      date: '7:10 PM'
    },
    {
      img: image3,
      userName: 'Ella Michael',
      content: 'Good job!',
      date: '7:59 PM'
    },
    {
      img: image4,
      userName: 'Tomas John',
      content: 'Awesome!',
      date: 'Yesterday'
    }
  ];

  return (
    <div className="flex flex-col absolute top-[35px] w-full h-[calc(100%_-_50px)] overflow-hidden shadow-lg scroll-y overflow-y-auto custom-scrollbar rounded-lg bg-[rgba(252,250,248,1)]">
      <ListHeader title="Comments" closeCommentsList={closeCommentsList} />
      <div className='py-7 flex gap-6 flex-col px-6'>
       {commentsData.map((comment, index) => (
        <CommentListItem
          key={index} // Add a unique key for each comment
          img={comment.img}
          userName={comment.userName}
          content={comment.content}
          date={comment.date}
        />
      ))}        
      </div>
      <CreateCommentForm/>
    </div>
  );
}

export default CommentList;

