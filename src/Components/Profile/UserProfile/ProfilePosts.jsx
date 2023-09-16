/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { imgLink } from "../../../api";

function Posts({user}) {
  const posts=useSelector(state=>state.posts).posts;
  const userPosts=posts?posts.filter(post=>post.user_id==user.id):[]
  

  return (
    <div className="bg-white pt-4  w-full">
     <span className="border-t-[rgba(251,249,247,1)] border-t-[11px] absolute left-0 w-full"></span>
     <h4 className="text-base font-semibold pt-5">Posts</h4>  
     { userPosts.length?   
      userPosts.map((post)=><img className="w-[86px] h-[78px]" key={post.id} src={`${imgLink}/${post.image_path}`}/>):
      <p className="py-2 text-base font-medium">No Posts</p>
     }
    </div>
  )
}

export default Posts