/* eslint-disable react/prop-types */
import imageIcon from '../../../assets/images/posts/image 100.svg'

function UploadImages({setUploadedImage}) {
      const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
        setUploadedImage(e.target.files[0])
        console.log(setUploadedImage)
    }
  };
  return (
    <div className='flex'>
      <label htmlFor='file-input' className='cursor-pointer'>
    <img src={imageIcon}/>
  </label>
  <input id="file-input" className='hidden' type="file"  onChange={imageChange}/>

 
    </div>
  )
}

export default UploadImages