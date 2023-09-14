/* eslint-disable react/prop-types */

function UploadTeamImage({uploadIcon,value,setTeamForm,teamForm,setUploadFromDevice}) {
      const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
        setTeamForm({...teamForm,[value]:e.target.files[0]})
        setUploadFromDevice(true)
        console.log('changed')
    }
  };
  return (
    <div className='flex'>
      <label htmlFor='file-input' className='cursor-pointer'>
    <img src={uploadIcon}/>
  </label>
  <input id="file-input" className='hidden' type="file"  onChange={imageChange}/>

 
    </div>
  )
}

export default UploadTeamImage