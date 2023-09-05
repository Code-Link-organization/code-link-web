import Post from "./Post"
import {useLoaderData} from 'react-router-dom'

function Posts() {
      const posts=useLoaderData()
  return (
    <div className="w-3/5  border-r-[1px] border-r-primary border-opacity-30 bg-[rgba(237,237,237,1)]">
   {posts.map(post=><Post post={post} key={post.id}/>)}

    </div>
  )
}

export default Posts