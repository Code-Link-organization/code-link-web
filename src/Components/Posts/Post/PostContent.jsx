
function PostContent({post}) {
  return (
    <>
            <p className='text-base font-normal text-inter py-[14px] '>{post.content}</p>

            {post['image_path'] &&<img src={`http://localhost:8000/${post['image_path']}`} alt='post image' className='w-full' />}
    </>
  )
}

export default PostContent