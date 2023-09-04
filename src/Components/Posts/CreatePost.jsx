import emojisIcon from '../../assets/images/posts/icons8-smile-50 (1) 2.svg'
function CreatePost() {
  return (
    <div className="bg-[rgba(252,250,248,1)]  m-10 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-8 px-3"  >
        <h3 className="text-4xl font-bold text-center">Create Post </h3>
        <div>
          <div>
            <div>
              <button></button>
              <button></button>
            </div>
            <button><img src={emojisIcon} alt='emojis'/></button>
          </div>
        </div>

    </div>
  )
}

export default CreatePost