import React from 'react';

// Import your icons here
import commentIcon from '../../../assets/images/posts/image 79.svg';
import likeIcon from '../../../assets/images/posts/icons8-like-24 2.svg';
import sharIcon from '../../../assets/images/posts/icons8-share-30 2.svg';

function PostDetails({ post }) {
  const icons = [
    { count: post.likes_count, icon: likeIcon, alt: 'Like Icon' },
    { count: post.comments_count, icon: commentIcon, alt: 'Comment Icon' },
    { count: post.shares_count, icon: sharIcon, alt: 'Share Icon' },
  ];

  return (
    <div className='flex justify-between px-4 py-4'>
      {icons.map(({ count, icon, alt }, index) => (
        <p key={index} className='flex items-center gap-3'>
          {count} <img src={icon} alt={alt} />
        </p>
      ))}
    </div>
  );
}

export default PostDetails;