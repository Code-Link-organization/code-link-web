/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";

function UploadImage({uploadIcon,value,setFormData,formData,setUploadFromDevice}) {
     const imageRef=useRef()
      const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
        setFormData({...formData,[value]:e.target.files[0]})
        setUploadFromDevice(true)
    }
  };

  return (
    <div className='flex'>
      <label htmlFor='file-input' className='cursor-pointer'>
    <img src={uploadIcon}/>
  </label>
  <input id="file-input" className='hidden' type="file" ref={imageRef}  onChange={imageChange}/>

 
    </div>
  )
}

export default UploadImage