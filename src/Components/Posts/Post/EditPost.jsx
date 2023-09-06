import useFetch from '../../../CustomHooks/useFetch'

const options={
  method:'POST',
  headers:{
    'Accept':'application/json',
    'Authorization':'Bearer 19|PFTBIDNwhGkcdFxf7LqQMwc2zyggdbCp9T31HoGz',


  }
}
function EditPost({id}) {
  const {fetchApi:deletePost,error,loading} =useFetch(`http://localhost:8000/api/posts/delete/${id}`,options)

  
  return (
    <div>
        <button>Edit</button>
        <button onClick={deletePost}>Delete</button>
    </div>
  )
}

export default EditPost