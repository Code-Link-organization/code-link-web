/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import useFetch from '../../../CustomHooks/useFetch';
import { toFormData } from '../../../Functions/toFormData';
import { postOptions } from '../../../options';
import { addPost } from '../../../store/posts/postsSlice';
import CreatePostForm from './CreatePostForm';

function CreatePostModal({ closeModal, editPost, post,editError,editLoading }) {
  const [uploadedImage, setUploadedImage] = useState(post && post['image_path'] ? `http://localhost:8000/${post['image_path']}` : null);
  const [contentValue, setContentValue] = useState(post ? post.content : '');
  const { fetchApi:createPost,  error:createError,loading:createLoading } = useFetch('http://localhost:8000/api/posts/create', postOptions);
  const dispatch=useDispatch()

  const changeHandler = (e) => {
    setContentValue(e.target.value);
  };

const publishHandler = async (e) => {
  e.preventDefault();
  let resData;
  if (editPost) {
    // If editing an existing post
    const formData = toFormData([
      { name: 'content', value: contentValue },
      uploadedImage ? { value: uploadedImage, name: 'file_path' } : null,
    ]);
    resData = await editPost(formData);
  } else {
    // If creating a new post
    const formData = toFormData([
      { name: 'content', value: contentValue },
      uploadedImage ? { value: uploadedImage, name: 'file_path' } : null,
    ]);
    resData = await createPost(formData);
  }
  if (resData.ok) {
    if (editPost) {
      dispatch(editPost(resData.data.post));
    } else {
      dispatch(addPost(resData.data.post));

    }
    setUploadedImage(null);
    setContentValue('');
    closeModal();
  }
};
  return (
    <CreatePostForm
      contentValue={contentValue}
      changeHandler={changeHandler}
      uploadedImage={uploadedImage}
      closeModal={closeModal}
      publishHandler={publishHandler}
      setUploadedImage={setUploadedImage}
      error={editError?editError:createError}
      loading={editLoading?editLoading:createLoading}

    />
  );
}

export default CreatePostModal;