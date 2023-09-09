
function PostContent({post}) {
  return (
    <>
            {post['image_path'] &&<img src={`http://localhost:8000/${post['image_path']}`} alt='post image' className='w-full' />}
        <p className='text-base font-normal text-inter py-[14px] '>{post.content}</p>
    </>
  )
}

export default PostContent