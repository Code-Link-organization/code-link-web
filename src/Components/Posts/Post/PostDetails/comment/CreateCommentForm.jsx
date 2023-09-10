/* eslint-disable no-unused-vars */
import { useState } from "react"
import useFetch from "../../../../../CustomHooks/useFetch"
import { toFormData } from "../../../../../Functions/toFormData"
import { postOptions } from "../../../../../options"
import { addComment } from "../../../../../store/posts/postsSlice"
import { useDispatch } from 'react-redux';

function CreateCommentForm({id}) {
    const {fetchApi:createComment,loading}=useFetch(`http://localhost:8000/api/posts/${id}/comments/create`,postOptions)
    const [comment,setComment]=useState('')
    const dispatch=useDispatch() 
    const handleSubmit=async(e)=>{
            e.preventDefault()
            if(comment.trim()!==''){
                const resData=await createComment(toFormData([{name:'content',value:comment}]))
                if(resData.ok){
                    dispatch(addComment({comments:resData.data.comments,postId:id}))
                }


            }
        }

  return (
    <form onSubmit={handleSubmit}  className='border-t-[1.5px] border-t-[rgba(227,227,227,1)] mt-auto min-h-[70px] w-full flex' >
        <input type='text' className="pl-[70px] flex-grow  bg-transparent placeholder:text-sm !w-[calc(100%_-_50px)]
         focus:placeholder:text-customblack outline-none " onChange={(e)=>setComment(e.target.value)} placeholder="Add a comment..."/>
        <button type='submit' className="pr-7 text-sm">Post</button>
    </form>
  )
}

export default CreateCommentForm