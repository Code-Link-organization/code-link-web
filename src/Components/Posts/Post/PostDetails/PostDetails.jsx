/* eslint-disable react/prop-types */

// Import your icons here
import commentIcon from '../../../../assets/images/posts/image 79.svg';
import likeIcon from '../../../../assets/images/posts/icons8-like-24 2.svg';
import sharIcon from '../../../../assets/images/posts/icons8-share-30 2.svg';

function PostDetails({ post, openLikesList,openCommentsList,likesNumber,commentsNumber }) {
  const icons = [
    { count: likesNumber, icon: likeIcon, alt: 'Like Icon' ,click:openLikesList},
    { count: commentsNumber, icon: commentIcon, alt: 'Comment Icon',click:openCommentsList },
    { count: post.shares_count, icon: sharIcon, alt: 'Share Icon' },
  ];

  return (
    <div className='flex justify-between  py-4 border-b border-b-gray-300 border-b-opacity-100 border-b-solid border-b-[1.5px]'>
      {icons.map(({ count, icon, alt,click }, index) => (
        <button key={index} className='flex items-center gap-3 text-sm font-medium' onClick={click?()=>click(true):null}>
          {count} <img src={icon} alt={alt} className='w-5'/>
        </button>
      ))}
    </div>
  );
}

export default PostDetails;