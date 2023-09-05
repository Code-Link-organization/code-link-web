import { useState } from 'react'
import EmojisComponent from './EmojisComponent'
import PostOptions from './PostOptions'
import UploadImages from './UploadImages'
function CreatePostModal({closeModal}) {
      const [uploadedImage,setUploadedImage]=useState(null)


  return (
    <div className="bg-[rgba(252,250,248,1)]  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-8 px-12 rounded-3xl w-[700px] max-w-full m-2"  >
        <h3 className="text-4xl font-bold text-center">Create Post </h3>
        <div className='w-full bg-white  mx-auto my-2 '>
          <textarea className='w-full min-h-[200px] resize-none'/>
          <div className='flex justify-between p-2' >
         <UploadImages setUploadedImage={setUploadedImage}/>  
         <EmojisComponent />  
          </div>
        </div>
        <PostOptions uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
        <div className='flex my-14 ml-auto w-fit space-x-3 text-2xl'>
          <button onClick={closeModal}>Cancel</button>
          <button className='dark-btn'>Publish</button>
        </div>

    </div>
  )
}

export default CreatePostModal