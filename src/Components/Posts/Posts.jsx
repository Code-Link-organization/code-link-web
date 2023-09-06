import Post from "./Post/Post"
import {useLoaderData} from 'react-router-dom'

function Posts() {
      const posts=useLoaderData()
  return (
    <div className=" border-r-[1px] border-r-primary border-opacity-30 ">
   {posts.map(post=><Post post={post} key={post.id}/>)}

    </div>
  )
}

export default Posts