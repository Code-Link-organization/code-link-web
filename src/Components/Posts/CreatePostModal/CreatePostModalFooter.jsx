import ReactLoading from 'react-loading';
function CreatePostModalFooter({closeModal,loading}) {
  return (
            <footer className='flex my-14 ml-auto w-fit space-x-3 text-2xl'>
          <button onClick={closeModal}>Cancel</button>
         { loading?
          <ReactLoading className="mx-auto" type={'spin'} color={"#D9C6A4"} height={50} width={50} />:
          <button type='submit' className='dark-btn'>Publish</button>}
        </footer>
  )
}

export default CreatePostModalFooter