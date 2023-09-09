import Post from "./Post/Post"
import {useSelector} from 'react-redux'

function Posts() {
  const posts=useSelector(state=>state.posts).posts
  return (
    <div >
   {posts.map(post=><Post post={post} key={post.id}/>)}

    </div>
  )
}

export default Posts