
function CreateCommentForm() {
  return (
    <form  className='border-t-[1.5px] border-t-[rgba(227,227,227,1)] mt-auto min-h-[70px] w-full flex' >
        <input type='text' className="pl-[70px] flex-grow  bg-transparent placeholder:text-sm !w-[calc(100%_-_50px)]
         focus:placeholder:text-customblack outline-none " placeholder="Add a comment..."/>
        <button type='submit' className="pr-7 text-sm">Post</button>
    </form>
  )
}

export default CreateCommentForm