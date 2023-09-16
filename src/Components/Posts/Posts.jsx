import Post from "./Post/Post"
import {useSelector} from 'react-redux'

function Posts() {
  const posts=useSelector(state=>state.posts).posts
 if(posts)
  return (
    <div>
   {posts.map(post=><Post post={post} key={post.id}/>)}

    </div>
  )
  else return <></>
}

export default Posts