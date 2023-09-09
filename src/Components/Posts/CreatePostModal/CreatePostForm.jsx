/* eslint-disable react/prop-types */
import CreatePostModalFooter from './CreatePostModalFooter';
import PostOptions from '../Post/PostOptions';
import UploadImages from './UploadImages';
import EmojisComponent from '../EmojisComponent';


function CreatePostForm({ contentValue, changeHandler, uploadedImage,error,publishHandler,setUploadedImage,closeModal,loading }) {
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
      <CreatePostModalFooter closeModal={closeModal} loading={loading}  />
    </form>
  );
}

export default CreatePostForm;