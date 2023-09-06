/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { useState } from 'react'
import EmojisComponent from './EmojisComponent'
import PostOptions from './PostOptions'
import UploadImages from './UploadImages'
import { toFormData } from '../../Functions/toFormData'
import useFetch from '../../CustomHooks/useFetch'
import ReactLoading from 'react-loading';

const options={
  method:'POST',
  headers:{
    'Accept':'application/json',
    'Authorization':'Bearer 19|PFTBIDNwhGkcdFxf7LqQMwc2zyggdbCp9T31HoGz',


  }
}
function CreatePostModal({closeModal}) {
      const [uploadedImage,setUploadedImage]=useState(null)
      const [contentValue,setContentValue]=useState('')
      const {fetchApi,loading}=useFetch('http://localhost:8000/api/posts/create',options,toFormData([{name:'content',value:contentValue},{value:uploadedImage,name:'file_path'}]))
     const changeHandler=(e)=>{
      setContentValue(e.target.value)
     }
     const publishHandler=async(e)=>{
      e.preventDefault()
      const resData=await fetchApi()
      console.log(resData)
      if(resData.result && resData.message){
        setUploadedImage(null)
        setContentValue('')
        closeModal()
      }
     }
  return (
    <form onSubmit={publishHandler} className="bg-[rgba(252,250,248,1)]  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-8 px-12 rounded-3xl w-[700px] max-w-full m-2"  >
        <h3 className="text-4xl font-bold text-center">Create Post </h3>
        <div className='w-full bg-white  mx-auto my-2 '>
          <textarea className='w-full min-h-[200px] resize-none outline-none p-2' onChange={changeHandler} value={contentValue}/>
          <div className='flex justify-between p-2' >
         <UploadImages setUploadedImage={setUploadedImage}/>  
         <EmojisComponent />  
          </div>
        </div>
        <PostOptions uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
        <div className='flex my-14 ml-auto w-fit space-x-3 text-2xl'>
          <button onClick={closeModal}>Cancel</button>
         { loading?
          <ReactLoading className="mx-auto" type={'spin'} color={"#D9C6A4"} height={50} width={50} />:
          <button type='submit' className='dark-btn'>Publish</button>}
        </div>

    </form>
  )
}

export default CreatePostModal