/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import EmojisComponent from '../EmojisComponent';
import PostOptions from '../Post/PostOptions';
import UploadImages from '../UploadImages';
import { toFormData } from '../../../Functions/toFormData';
import useFetch from '../../../CustomHooks/useFetch';
import CreatePostModalFooter from './CreatePostModalFooter';
import { useNavigate } from 'react-router-dom';
import { loadImageFromURL } from '../../../Functions/loadImageFromUrl';

const options = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer 19|PFTBIDNwhGkcdFxf7LqQMwc2zyggdbCp9T31HoGz',
  }
};

function CreatePostModal({ closeModal, editPost, post }) {
  const [uploadedImage, setUploadedImage] = useState(post&&post['image_path'] ?`http://localhost:8000/${post['image_path']}`: null);
  const [contentValue, setContentValue] = useState(post ? post.content : '');
  const navigate = useNavigate();
  const { fetchApi:createPost, loading, error } = useFetch('http://localhost:8000/api/posts/create', options);

  const changeHandler = (e) => {
    setContentValue(e.target.value);
  };

  const publishHandler = async (e) => {
    e.preventDefault();
    let resData;
    if (editPost) {
            console.log(uploadedImage)

      resData = await editPost(toFormData([{ name: 'content', value: contentValue }, uploadedImage ? { value: uploadedImage, name: 'file_path' } : null]));
    } else {
      // resData = await createPost(toFormData([{ name: 'content', value: contentValue }, uploadedImage ? { value: uploadedImage, name: 'file_path' } : null]));
    }
    if (resData.result && resData.message) {
      setUploadedImage(null);
      setContentValue('');
      closeModal();
      // navigate(0);
    }
  };

  return (
    <form onSubmit={publishHandler} className="bg-[rgba(252,250,248,1)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-8 px-12 rounded-3xl w-[700px] max-w-full m-2">
      <h3 className="text-4xl font-bold text-center">Create Post</h3>
      <div className='w-full bg-white mx-auto my-2'>
        <textarea className='w-full min-h-[200px] resize-none outline-none p-2' onChange={changeHandler} value={contentValue} />
        <div className='flex justify-between p-2'>
          <UploadImages setUploadedImage={setUploadedImage} />
          <EmojisComponent />
        </div>
      </div>
      {error ? <p className='text-red-800 font-medium'>*{error}</p> : ''}
      <PostOptions uploadedImage={uploadedImage} setUploadedImage={setUploadedImage} />
      <CreatePostModalFooter closeModal={closeModal} loading={loading} />
    </form>
  );
}

export default CreatePostModal;