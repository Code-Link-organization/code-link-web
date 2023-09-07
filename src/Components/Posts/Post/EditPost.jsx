import useFetch from '../../../CustomHooks/useFetch';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../../../store/posts/postsSlice';
import ModalComponent from './ModalComponent';
import { useState } from 'react';
import { loadImageFromURL } from '../../../Functions/loadImageFromUrl';

const options = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer 19|PFTBIDNwhGkcdFxf7LqQMwc2zyggdbCp9T31HoGz',
  }
};

function EditPost({ post }) {
  const { fetchApi: deletePostFetch, error: deleteError, loading: deleteLoading } = useFetch(`http://localhost:8000/api/posts/delete/${post.id}`, options);
  const { fetchApi: editPostFetch, error: editError, loading: editLoading } = useFetch(`http://localhost:8000/api/posts/edit/${post.id}`, options);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const deletePostHandler = async () => {
    const resData = await deletePostFetch();
    if (resData.result) {
      dispatch(deletePost({ id:post.id }));
    }
  }
  
  return (
    <>
      <div>
        <button onClick={() => setOpen(true)}>Edit</button>
        <button onClick={deletePostHandler}>Delete</button>
      </div>
      <ModalComponent
        editPostFetch={editPostFetch}
        post={post}
        closeModal={() => setOpen(false)}
        open={open}
      />
    </>
  )
}

export default EditPost;
